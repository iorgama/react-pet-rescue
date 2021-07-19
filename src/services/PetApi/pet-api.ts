import api from '../Api/index'

const createPet = async(data: object) => {
  try {
    const response = await api.post('/pet', {...data});
    if(response.status === 201){
      return true;
    }
    return false;
  } catch (e) {
    console.log('error while fetching pets: ', e);
    throw e;
  }
}

const getPet = async(id: string) => {
  try {
    const response = await api.get(`/pet/${id}`);
    return response.data;
  } catch (e) {
    console.log('error while fetching pets: ', e);
    throw e;
  }
}

const getAllPets = async () => {
  try {
    const response = await api.get('/pet?sortBy=id&order=asc');
    return response.data;
  } catch (e) {
    console.log('error while fetching pets: ', e);
    throw e;
  }
}

const searchPet = async (name: string) => {
  try {
    const response = await api.get('/pet', {
      params: {
       search: name 
      }
    })
    return response.data;
  } catch (e) {
    console.log('error while fetching pets: ', e);
    throw e;
  }
}

const deletePet = async(petId: string) => {
  console.log(petId)
  try {
    const response = await api.delete(`/pet/${petId}`);
    return response.data;
  } catch (e) {
    console.log('error while fetching pets: ', e);
    throw e;
  }
}

export {
  getAllPets,
  getPet,
  searchPet,
  createPet,
  deletePet
}