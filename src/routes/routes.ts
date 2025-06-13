import { FastifyInstance } from 'fastify'
import { db } from '../database'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'

export async function dietRoutes(app: FastifyInstance) {
	app.get('/', async () => {
		const diets = await db('diet').select()

		return { diets }
	})

	app.post('/', async (req, res) => {
		const createDietSchema = z.object({
			nome: z.string(),
			descricao: z.string(),
			estaNaDieta: z.boolean()
		})

		const { nome, descricao, estaNaDieta } = createDietSchema.parse(req.body)

		await db('diet').insert({
			id: randomUUID(),
			nome,
			descricao,
			estaNaDieta
		})

		return res.status(201).send()
	})
}