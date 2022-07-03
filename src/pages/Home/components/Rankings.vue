<template>
    <div>
        <p class="mb-0 small text-light text-right">Last update 10 minutes ago.</p>
        <ul class="nav nav-tabs">
            <li
            class="nav-item"
            v-for="(rank, index) in rankings"
            :key="index"
            v-bind:class="index === ranking_active ? 'active' : ''"
            >
            <button class="btn bg-white text-dark" @click="changeRanking(index)">{{ rank.name }}</button>
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
                <h6 class="text-center mr-3 mr-lg-5">{{ player.name }}({{ player.family }})</h6>
                <h6 class="text-center mr-2 mr-lg-5">{{ player.guild }}</h6>
                <h3 class="w-100 text-right" v-if="index === 0">{{ player.level }}</h3>
                <h4 class="w-100 text-right" v-else-if="index === 1">{{ player.level }}</h4>
                <h5 class="w-100 text-right" v-else-if="index === 2">{{ player.level }}</h5>
                <h6 class="w-100 text-right" v-else>{{ player.level }}</h6>
            </div>
            </div>
        </div>
    </div>
</template>

<style>
.nav-tabs {
  border-bottom: 0;
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
</style>

<script>
export default {
  name: "Rankings",
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
        { name: "Sailing", icon: "" }
      ],
      ranking_active: 0,
      gathering_players: [
        { name: "Somar", family: "Family", guild: "SOLO", level: "Guru 2" },
        { name: "Somar1", family: "Family", guild: "SOLO", level: "Guru 1" },
        { name: "Somar2", family: "Family", guild: "SOLO", level: "Master 15" },
        { name: "Somar3", family: "Family", guild: "SOLO", level: "Master 10" },
        { name: "Somar4", family: "Family", guild: "SOLO", level: "Master 8" }
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