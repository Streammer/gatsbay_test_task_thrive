const _baseUrl = 'http://localhost:4000/'

export const getRequest = async () => {
    try {
        const response = await fetch(`${_baseUrl}videos`)
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}
