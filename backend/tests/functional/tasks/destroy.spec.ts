import Task from '#models/task'
import User from '#models/user'
import testUtils from '@adonisjs/core/services/test_utils'
import { test } from '@japa/runner'

/** Contrato de DELETE /api/v1/tasks/:id: borrado, 204 sin cuerpo, 404 y sesión obligatoria. */
test.group('Tasks | borrado', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())

  async function createTask() {
    const user = await User.create({ email: 'borrado@example.com', password: 'secreto123' })
    const task = await Task.create({
      title: 'Tarea a borrar',
      status: 'pending',
      assigneeId: user.id,
    })

    return { user, task }
  }

  test('borra la tarea y devuelve 204 sin cuerpo', async ({ client, assert }) => {
    const { user, task } = await createTask()
    const otherTask = await Task.create({
      title: 'Tarea que se conserva',
      status: 'done',
      assigneeId: user.id,
    })

    const response = await client.delete(`/api/v1/tasks/${task.id}`).loginAs(user)

    response.assertStatus(204)
    assert.equal(response.text(), '')
    assert.isNull(await Task.find(task.id))
    assert.isNotNull(await Task.find(otherTask.id))

    const repeated = await client.delete(`/api/v1/tasks/${task.id}`).loginAs(user)
    repeated.assertStatus(404)
  })

  test('una cuenta puede borrar una tarea de otro responsable', async ({ client, assert }) => {
    const { task } = await createTask()
    const otherUser = await User.create({ email: 'equipo@example.com', password: 'secreto123' })

    const response = await client.delete(`/api/v1/tasks/${task.id}`).loginAs(otherUser)

    response.assertStatus(204)
    assert.isNull(await Task.find(task.id))
  })

  test('sin sesión no se borra la tarea', async ({ client, assert }) => {
    const { task } = await createTask()

    const response = await client.delete(`/api/v1/tasks/${task.id}`)

    response.assertStatus(401)
    assert.isNotNull(await Task.find(task.id))
  })

  test('OpenAPI documenta el 204 sin contenido', async ({ client, assert }) => {
    const response = await client.get('/api.json')

    response.assertStatus(200)
    const document = response.body() as {
      paths: Record<string, { delete: { security: unknown; responses: Record<string, object> } }>
    }
    const operation = document.paths['/api/v1/tasks/{id}'].delete
    assert.deepEqual(operation.security, [{ bearer: [] }])
    assert.deepEqual(Object.keys(operation.responses).sort(), ['204', '401', '404'])
    assert.notProperty(operation.responses['204'], 'content')
  })
})
