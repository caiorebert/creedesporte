<template>
    <div class="bg-black p-2">
        <h1 class="text-primary text-4xl mb-4">Admin Creed Esporte</h1>
        <div class="controle-produtos h-screen">
            <UCollapsible class="flex flex-col gap-2">
                <UButton
                size="xl"
                label="Produtos"
                color="primary"
                variant="subtle"
                trailing-icon="i-lucide-chevron-down"
                block
                />

                <template #content>
                    <div class="produtos p-2 ">
                        <div v-for="(produto, i) in produtos">
                            <div class="grid grid-cols-3 gap-1">
                                <label class="col-span-2 text-white">{{ produto.nome }}</label>
                                <div class="grid grid-cols-2 gap-1">
                                    <div class="text-center">
                                        <UModal
                                            title="Editar Produto"
                                            size="lg"
                                            >
                                            <UButton size="lg" icon="i-lucide-pencil" @click="editar(produto.id)" color="primary" variant="solid"/>

                                            <template #body>
                                                <div class="grid grid-rows gap-4">
                                                    <UInput size="xl" placeholder="Nome do produto" v-model="produtoModal.nome"/>
                                                    <UInput size="xl" placeholder="Preço" v-model="produtoModal.preco"/>
                                                    <UTextarea size="xl" placeholder="Descrição" v-model="produtoModal.descricao"/>
                                                    <img :src="produtoModal.url" alt="Produto" class="w-full h-48 object-cover"/>
                                                    <hr>
                                                    <div class="text-right">
                                                        <UButton v-if="!loading" @click="salvar" trailing-icon="i-lucide-pencil">Editar</UButton>
                                                        <UProgress v-else/>
                                                    </div>
                                                </div>
                                            </template>
                                        </UModal>
                                    </div>
                                    <div class="text-center">
                                        <UButton size="lg" icon="i-lucide-trash" color="error" variant="solid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </UCollapsible>
        </div>
    </div>
</template>
<script setup lang="ts">
import { getProdutos, getProdutosById, salvarProduto } from '~/composables/api/produtos';
const props = defineProps<{
  title: string,
  severity: string,
}>()

const toast = useToast()

useHead({
    title: 'Admin Creed Esporte',
});

const produtos = ref(<any>[]);

const produtoModal = ref({
    id: '',
    nome: '',
    preco: '',
    url: '',
    descricao: ''
});

const loading = ref(false);

const listaProdutos = async () => {
    getProdutos()
    .then((data) => {
        produtos.value = data;
    })
    .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
    });
};


const editar = async (id:Number) =>{
    await getProdutosById(id)
        .then((data) => {
            produtoModal.value = data;
        })
        .catch((error) => {
            console.error('Erro ao buscar produto:', error);
        });
}

const salvar = async () => {
    const produto = {
        id: produtoModal.value.id,
        nome: produtoModal.value.nome,
        preco: produtoModal.value.preco,
        descricao: produtoModal.value.descricao
    }

    loading.value = true;

    salvarProduto(produto)
        .then((data) => {
            if (data) {
                toast.add({
                    title: 'Produto editado com sucesso',
                    color: 'neutral'
                });
                listaProdutos();
            } else {
                console.error('Erro ao salvar produto:', data);
            }
        })
        .catch((error) => {
            console.error('Erro ao salvar produto:', error);
        }).finally(() => {
            setTimeout(() => {
                loading.value = false;
            }, 3000);
        });
    
}

onMounted(() => {
    listaProdutos();
});

</script>