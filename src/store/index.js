import { defineStore } from 'pinia'
import { mande } from 'mande'

const token = '58Z_sVB8a4nh5tCEvdMesOKnTlt4JSSs'

const api = mande('https://forum.melissia.games/index.php/api', {
    mode: 'same-origin',
    method: 'GET',
    headers: {
        'xf-api-key': token,
        'Content-type': 'application/json; charset=utf-8',
        // 'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET'
    }
})

const apiCors = mande('https://forum.melissia.games/index.php/api', {
    mode: 'cors',
    method: 'GET',
    headers: {
        'xf-api-key': token,
        'Content-type': 'application/json; charset=utf-8',
        // 'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET'
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
                    this.error = error.response.data
                    console.log(error.response.data)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
                console.error(error)
                this.patchNotes = apiCors.get('/forums/20/threads')
                    .then((response) => {
                        console.log(response)
                        console.log(this.patchNotes)
                    })
                    .catch((error) => {
                        if (error.response) {
                            this.error = error.response.data
                            console.log(error.response.data)
                            console.log(error.response.status)
                            console.log(error.response.headers)
                        }
                        console.error(error)
                        
                    })

            })
        },
    },
})
  