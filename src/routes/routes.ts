import { FastifyInstance } from 'fastify'
import { db } from '../database'

export async function dietRoutes(app: FastifyInstance) {
	app.get('/diets', async () => {
		const diets = db('diet').select()

		return { diets }
	})
}