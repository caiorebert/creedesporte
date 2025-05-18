export const useAxios = () => {
    const { $axios } = useNuxtApp()
    //@ts-ignore
    $axios.defaults.baseURL = process.env.NUXT_PUBLIC_API_URL || 'http://localhost:3001'
    return $axios
}
  