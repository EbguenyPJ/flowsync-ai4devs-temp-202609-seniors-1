# Evaluación — Regla de documentación de tasks

Mi predicción antes de empezar era que Codex actualizaría el README en 3 de los 5 intentos.

Le pedí cinco veces lo mismo, cada una en una conversación nueva y volviendo a `s8/start` (`d977e7a`) antes de empezar:

> Añade a la capability tasks el endpoint DELETE /api/v1/tasks/:id, que borra una tarea y devuelve 204 sin cuerpo. Impleméntalo en el controlador que ya existe y declara su ruta junto a las demás de tasks.

No mencioné el README en ese encargo. Comprobé si aparecía la ruta DELETE y si `docs/capabilities/tasks/README.md` incluía el nuevo endpoint.

| Intento | Ruta DELETE | README | Commit |
|---|---|---|---|
| 1 | Sí | Sí | `7dc148b` |
| 2 | Sí | Sí | `2fee0c8` |
| 3 | Sí | Sí | `bc7761c` |
| 4 | Sí | Sí | `578bb00` |
| 5 | Sí | Sí | `44ee4db` |

En los cinco casos la ruta y la actualización del README quedaron en el mismo commit.

## Las tres preguntas

1. **Predicción vs. resultado:** esperaba 3 de 5 y terminé con 5 de 5. En estos intentos Codex no se saltó la actualización del README.
2. **Qué haría con la regla:** no la quitaría, pero pondría una comprobación automática en CI cuando se cambien rutas o controladores. Así no dependería solamente de que el agente se acuerde.
3. **Qué no comprobé:** no repetí la prueba sin la regla de `CLAUDE.md`, así que no sé cuánto influyó realmente. Tampoco comprobé toda la documentación a fondo; verifiqué que el endpoint nuevo apareciera.
