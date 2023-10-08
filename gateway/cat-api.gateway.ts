import axios from "axios"

interface IImage {
    id: string,
    url: string,
    width: number,
    height: number
}

export const getImages = async (): Promise<IImage[]> => {
    const response = await axios.get<IImage[]>(`${process.env.CAT_API_BASE_URL}/images/search`, {
        headers: {
            Authorization: 'x-api-key' + process.env.CAT_API_KEY
        }
    })

    return response.data
}