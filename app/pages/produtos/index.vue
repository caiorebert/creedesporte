<template>
    <div class="bg-black h-screen">
        <UNavigationMenu 
            collapsed
            orientation="horizontal"
            :items="menus"
            class="text-white w-full justify-center"/>
        <hr style="color: gray;">
        <div class="bg-black h-full">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                <div 
                    v-for="(produto, index) in produtos" 
                    :key="index" 
                    class="bg-gray-800 rounded-lg shadow-md overflow-hidden"
                >
                    <img 
                        :src="produto.src" 
                        :alt="produto.alt" 
                        class="w-full h-48 object-cover"
                    />
                    <div class="p-4">
                        <p class="text-primary font-semibold">{{ produto.alt }}</p>
                        <p class="text-white text-sm mt-2">{{ produto.descricao || 'Descrição não disponível' }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

useHead({
  title: 'Creed Esporte',
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
    to: '/components',
    children: []
  }
])

const produtos = [
  {
    src: '/images/produtos/img1.jpeg',
    alt: 'Camisa do Corinthians',
    descricao: 'Camisa modelo torcedor'
  },
  {
    src: '/images/produtos/img5.jpeg',
    alt: 'Camisa do Corinthians',
    descricao: 'Camisa modelo torcedor'
  },
  {
    src: '/images/produtos/img6.jpeg',
    alt: 'Camisa do Corinthians',
    descricao: 'Camisa modelo torcedor'
  },
  {
    src: '/images/produtos/img2.jpeg',
    alt: 'Chuteira Nike',
  },
  {
    src: '/images/produtos/img3.jpeg',
    alt: 'Chuteira Nike',
  },
  {
    src: '/images/produtos/img4.jpeg',
    alt: 'Chuteira Nike',
  },
];
</script>