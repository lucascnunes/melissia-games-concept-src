import { defineStore } from 'pinia'
import axios from 'axios'

const token = '58Z_sVB8a4nh5tCEvdMesOKnTlt4JSSs'

const api = axios.create({
    baseURL: 'https://forum.melissia.games/index.php/api',
    crossdomain: true,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials':true,
        'Content-type': 'application/json; charset=utf-8',
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
  