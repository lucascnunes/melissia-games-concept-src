import { defineStore } from 'pinia'
// import { mande } from 'mande'
import axios from 'axios';

const token = '58Z_sVB8a4nh5tCEvdMesOKnTlt4JSSs'
// const api = mande('https://forum.melissia.games/index.php/api', {
//     headers: {
//         'XF-API-KEY': token,
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//     }
// })
axios.defaults.withCredentials = true
const api = axios.create({
    baseURL: 'https://forum.melissia.games/index.php/api',
    withCredentials: true,
    timeout: 1000,
    origin: "http://localhost:8081",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        "Accept": 'application/json',
        'XF-API-KEY': token,
        
    }
})

export const useStore = defineStore('main', {
    state: () => ({
            loading: true,
            isNavOpen: false,
            theme: "light",
            
            patchNotes: null,
            rankings: null,
            error: null
    }),
    getters: {
    },
    actions: {
        async getPatchNotes() {
            this.patchNotes = await api.get('/forums/20/threads')
            .then((response) => {
                console.log(response)
                console.log(this.patchNotes)
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                console.error(error);
            })
        },
    },
})
  