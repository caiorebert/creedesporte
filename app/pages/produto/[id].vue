<template>
  <div v-if="produto" class="min-h-screen bg-[#000000] text-white font-sans">
    <nav class="p-6 border-b border-gray-800 flex justify-between items-center">
      <NuxtLink to="/" class="text-[#00FF7F] font-bold uppercase tracking-tighter hover:text-white transition">← Voltar</NuxtLink>
      <span class="text-xl font-black text-[#00FF7F]">CREED</span>
      <div class="w-10"></div> </nav>

    <main class="max-w-6xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <div class="flex flex-col-reverse md:flex-row gap-4">
          
          <div class="flex md:flex-col gap-3 md:w-24">
            <button 
              v-for="(img, index) in produto.imagens" 
              :key="index"
              @click="imagemSelecionada = img"
              class="aspect-square bg-[#0a0a0a] border rounded-lg overflow-hidden transition-all duration-300 w-20 md:w-full"
              :class="[
                imagemSelecionada === img 
                  ? 'border-[#00FF7F] shadow-[0_0_10px_rgba(0,255,127,0.3)]' 
                  : 'border-gray-800 hover:border-gray-600'
              ]"
            >
              <img :src="img" :alt="`Miniatura ${index + 1}`" class="object-cover w-full h-full p-2" />
            </button>
          </div>

          <div class="flex-1 aspect-square bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden flex items-center justify-center relative">
            <div class="absolute inset-0 bg-[#00FF7F] opacity-5 blur-[100px]"></div>
            
            <img 
              :src="imagemSelecionada" 
              :alt="produto.nome" 
              class="object-contain w-full h-full p-10 relative z-10 transition-opacity duration-300" 
            />
          </div>
        </div>

        <div class="flex flex-col">
          <span class="text-[#00FF7F] font-bold tracking-widest text-sm uppercase mb-2">Performance Profissional</span>
          <h1 class="text-4xl md:text-5xl font-black uppercase leading-none mb-4">
            {{ produto.nome }}
          </h1>
          
          <div class="flex items-center gap-4 mb-8">
            <span class="text-3xl font-bold text-white">R$ {{ produto.preco }}</span>
          </div>

          <p class="text-gray-400 leading-relaxed mb-10">
            Modelo exclusivo da linha Creed Esporte, focado em tração e durabilidade para atletas de alto rendimento.
          </p>

          <button class="w-full bg-[#00FF7F] text-black font-black py-5 rounded-xl uppercase tracking-widest text-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,127,0.4)]">
            Adicionar ao Carrinho
          </button>
        </div>

      </div>
    </main>
  </div>

  <div v-else class="min-h-screen bg-black text-white flex items-center justify-center p-10 text-center">
    <div class="border border-gray-800 p-10 rounded-2xl bg-[#0a0a0a]">
      <h2 class="text-3xl font-bold text-[#00FF7F] mb-4">Oops!</h2>
      <p class="text-gray-400 mb-6">Este produto não parece estar no nosso banco de dados.</p>
      <NuxtLink to="/" class="bg-[#00FF7F] text-black px-6 py-3 rounded-lg font-bold">Voltar para a Loja</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import listaDeProdutos from '@/data/produtos.json'

const route = useRoute()
const idDoProduto = route.params.id

const produto = computed(() => {
  return listaDeProdutos.find(p => String(p.id) === String(idDoProduto))
})

const imagemSelecionada = ref(null)

watchEffect(() => {
  if (produto.value && produto.value.galeria && produto.value.galeria.length > 0) {
    imagemSelecionada.value = produto.value.galeria[0]
  } else if (produto.value && produto.value.imagem) {
    imagemSelecionada.value = produto.value.imagem
  }
})
</script>