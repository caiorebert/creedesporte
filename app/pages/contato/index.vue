<template>
    <div class="bg-black h-screen">
        <h1 class="bg-black font-bold text-4xl text-(--ui-primary) p-2 text-center">
          Creed Esporte 
        </h1>
        <UNavigationMenu 
            collapsed
            orientation="horizontal"
            :items="menus"
            class="text-white w-full justify-center"/>
        <hr style="color: gray;">
        <div class="p-2">
            <h2 class="text-primary">Nossas redes sociais</h2>
            <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 p-2 bg-black">
                <div>
                    <label class="text-white">Instagram: </label><br>
                    <UButton size="lg" icon="i-lucide-instagram" to="https://www.instagram.com/creed.esporte" target="_blank">Creed Esporte</UButton>
                </div>
                <div>
                    <label class="text-white">Whatsapp: </label><br>
                    <UButton size="lg" icon="i-lucide-phone" to="https://wa.me/5584981289928" target="_blank">Creed Esporte</UButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { ref } from 'vue'

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