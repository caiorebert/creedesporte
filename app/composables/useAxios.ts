export const useAxios = () => {
    const { $axios } = useNuxtApp()
    //@ts-ignore
    $axios.defaults.baseURL = process.env.API_URL || 'http://localhost:3001'
    return $axios
}
  