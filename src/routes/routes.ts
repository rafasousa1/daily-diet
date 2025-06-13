import fastify from 'fastify'
import { db } from '../database'

const app = fastify()

app.get('/diets', async () => {
	const diets = db('diet').select()

	return { diets }
})

app.listen({
	port: 3333
}).then(() => console.log('Server On!'))