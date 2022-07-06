<template>
  <div class="wrapper loading noselect" v-if="loading">
    <img src="/img/symbol.png" class="symbol absolute blur" />
    <img src="/img/symbol.png" class="symbol absolute" />
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useStore } from '../store'

export default {
  computed: {
    ...mapState(useStore, ["loading"])
  }
};
</script>

<style scoped>
.symbol {
  width: 90px;
  height: 90px;
  animation: pulse 2s infinite;
  filter: var(--symbol-invert);
}
.absolute {
  position: absolute;
}
.blur {
  filter: blur(5px) var(--symbol-invert);
}
.loading {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  transition: all 3s;
}
</style>
