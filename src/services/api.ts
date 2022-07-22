import axios from 'axios'

interface IFunType {
  [choice: string]: Function
}

export type IType = 'get' | 'post' | 'put' | 'delete'

async function api(url: string, type: IType, data: any) {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  })

  const funType: IFunType = {
    async get() {
      try {
        const result = await api.get(url)
        return result.data
      } catch (error) {
        console.log(error)
        throw error
      }
    },
    async post() {
      try {
        const result = await api.post(url, data)
        return result.data
      } catch (error) {
        console.log(error)
        throw error
      }
    },
    async put() {
      try {
        const result = await api.put(url, data)
        return result.data
      } catch (error) {
        console.log(error)
        throw error
      }
    },
    async delete() {
      try {
        const result = await api.delete(url)
        return result.data
      } catch (error) {
        console.log(error)
        throw error
      }
    },
  }
  const result = await funType[type]()
  return result
}

export default api
