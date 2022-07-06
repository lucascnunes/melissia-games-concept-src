<template>
<div>
    <div class="wrapper loading noselect" v-if="loading">
        <img src="/img/symbol.png" class="symbol absolute blur" />
        <img src="/img/symbol.png" class="symbol absolute" />
    </div>
    <div class="d-flex flex-wrap flex-column align-items-center" v-if="!loading">
        <a href="#" class="patch-notes text-light w-100 mb-1 p-4">
        <div class="image" style="
        background-image: url('/img/patch.jpg')"></div>
        <div>
            <h3>Patch notes</h3>
            <h5>26/04/2020</h5>
        </div>
        </a>
        <a href="#" class="patch-notes text-light w-100 mb-1 p-4">
        <div class="image" style="
        background-image: url('/img/patch.jpg')"></div>
        <div>
            <h3>Patch notes</h3>
            <h5>14/04/2020</h5>
        </div>
        </a>
        <a href="#" class="patch-notes text-light w-100 mb-1 p-4">
        <div class="image" style="
        background-image: url('/img/patch.jpg')"></div>
        <div>
            <h3>Patch notes</h3>
            <h5>13/04/2020</h5>
        </div>
        </a>
        <a href="#" class="patch-notes text-light w-100 mb-1 p-4">
        <div class="image" style="
        background-image: url('/img/patch.jpg')"></div>
        <div>
            <h3>Patch notes</h3>
            <h5>12/04/2020</h5>
        </div>
        </a>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
        }
    },

    methods: {

    },

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
