import { TwitterApi } from 'twitter-api-v2'
import { getImages } from '../gateway/cat-api.gateway'
import axios from 'axios'

const twitterClient = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY!,
    appSecret: process.env.TWITTER_API_SECRET_KEY!,
    accessSecret: process.env.TWITTER_ACESS_TOKEN_SECRET!,
    accessToken: process.env.TWITTER_ACESS_TOKEN!
})

const getImageBuffer = async (imageUrl: string): Promise<Buffer> => {
    const response = await axios.get<string>(imageUrl, {
        responseType: 'arraybuffer'
    })

    return Buffer.from(response.data, 'binary')
}

const getImageType = (imageUrl: string): string => {
    const urlParts = imageUrl.split('.')
    const type = urlParts.pop()!
    return `image/${type}`
}

export const tweet = async () => {
    try {
        const imageUrl = (await getImages())[0].url
        const imageBuffer = await getImageBuffer(imageUrl)
        const mimeType = getImageType(imageUrl)
        const mediaId = await twitterClient.v1.uploadMedia(imageBuffer, { mimeType })
        await twitterClient.v2.tweet('', { media: { media_ids: [mediaId] } })
    } catch (error) {
        console.error(error)
    }
}