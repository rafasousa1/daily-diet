// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
    export interface Tables {
        diet: {
            id: string
            nome: string
            descricao: string
            created_at: number
            estaNaDieta: boolean
            session_id?: string
        }
    }
}