<template>
  <div class="wrapper">
    <div class="parallax noselect d-flex justify-content-center align-items-center" style="
    background-image: url('img/back1.jpg')
    ">
      <div class="col-12 col-lg-8 text-center">
          <div class="d-flex justify-content-center align-items-center">
            <div class="text-center" style="padding-top: 2em;padding-bottom: 2em;">
              <h1
                class="navbar-brand d-block"
                style="font-size: 30px !important; color: #fff !important;"
              >Melissia Games</h1>
              <h5 class="text-uppercase font-weight-bold text-light">remastered</h5>
              <img
                src="img/symbol.png"
                class="symbol d-inline-block mt-3"
                style="width: 120px; height: 120px; filter: invert(1) !important;"
              />
            </div>
          </div>
          <h1 class="pt-5">{{ $t("Welcome to Melissia Games") }},</h1>
          <h3 class="mb-4">{{ $t("New client online") }}!</h3>
          
          <div class="d-lg-flex flex-column justify-content-around align-items-center pt-5">
            <a href="https://melissia.games/office/login" class="btn btn-light px-5 py-2 mb-2 me-3">
              <font-awesome-icon :icon="['fa', 'user']" class="me-2" />
              {{ $t("Enter your account") }}
            </a>
            <a href="https://melissia.games/office/register" class="btn btn-light px-5 py-2 mb-2">
              <font-awesome-icon :icon="['fa', 'user-plus']" class="me-2" />
              {{ $t("Create your account") }}
            </a>
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
            <rankings-component />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsComponent from "./components/NewsComponent";
import RankingsComponent from "./components/RankingsComponent";

export default {
  name: "HomePage",
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
    NewsComponent,
    RankingsComponent
  }
};
</script>
<style scoped>
.parallax {
  min-height: 300px;
  height: 100vh;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
