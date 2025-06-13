import knex from 'knex'
import { Knex } from 'knex'
import { env } from './env'

export const config: Knex.Config = {
	client: 'sqlite3',
	connection: {
		filename: env.DB_URL // URL BANCO DE DADOS
	},
	useNullAsDefault: true,
	migrations: {
		extension: 'ts',
		directory: './db/migrations'
	}
}

export const db = knex(config)