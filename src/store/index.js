import { defineStore } from 'pinia'
import { mande } from 'mande'

const token = '58Z_sVB8a4nh5tCEvdMesOKnTlt4JSSs'
const api = mande('https://forum.melissia.games/index.php/api', {
    headers: {
        'XF-API-KEY': token
    }
})

export const useStore = defineStore('main', {
    state: () => ({
            loading: true,
            isNavOpen: false,
            theme: "light",
            baseUrl: '',
            
            patchNotes: null,
            rankings: null,
            error: null
    }),
    getters: {
        toggleLoading: (state) => state.loading = !state.loading,
        toggleNavigation: (state) => state.isNavOpen = !state.isNavOpen,
        toggleTheme: (state, theme) => state.theme = theme,
    },
    actions: {

        async getPatchNotes() {
            try {
                this.patchNotes = await api.get('/forums/20/threads').slice(0, 4)

            } catch (error) {
                this.error = error
                return error
                
            }
        }
    },
})
  