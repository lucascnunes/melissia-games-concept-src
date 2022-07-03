<template>
  <div class="wrapper">
    <slider />
    <div class="parallax noselect">
      <div class="d-flex justify-content-center align-items-center">
        <div class="col-12 text-center" style="padding-top: 5em;padding-bottom: 5em;">
          <h1
            class="navbar-brand d-block"
            style="font-size: 30px !important; color: #fff !important;"
          >Melissia Games</h1>
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
            <news-component />
          </div>
          <div class="col-12 col-lg-7">
            <h1 class="text-light">Rankings</h1>
            <ranking-component />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../../components/Slider";
import NewsComponent from "./components/News.vue";
import RankingComponent from "./components/Rankings.vue";

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
  components: {
    Slider,
    NewsComponent,
    RankingComponent
  }
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
</style>
