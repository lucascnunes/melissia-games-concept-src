<template>
<div>
    <div class="wrapper loading noselect rounded mb-5" v-if="loading">
        <img src="/img/symbol.png" class="symbol absolute blur" />
        <img src="/img/symbol.png" class="symbol absolute" />
    </div>
    <div class="d-flex flex-wrap flex-column align-items-center" v-if="!loading">
        <a v-for="patch in patchNotes.slice(0,4)" :key="patch.thread_id" :href="patch.view_url" class="patch-notes text-light w-100 mb-1 p-4">
            <div class="image" style="
            background-image: url('/img/patch.jpg')"></div>
            <div>
                <h3>{{ patch.title }}</h3>
            </div>
        </a>
    </div>
</div>
</template>

<script>
import { mapState } from "pinia";
import { useStore } from '@/store'

export default {
    setup() {
        const store = useStore()
        store.getPatchNotes()

        return { store }
    },
    data() {
        return {
            loading: true,
        }
    },
    mounted() {
        if (this.patchNotes != null && this.patchNotes.length > 0) this.loading = false;
    },

    methods: {

    },
    computed: {
        ...mapState(useStore, ["patchNotes", "error"]),
    }
}
</script>


<style scoped>
.symbol {
  width: 90px;
  height: 90px;
  animation: pulse 2s infinite;
  filter: var(--symbol-invert);
}
.blur {
  filter: blur(5px) var(--symbol-invert);
}
.wrapper {
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.absolute {
    position: absolute;
}

.patch-notes {
  position: relative;
  overflow: hidden;
  min-height: 150px;
}
.patch-notes .image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  filter: blur(2px) brightness(0.4);
  background-position: 20%;
  background-size: cover;
  z-index: 1;
}
.patch-notes div:not(.image) {
  z-index: 9;
  position: absolute;
}
</style>
