<template>
  <div class="sidebar">
    <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isNavOpen"></div>
    <transition name="slide">
      <div v-if="isNavOpen" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data: () => ({}),
  methods: {
    ...mapMutations({
      openNav: "toggleNav"
    }),
    closeSidebarPanel() {
      this.openNav();
    }
  },
  computed: {
    ...mapState(["isNavOpen"])
  }
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: var(--sidebar-bg-color);
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 10px;
  width: 300px;
  color: var(--sidebar-font-color);
}
.sidebar-panel ul {
  padding: 2em 10px;
  list-style: none;
}
.sidebar-panel ul li,
.sidebar-panel a {
  color: var(--sidebar-font-color);
}
.sidebar-panel li {
  padding-bottom: 10px;
}
.sidebar-panel ul li a:hover,
.sidebar-panel ul li a:active {
  color: var(--sidebar-font-color);
  text-decoration: none;
  border-bottom: 2px solid #fff;
}
</style>