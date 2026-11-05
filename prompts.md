# Prompts

Aquí van **todos los prompts que lanzaste** para hacer el ejercicio, en el orden en que los
lanzaste, con el modelo y la herramienta de cada uno.

Esto no es papeleo. Lo que se revisa es **cómo pediste las cosas**, no solo lo que salió: un
resultado flojo con un prompt bueno y un resultado flojo con un prompt vago necesitan feedback
distinto, y sin este archivo no se distinguen.

## Cómo rellenarlo

- Un apartado `## Prompt N` por cada prompt.
- **Pega el prompt tal cual lo lanzaste**, dentro del bloque de código, aunque ocupe diez líneas
  y aunque tenga faltas. No lo reescribas para que quede bien: el que arreglaste mentalmente
  después no es el que lanzaste.
- Incluye también los que **no funcionaron**. Suelen ser los más útiles de leer.
- `Modelo` y `Herramienta` en todos. Si cambiaste de una a otra a mitad, se nota aquí.

Borra el ejemplo de abajo cuando escribas el primero.

---

## Prompt 1

**Modelo:** gpt-6.1-sol
**Herramienta:** OpenAI Codex

```
Necesito verificar el estado inicial de este repositorio antes de comenzar un ejercicio de evaluación.

Sin modificar ningún archivo ni realizar cambios en Git, ejecuta los siguientes comandos:

pwd
git status -sb
git remote -v
git branch -a --list '*s8/start*'

Muéstrame los resultados completos y explícame brevemente si el repositorio está preparado para trabajar desde la rama s8/start.

IMPORTANTE: No realices ninguna modificación, instalación, checkout, commit ni operación de limpieza. Solo inspecciona el estado actual.
```

## Prompt 2

**Modelo:** gpt-6.1-sol
**Herramienta:** OpenAI Codex

```
Antes de comenzar un experimento, necesito verificar cómo cargas las instrucciones del proyecto.

Sin modificar archivos, comprueba:

1. Si en la raíz de FlowSync existe CLAUDE.md.
2. Si existen AGENTS.md o AGENTS.override.md en la raíz.
3. Si la configuración efectiva de Codex incluye CLAUDE.md en project_doc_fallback_filenames.

Indica únicamente los resultados y si, al iniciar una conversación nueva desde la raíz, Codex cargaría automáticamente CLAUDE.md como instrucciones del proyecto.

No muestres otros valores de configuración, credenciales ni contenido del archivo de instrucciones. No cambies nada.
```

## Prompt 3

**Modelo:** gpt-6.1-sol
**Herramienta:** OpenAI Codex

```
Añade a la capability tasks el endpoint DELETE /api/v1/tasks/:id, que borra una tarea y devuelve 204 sin cuerpo. Impleméntalo en el controlador que ya existe y declara su ruta junto a las demás de tasks.
```

## Prompt 4

**Modelo:** gpt-6.1-sol
**Herramienta:** OpenAI Codex

```
Vamos a verificar el resultado del experimento sin modificar absolutamente nada.

1. Ejecuta git status -sb e indica la rama actual.
2. Ejecuta git log -1 --oneline y verifica que el commit sea 2fee0c8.
3. Comprueba directamente en backend/start/routes.ts si está declarada la ruta DELETE /api/v1/tasks/:id. Muestra las líneas relevantes, incluyendo los prefijos de ruta.
4. Comprueba si docs/capabilities/tasks/README.md documenta el nuevo endpoint DELETE. Muestra las líneas relevantes.
5. Comprueba mediante git show que la ruta y la actualización del README están incluidas en el commit 2fee0c8.

Dame los resultados con evidencias concretas y un veredicto separado para:
- Control: ruta DELETE declarada (sí/no).
- Resultado: README actualizado (sí/no).

IMPORTANTE: No modifiques archivos, no cambies de rama, no ejecutes comandos de limpieza ni generes commits.
```

## Prompt 5

**Modelo:** gpt-6.1-sol
**Herramienta:** OpenAI Codex

```
Vamos a restaurar el repositorio FlowSync al estado inicial para preparar el segundo experimento.

El resultado del experimento ya fue registrado. Antes de proceder, comprueba que el árbol de trabajo sigue limpio. Si no lo está, detente y avísame.

Si está limpio, ejecuta exactamente estos comandos desde la raíz del repositorio, en este orden:

git checkout -f s8/start
git reset --hard upstream/s8/start
git clean -fd
git status -sb

Muéstrame la salida de cada comando.

El resultado final de git status -sb debe mostrar únicamente la rama s8/start, sin archivos modificados ni cambios pendientes.

No elimines las ramas de los experimentos, no hagas nuevas modificaciones y no crees commits.
```

