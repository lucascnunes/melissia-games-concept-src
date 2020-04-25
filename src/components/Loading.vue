<template>
  <div class="wrapper loading noselect" v-if="loading">
    <img src="/img/symbol.png" class="symbol absolute blur" />
    <img src="/img/symbol.png" class="symbol absolute" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Loading",
  computed: {
    ...mapState(["loading"])
  }
};
</script>

<style scoped>
.symbol {
  width: 90px;
  height: 90px;
  animation: pulse 2s infinite;
  filter: invert(1);
}
.absolute {
  position: absolute;
}
.blur {
  filter: blur(5px) invert(1);
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
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
  }

  70% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(0.95);
  }
}
</style>
