import fastify from 'fastify'
import { dietRoutes } from './routes/routes'
import { env } from './env'

export const app = fastify()

app.register(dietRoutes)


app.listen({
	port: env.PORT
}).then(() => console.log('Server On!'))