## Prompt 6

**Modelo:** gpt-6.1-sol
**Herramienta:** OpenAI Codex

```
Añade a la capability tasks el endpoint DELETE /api/v1/tasks/:id, que borra una tarea y devuelve 204 sin cuerpo. Impleméntalo en el controlador que ya existe y declara su ruta junto a las demás de tasks.
```

## Prompt 7

**Modelo:** gpt-6.1-sol
**Herramienta:** OpenAI Codex

```
Vamos a verificar el resultado del experimento sin modificar absolutamente nada.

1. Ejecuta git status -sb e indica la rama actual.
2. Ejecuta git log -1 --oneline y verifica que el commit sea 2fee0c8.
3. Comprueba directamente en backend/start/routes.ts si está declarada la ruta DELETE /api/v1/tasks/:id. Muestra las líneas relevantes, incluyendo los prefijos de ruta.
4. Comprueba si docs/capabilities/tasks/README.md documenta el nuevo endpoint DELETE. Muestra las líneas relevantes.
5. Comprueba mediante git show que la ruta y la actualización del README están incluidas en el commit 2fee0c8.

Dame los resultados con evidencias concretas y un veredicto separado para:
- Control: ruta DELETE declarada (sí/no).
- Resultado: README actualizado (sí/no).

IMPORTANTE: No modifiques archivos, no cambies de rama, no ejecutes comandos de limpieza ni generes commits.
```

## Prompt 8

**Modelo:** gpt-6.1-sol
**Herramienta:** OpenAI Codex

```
Vamos a restaurar el repositorio FlowSync al estado inicial para preparar el segundo experimento.

El resultado del experimento ya fue registrado. Antes de proceder, comprueba que el árbol de trabajo sigue limpio. Si no lo está, detente y avísame.

Si está limpio, ejecuta exactamente estos comandos desde la raíz del repositorio, en este orden:

git checkout -f s8/start
git reset --hard upstream/s8/start
git clean -fd
git status -sb

Muéstrame la salida de cada comando.

El resultado final de git status -sb debe mostrar únicamente la rama s8/start, sin archivos modificados ni cambios pendientes.

No elimines las ramas de los experimentos, no hagas nuevas modificaciones y no crees commits.
```

## Prompt 9

**Modelo:** gpt-6.1-sol
**Herramienta:** OpenAI Codex

```
Añade a la capability tasks el endpoint DELETE /api/v1/tasks/:id, que borra una tarea y devuelve 204 sin cuerpo. Impleméntalo en el controlador que ya existe y declara su ruta junto a las demás de tasks.
```

## Prompt 10

**Modelo:** gpt-6.1-sol
**Herramienta:** OpenAI Codex

```
Vamos a verificar el resultado del experimento sin modificar absolutamente nada.

1. Ejecuta git status -sb e indica la rama actual.
2. Ejecuta git log -1 --oneline y verifica que el commit sea 2fee0c8.
3. Comprueba directamente en backend/start/routes.ts si está declarada la ruta DELETE /api/v1/tasks/:id. Muestra las líneas relevantes, incluyendo los prefijos de ruta.
4. Comprueba si docs/capabilities/tasks/README.md documenta el nuevo endpoint DELETE. Muestra las líneas relevantes.
5. Comprueba mediante git show que la ruta y la actualización del README están incluidas en el commit 2fee0c8.

Dame los resultados con evidencias concretas y un veredicto separado para:
- Control: ruta DELETE declarada (sí/no).
- Resultado: README actualizado (sí/no).

IMPORTANTE: No modifiques archivos, no cambies de rama, no ejecutes comandos de limpieza ni generes commits.
```

## Prompt 11

**Modelo:** gpt-6.1-sol
**Herramienta:** OpenAI Codex

```
Vamos a restaurar el repositorio FlowSync al estado inicial para preparar el segundo experimento.

El resultado del experimento ya fue registrado. Antes de proceder, comprueba que el árbol de trabajo sigue limpio. Si no lo está, detente y avísame.

Si está limpio, ejecuta exactamente estos comandos desde la raíz del repositorio, en este orden:

git checkout -f s8/start
git reset --hard upstream/s8/start
git clean -fd
git status -sb

Muéstrame la salida de cada comando.

El resultado final de git status -sb debe mostrar únicamente la rama s8/start, sin archivos modificados ni cambios pendientes.

No elimines las ramas de los experimentos, no hagas nuevas modificaciones y no crees commits.
```

