import { useAxios } from "../useAxios";

export const getProdutos = async () => {
    const $axios = useAxios();
    //@ts-ignore
    const response = await $axios.get('/produtos');
    return response.data;
}

export const getProdutosById = async (id: Number) => {
    const $axios = useAxios();
    //@ts-ignore
    const response = await $axios.get(`/produtos/${id}`);
    return response.data;
}

export const salvarProduto = async (produto: any) => {
    const $axios = useAxios();

    if (produto.id) {
        //@ts-ignore
        const response = await $axios.put('/produtos/' + produto.id, produto);
        return response.data;
    } else {
        //@ts-ignore
        const response = await $axios.post('/produtos', produto);
        return response.data;
    }
    
}