import * as dotenv from 'dotenv'
import { tweet } from './cron/cron'

dotenv.config()

module.exports = async (req: any, res: any) => {
    try {
        await tweet()

        res.send({
            status: 200,
            message: "Cron done!",
        })
    } catch (error) {
        res.send({
            status: 500,
            message: "Error",
            data: error
        })
    }
}




