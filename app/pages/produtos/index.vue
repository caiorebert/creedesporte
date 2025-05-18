<template>
    <div class="bg-black h-screen">
        <UNavigationMenu 
            collapsed
            orientation="horizontal"
            :items="menus"
            class="text-white w-full justify-center"/>
        <hr style="color: gray;">
        <div class="bg-black h-full">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-black">
                <div 
                    v-for="(produto, index) in produtos" 
                    :key="index" 
                    class="bg-gray-800 rounded-lg shadow-md overflow-hidden"
                >
                    <img 
                        :src="produto.url" 
                        :alt="produto.alt" 
                        class="w-full h-48 object-cover"
                    />
                    <div class="p-4">
                        <p class="text-primary font-semibold">{{ produto.nome }}</p>
                        <p class="text-white text-sm mt-2">{{ produto.descricao || 'Descrição não disponível' }}</p>
                    </div>
                    <div class="grid grid-cols-2 gap-2 p-4">
                      <div>
                        <p class="text-primary font-semibold">R$ {{ produto.preco }}</p>
                      </div>
                      <div class="text-center">
                        <UButton 
                            :to="`/produtos/${produto.id}`"
                            class="bg-primary text-white hover:bg-primary-dark rounded-lg p-2"
                            >Adicionar no carrinho</UButton>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { useAxios } from '~/composables/useAxios';

const axios = useAxios();

const produtos = ref<any[]>([]);

useHead({
  title: 'Creed Esporte',
})

onMounted(async () => {
  // @ts-ignore
  const response = await axios.get('/produtos');
  produtos.value = response.data
})

const menus = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'i-lucide-house',
    to: '/',
    children: [],
  },
  {
    label: 'Catálogo',
    icon: 'i-lucide-list',
    to: '/produtos',
    children: []
  },
  {
    label: 'Contato',
    icon: 'i-lucide-phone',
    to: '/contato',
    children: []
  }
])
</script>