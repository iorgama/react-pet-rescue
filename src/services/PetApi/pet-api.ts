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

const getAllPets = async () => {
  try {
    const response = await api.get('/pet?sortBy=id&order=desc');
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

export {
  getAllPets,
  searchPet,
  createPet
}