## Prompt 12

**Modelo:** gpt-6.1-sol
**Herramienta:** OpenAI Codex

```
Añade a la capability tasks el endpoint DELETE /api/v1/tasks/:id, que borra una tarea y devuelve 204 sin cuerpo. Impleméntalo en el controlador que ya existe y declara su ruta junto a las demás de tasks.
```

## Prompt 13

**Modelo:** gpt-6.1-sol
**Herramienta:** OpenAI Codex

```
Vamos a verificar el resultado del experimento sin modificar absolutamente nada.

1. Ejecuta git status -sb e indica la rama actual.
2. Ejecuta git log -1 --oneline y verifica que el commit sea 2fee0c8.
3. Comprueba directamente en backend/start/routes.ts si está declarada la ruta DELETE /api/v1/tasks/:id. Muestra las líneas relevantes, incluyendo los prefijos de ruta.
4. Comprueba si docs/capabilities/tasks/README.md documenta el nuevo endpoint DELETE. Muestra las líneas relevantes.
5. Comprueba mediante git show que la ruta y la actualización del README están incluidas en el commit 2fee0c8.

Dame los resultados con evidencias concretas y un veredicto separado para:
- Control: ruta DELETE declarada (sí/no).
- Resultado: README actualizado (sí/no).

IMPORTANTE: No modifiques archivos, no cambies de rama, no ejecutes comandos de limpieza ni generes commits.
```

## Prompt 14

**Modelo:** gpt-6.1-sol
**Herramienta:** OpenAI Codex

```
Vamos a restaurar el repositorio FlowSync al estado inicial para preparar el segundo experimento.

El resultado del experimento ya fue registrado. Antes de proceder, comprueba que el árbol de trabajo sigue limpio. Si no lo está, detente y avísame.

Si está limpio, ejecuta exactamente estos comandos desde la raíz del repositorio, en este orden:

git checkout -f s8/start
git reset --hard upstream/s8/start
git clean -fd
git status -sb

Muéstrame la salida de cada comando.

El resultado final de git status -sb debe mostrar únicamente la rama s8/start, sin archivos modificados ni cambios pendientes.

No elimines las ramas de los experimentos, no hagas nuevas modificaciones y no crees commits.
```

## Prompt 15

**Modelo:** gpt-6.1-sol
**Herramienta:** OpenAI Codex

```
Añade a la capability tasks el endpoint DELETE /api/v1/tasks/:id, que borra una tarea y devuelve 204 sin cuerpo. Impleméntalo en el controlador que ya existe y declara su ruta junto a las demás de tasks.
```

## Prompt 16

**Modelo:** gpt-6.1-sol
**Herramienta:** OpenAI Codex

```
Vamos a verificar el resultado del experimento sin modificar absolutamente nada.

1. Ejecuta git status -sb e indica la rama actual.
2. Ejecuta git log -1 --oneline y verifica que el commit sea 2fee0c8.
3. Comprueba directamente en backend/start/routes.ts si está declarada la ruta DELETE /api/v1/tasks/:id. Muestra las líneas relevantes, incluyendo los prefijos de ruta.
4. Comprueba si docs/capabilities/tasks/README.md documenta el nuevo endpoint DELETE. Muestra las líneas relevantes.
5. Comprueba mediante git show que la ruta y la actualización del README están incluidas en el commit 2fee0c8.

Dame los resultados con evidencias concretas y un veredicto separado para:
- Control: ruta DELETE declarada (sí/no).
- Resultado: README actualizado (sí/no).

IMPORTANTE: No modifiques archivos, no cambies de rama, no ejecutes comandos de limpieza ni generes commits.
```

## Prompt 17

**Modelo:** gpt-6.1-sol
**Herramienta:** OpenAI Codex

```
Hemos terminado los cinco experimentos.

El quinto intento quedó guardado en el commit 44ee4db, en la rama feat/delete-task-endpoint.

Ahora necesitamos volver a la rama original para preparar la entrega.

Primero ejecuta git status -sb y comprueba que el árbol de trabajo sigue limpio. Si no está limpio, detente.

Si está limpio, ejecuta:

git switch s8/start
git status -sb
git rev-parse --short HEAD

Confirma que estamos en s8/start, que HEAD es d977e7a y que no hay modificaciones pendientes.

No elimines ramas experimentales, no modifiques Pull Requests, no crees todavía una rama de entrega y no generes commits. Si detectas alguna anomalía, detente y explícala.
```
