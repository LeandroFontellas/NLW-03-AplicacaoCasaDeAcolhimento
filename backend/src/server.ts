import express from 'express'
import path from 'path'
import 'express-async-errors'
import './database/connection'//chamando a conexao com o banco
import cors from 'cors'

import routes from './routes'
import errorHandler from './errors/handler'

const app = express()

app.use(cors())//cors faz com que todos os front ends consigam acessar o back sem ser do msm dominio
app.use(express.json())//falando que vamos usar json nessa app
app.use(routes)
app.use('/uploads',express.static(path.join(__dirname,'..','/uploads')))
app.use(errorHandler)

app.listen(3333)