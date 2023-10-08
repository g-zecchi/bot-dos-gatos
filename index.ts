import * as dotenv from 'dotenv'
import express from "express"
import { tweet } from './cron/cron'

const app = express()

app.use('/cron', tweet)

dotenv.config()




