
import axios from 'axios'

const url_base = "http://localhost:8080/pet/";
const url_recuperarpets = "http://localhost:8080/pet/all"; 
const url_recuperarpet = "http://localhost:8080/pet/locate/";
const url_removerpet = "http://localhost:8080/pet/kill/";
const url_novopet = "http://localhost:8080/pet/addpet";
const url_atualizapet ="http://localhost:8080/pet/update/";

class PetServico {

    async getPets() {
        return axios.get(url_recuperarpets);
    }

    async getPetById(id) {
        return axios.get(url_recuperarpet+id);
    }
  
    async createPet(pet){
        return axios.post(url_novopet,pet);        
    }

    async updatePet(pet){
        return axios.put(url_atualizapet+pet.id,pet);  
    }

    async delPets(id) {
        return axios.delete(url_removerpet+id);
    }



}

export default new PetServico();