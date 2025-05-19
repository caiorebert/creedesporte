<template>
  <div class="bg-black">
    <h1 class="bg-black font-bold text-4xl text-(--ui-primary) p-2 text-center">
      Creed Esporte 
    </h1>
    <div >
      <UNavigationMenu 
        collapsed
        orientation="horizontal"
        :items="menus"
        class="text-white w-full justify-center"/>
    </div>
    <hr style="color: gray;">
    <div class="h-20 p-5 flex items-center justify-center bg-black">
      <label class="font-bold text-(--ui-primary)">A sua crença do esporte está aqui</label>
    </div>
    <hr style="color: gray;">
    <div class="h-full">
      <UCarousel
        arrows
        :prev="{ color: 'primary'}"
        :next="{ color: 'primary'}"
        v-slot="{ item }"
        :items="items"
        class="w-screen ">
        <div style="position: relative; height: 100%; overflow: hidden;">
          <img style="position: relative; margin: auto;" :src="item.src" width="320" height="320">
        </div>
      </UCarousel>
    </div>
    <div class="p-3 text-1sm">
      <label style="color: gray;">Arraste para o lado</label>
    </div>
    <hr style="color: gray;">
    <h1 class="font-bold text-2xl text-(--ui-primary) p-2 bg-black">
      Nossos produtos 
    </h1>
    <hr style="color: gray;">
    <div class="flex items-center bg-black p-2">
      <UIcon name="i-lucide-chevron-left" class="size-5" style="color: white;"/>
      <UCarousel v-slot="{ item }" :items="produtos" class="w-full max-w-xs mx-auto">
        <div class="bg-gray-800 rounded-lg p-4">
          <img :src="item.url"/>
          <h2 class="text-(--ui-primary) font-bold mt-2">{{ item.nome }}</h2>
          <p v-if="item.descricao" class="text-gray-400">{{ item.descricao }}</p>
          <hr class="mt-5 mb-5" style="color: gray;">
          <UButton to="/produtos">Ver catálogo</UButton>
        </div>
      </UCarousel>
      <UIcon name="i-lucide-chevron-right" class="size-5" style="color: white;"/>
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

const menus = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'i-lucide-house',
    to: '/',
    children: [],
    active: true,
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

const items = [
  {
    src: '/images/img1.jpg',
    alt: 'Image 1',
    descricao: 'Descrição do produto 1'
  },
  {
    src: '/images/img2.png',
    alt: 'Image 2',
    descricao: 'Descrição do produto 2'
  },
  {
    src: '/images/img3.png',
    alt: 'Image 3',
    descricao: 'Descrição do produto 3'
  },
  {
    src: '/images/img4.png',
    alt: 'Image 4',
    descricao: 'Descrição do produto 4'
  }
]

onMounted(async () => {
  // @ts-ignore
  const response = await axios.get('/produtos');
  produtos.value = response.data
})

</script>