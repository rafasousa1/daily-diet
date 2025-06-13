import knex from 'knex'
import { Knex } from 'knex'

export const config: Knex.Config = {
	client: 'sqlite3',
	connection: {
		filename: './db/app.db' // URL BANCO DE DADOS
	},
	useNullAsDefault: true,
	migrations: {
		extension: 'ts',
		directory: './db/migrations'
	}
}

export const db = knex(config)