import { sample_filters } from "../data";


export const getAll = async () => sample_filters;

export const search = async searchTerm => 
    sample_filters.filter(item => 
        item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );