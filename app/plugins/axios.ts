import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const instance = axios.create({
    baseURL: "http://localhost:3001/" // Usa variável do .env
  })

  nuxtApp.provide('axios', instance)
})
