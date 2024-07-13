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

export async function deleteById(filterID) {
    await axios.delete('/api/filters/' + filterID);
}

export async function update(filter) {
    await axios.put('/api/filters', filter);
}

export async function add(filter) {
    const { data } = await axios.post('/api/filters', filter);
    return data;
}