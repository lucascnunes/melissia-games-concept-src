<template>
    <div>
        <p class="mb-0 small text-light text-right">Last update 10 minutes ago.</p>
        <ul class="nav nav-tabs mt-3 pb-3">
            <li
            class="nav-item"
            v-for="(rank, index) in rankings"
            :key="index"
            v-bind:class="index === ranking_active ? 'active' : ''"
            >
              <button class="btn bg-white text-dark" @click="changeRanking(index)">{{ rank.name }}</button>
            </li>
        </ul>
        <div class="w-100 mt-3 bg-light text-dark px-3 px-lg-4 py-4">
            <div class="d-flex flex-row justify-content-between align-items-center">
              <div class="">Position</div>
              <div class="text-center">Player(Family)</div>
              <div class="text-center">Guild</div>
              <div class="text-right">Rank</div>
            </div>
            <hr />
            <div v-show="ranking_active === 0">
              <div
                  class="d-flex justify-content-between align-items-center pt-2"
                  v-bind:class="index === 0 ? 'font-weight-bold' : ''"
                  v-for="(player, index) in gathering_players"
                  :key="index"
              >
                  <div class="me-3 me-lg-5">#{{ index + 1 }}</div>
                  <div class="text-center me-3 me-lg-5">{{ player.name }}({{ player.family }})</div>
                  <div class="text-center me-2 me-lg-5">{{ player.guild }}</div>
                  <h3 class="text-right" v-if="index === 0">{{ player.level }}</h3>
                  <h4 class="text-right" v-else-if="index === 1">{{ player.level }}</h4>
                  <h5 class="text-right" v-else-if="index === 2">{{ player.level }}</h5>
                  <h6 class="text-right" v-else>{{ player.level }}</h6>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      rankings: [
        { name: "Level", icon: "" },
        { name: "Silver", icon: "" },
        { name: "Gathering", icon: "" },
        { name: "Fishing", icon: "" },
        { name: "Hunting", icon: "" },
        { name: "Cooking", icon: "" },
        { name: "Alchemy", icon: "" },
        { name: "Processing", icon: "" },
        { name: "Training", icon: "" },
        { name: "Trade", icon: "" },
        { name: "Farming", icon: "" },
        { name: "Sailing", icon: "" }
      ],
      ranking_active: 0,
      gathering_players: [
        { name: "SOON", family: "SOON", guild: "SOON", level: "SOON" },
      ],
      fishing_players: [
        { name: "SOON", family: "SOON", guild: "SOON", level: "SOON" },
      ],
      hunting_players: [
        { name: "SOON", family: "SOON", guild: "SOON", level: "SOON" },
      ],
      cooking_players: [
        { name: "SOON", family: "SOON", guild: "SOON", level: "SOON" },
      ],
      alchemy_players: [
        { name: "SOON", family: "SOON", guild: "SOON", level: "SOON" },
      ],
      processing_players: [
        { name: "SOON", family: "SOON", guild: "SOON", level: "SOON" },
      ],
      training_players: [
        { name: "SOON", family: "SOON", guild: "SOON", level: "SOON" },
      ],
      trading_players: [
        { name: "SOON", family: "SOON", guild: "SOON", level: "SOON" },
      ],
      farming_players: [
        { name: "SOON", family: "SOON", guild: "SOON", level: "SOON" },
      ],
      sailing_players: [
        { name: "SOON", family: "SOON", guild: "SOON", level: "SOON" },
      ],
      level_players: [
        { name: "SOON", family: "SOON", guild: "SOON", level: "SOON" },
      ],
      silver_players: [
        { name: "SOON", family: "SOON", guild: "SOON", level: "SOON" },
      ]
    };
  },
  methods: {
    changeRanking(value) {
      this.ranking_active = value;
    }
  },
}
</script>

<style>
.nav-tabs {
  border-bottom: 0;
  justify-content: center;
}
@media only screen and (max-width: 600px) {
  .nav-tabs {
    display: flex;
    gap: 0;
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow-x: scroll;
    white-space: nowrap;
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
</style>