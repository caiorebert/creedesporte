<template>
  <div class="min-h-screen bg-[#000000] text-white font-sans">
    
    <header class="py-6 border-b border-gray-800 text-center">
      <h1 class="text-3xl font-bold text-[#00FF7F] tracking-tighter uppercase">Creed Esporte</h1>
      <p class="text-xs text-gray-400 mt-2 italic">A sua crença do esporte está aqui</p>
    </header>

    <main class="max-w-7xl mx-auto px-4 py-12">
      <h2 class="text-2xl font-semibold mb-8 border-l-4 border-[#00FF7F] pl-4">Chuteiras & Artigos</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="produto in produtos" :key="produto.id" 
             class="group bg-[#0a0a0a] border border-gray-800 rounded-lg overflow-hidden hover:border-[#00FF7F] transition-all duration-300">
          
          <div class="relative aspect-square bg-[#1a1a1a] overflow-hidden">
            <img :src="produto.imagem" :alt="produto.nome" class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute top-2 right-2 bg-[#00FF7F] text-black text-[10px] font-bold px-2 py-1 rounded">
              NOVIDADE
            </div>
          </div>

          <div class="p-5">
            <h3 class="text-lg font-medium tracking-wide">{{ produto.nome }}</h3>
            <p class="text-[#00FF7F] font-bold text-xl mt-2">R$ {{ produto.preco }}</p>
            
            <a 
              :href="'/produto/' + produto.id">
              <button class="w-full mt-4 bg-transparent border border-[#00FF7F] text-[#00FF7F] py-2 rounded uppercase text-sm font-bold hover:bg-[#00FF7F] hover:text-black transition-colors">
                Ver Detalhes
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>

import lista from '@/data/produtos.json';

const produtos = ref(lista)
</script>