import * as dotenv from 'dotenv'
import { tweet } from './services/tweet.service'

dotenv.config()

setTimeout(tweet, 1728000)




