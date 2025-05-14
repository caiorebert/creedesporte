<template>
  <div class="bg-black">
    <h1 class="bg-black font-bold text-2xl text-(--ui-primary) p-2">
      Creed Esporte 
    </h1>
    <hr style="color: gray;">
    <div class="h-20 p-5 flex items-center justify-center bg-black">
      <label class="font-bold text-(--ui-primary)">A sua crença do esporte está aqui</label>
    </div>
    <hr style="color: gray;">
    <div class="flex items-center bg-black">
      <UIcon name="i-lucide-chevron-left" class="size-5" style="color: white;"/>
      <UCarousel v-slot="{ item }" :items="items" class="w-full max-w-xs mx-auto">
        <img style="margin: 5px;" :src="item.src" width="320" height="320" class="rounded-lg">
      </UCarousel>
      <UIcon name="i-lucide-chevron-right" class="size-5" style="color: white;"/>
    </div>
    <div class="p-3 text-1sm">
      <label style="color: gray;">Arraste pro lado</label>
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
          <img :src="item.src"/>
          <h2 class="text-(--ui-primary) font-bold mt-2">{{ item.alt }}</h2>
          <p v-if="item.descricao" class="text-gray-400">{{ item.descricao }}</p>
        </div>
      </UCarousel>
      <UIcon name="i-lucide-chevron-right" class="size-5" style="color: white;"/>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: 'Creed Esporte',
})
</script>