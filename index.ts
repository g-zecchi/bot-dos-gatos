import * as dotenv from 'dotenv'
import { tweet } from './services/tweet.service'

dotenv.config()
console.log('chamei1 ')
setTimeout(tweet, 60000)




