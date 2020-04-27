<template>
  <div class="wrapper">
    <slider />
    <div class="parallax noselect">
      <div class="d-flex justify-content-center align-items-center">
        <div
          class="col-12 text-center"
          style="padding-top: 5em;padding-bottom: 5em;"
        >
          <h1
            class="navbar-brand d-block"
            style="font-size: 30px !important; color: #fff !important;"
          >
            Melissia Games
          </h1>
          <h5 class="text-uppercase font-weight-bold text-light">remastered</h5>
          <img
            src="/img/symbol.png"
            class="symbol d-inline-block mt-3"
            style="width: 120px; height: 120px; filter: invert(1) !important;"
          />
        </div>
      </div>
    </div>
    <div class="bg-232323 py-10">
      <div class="container">
        <div class="row">
          <div class="col-12 div col-lg-5">
            <h1 class="text-light mb-4">News</h1>
            <div class="d-flex flex-wrap flex-column align-items-center">
              <a href="#" class="patch-notes text-light w-100 mb-1 p-4">
                <div class="image"></div>
                <div>
                  <h3>Patch notes</h3>
                  <h5>26/04/2020</h5>
                </div>
              </a>
              <a href="#" class="patch-notes text-light w-100 mb-1 p-4">
                <div class="image"></div>
                <div>
                  <h3>Patch notes</h3>
                  <h5>14/04/2020</h5>
                </div>
              </a>
              <a href="#" class="patch-notes text-light w-100 mb-1 p-4">
                <div class="image"></div>
                <div>
                  <h3>Patch notes</h3>
                  <h5>13/04/2020</h5>
                </div>
              </a>
              <a href="#" class="patch-notes text-light w-100 mb-1 p-4">
                <div class="image"></div>
                <div>
                  <h3>Patch notes</h3>
                  <h5>12/04/2020</h5>
                </div>
              </a>
            </div>
          </div>
          <div class="col-12 col-lg-7">
            <h1 class="text-light">Rankings</h1>
            <p class="mb-0 small text-light text-right">
              Last update 10 minutes ago.
            </p>
            <ul class="nav nav-tabs">
              <li
                class="nav-item"
                v-for="(rank, index) in rankings"
                :key="index"
                v-bind:class="index === ranking_active ? 'active' : ''"
              >
                <button
                  class="btn bg-white text-dark"
                  @click="changeRanking(index)"
                >
                  {{ rank.name }}
                </button>
              </li>
            </ul>
            <div class="w-100 bg-light text-dark px-3 px-lg-4 py-4">
              <div class="d-flex align-items-center">
                <h6 class="mr-3 mr-lg-5">Position</h6>
                <h6 class="text-center mr-3 mr-lg-5">Player</h6>
                <h6 class="text-center mr-2 mr-lg-5">Guild</h6>
                <h6 class="w-100 text-right">Rank</h6>
              </div>
              <hr />
              <div v-show="ranking_active === 0">
                <div
                  class="d-flex align-items-center pt-2"
                  v-bind:class="index === 0 ? 'font-weight-bold' : ''"
                  v-for="(player, index) in gathering_players"
                  :key="index"
                >
                  <h6 class="mr-3 mr-lg-5">#{{ index + 1 }}</h6>
                  <h6 class="text-center mr-3 mr-lg-5">
                    {{ player.name }}({{ player.family }})
                  </h6>
                  <h6 class="text-center mr-2 mr-lg-5">{{ player.guild }}</h6>
                  <h3 class="w-100 text-right" v-if="index === 0">
                    {{ player.level }}
                  </h3>
                  <h4 class="w-100 text-right" v-else-if="index === 1">
                    {{ player.level }}
                  </h4>
                  <h5 class="w-100 text-right" v-else-if="index === 2">
                    {{ player.level }}
                  </h5>
                  <h6 class="w-100 text-right" v-else>{{ player.level }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../../components/Slider";

export default {
  name: "Home",
  data() {
    return {
      rankings: [
        { name: "Gathering", icon: "" },
        { name: "Fishing", icon: "" },
        { name: "Hunting", icon: "" },
        { name: "Cooking", icon: "" },
        { name: "Alchemy", icon: "" },
        { name: "Processing", icon: "" },
        { name: "Training", icon: "" },
        { name: "Trade", icon: "" },
        { name: "Farming", icon: "" },
        { name: "Sailing", icon: "" },
      ],
      ranking_active: 0,
      gathering_players: [
        { name: "Somar", family: "Family", guild: "SOLO", level: "Guru 2" },
        { name: "Somar1", family: "Family", guild: "SOLO", level: "Guru 1" },
        { name: "Somar2", family: "Family", guild: "SOLO", level: "Master 15" },
        { name: "Somar3", family: "Family", guild: "SOLO", level: "Master 10" },
        { name: "Somar4", family: "Family", guild: "SOLO", level: "Master 8" },
      ],
    };
  },
  methods: {
    changeRanking(value) {
      this.ranking_active = value;
    },
  },
  components: {
    Slider,
  },
};
</script>
<style scoped>
.parallax {
  background-image: url("/img/back1.jpg");
  min-height: 300px;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.nav-tabs {
  border-bottom: 0;
  background: red;
  justify-content: center;
}
@media only screen and (max-width: 600px) {
  .nav-tabs {
    justify-content: start;
    flex-wrap: nowrap;
    overflow-x: scroll;
  }
}
.nav-item:not(.active) {
  padding: 5px 10px;
  margin: 0;
  background: white;
  color: #232323;
  opacity: 0.7;
}
.nav-item.active {
  padding: 5px 10px;
  margin: 0;
  background: white;
  color: #232323;
}
.nav-item .nav-link,
.nav-item .nav-link:hover {
  border: 0px;
  margin: 0;
}
.nav-item .nav-link.disabled {
  opacity: 0.5;
}
button.btn:focus {
  box-shadow: inherit;
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
  background-image: url("/img/patch.jpg");
  background-position: 20%;
  background-size: cover;
  z-index: 1;
}
.patch-notes div:not(.image) {
  z-index: 9;
  position: absolute;
}
</style>
