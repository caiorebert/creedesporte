export const useAxios = () => {
    const config = useRuntimeConfig()
    const { $axios } = useNuxtApp()
    //@ts-ignore
    $axios.defaults.baseURL = config.public.API_URL || 'http://localhost:3001'
    return $axios
}
  