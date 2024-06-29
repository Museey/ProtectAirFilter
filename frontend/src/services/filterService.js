import axios from "axios";

export const getAll = async () => {
    const { data } = await axios.get('/api/filters');
    return data;
};

export const search = async searchTerm => {
    const { data } = await axios.get('/api/filters/search/' + searchTerm);
    return data;
}
    
export const getById = async filterID => {
    const { data } = await axios.get('/api/filters/' + filterID);
    return data;
}