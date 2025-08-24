<script setup>
import Countries from "./Countries.vue";
import { ref, watch } from "vue";
import axios from "axios";

import { useRoute } from "vue-router";

const route = useRoute();
const id = ref(route.params.id);
const country = ref("");
const getCountry = async (id) => {
  try {
    const result = await axios.get(`https://restcountries.com/v3.1/name/${id}`);
    country.value = result.data[0];
  } catch (error) {
    console.log(error);
  }
};

getCountry(id.value);
watch(
  () => route.params.id,
  () => {
    console.log(route.params.id);
    getCountry(route.params.id);
  }
);
</script>
<template>
  <section class="d-flex mx-auto">
    <Countries class="d-flex align-items-center mx-auto" />
    <div id="infoCard" v-if="country" class="d-flex flex-column">
      <BCard
        class="d-flex mx-auto"
        style="background-color: rgb(244, 237, 215)">
        <div class="d-flex justify-content-between">
          <h1>{{ country.translations.swe.common }}</h1>
          <router-link to="/countries" class="d-flex align-items-start">
            <BButton class="mx-auto" variant="warning">X</BButton>
          </router-link>
        </div>
        <img :src="country.flags.png" alt="Country Flag" />
        <img class="circle" :src="country.coatOfArms.png" alt="Coat of Arms" />
        <BCardText>
          <h2>Detaljer</h2>
          <ul>
            <li>Official Namn: {{ country.name.official }}</li>
            <li>Huvudstad : {{ country.capital[0] }}</li>
            <ul v-for="(language, code) in country.languages" :key="code">
              <li>Språk: {{ language }}</li>
            </ul>
            <li v-for="(currency, code) in country.currencies" :key="code">
              Currency: {{ code }} - {{ currency.name }} ({{ currency.symbol }})
            </li>
            <li>Befolkning: {{ country.population }}</li>
            <li>Yta: {{ country.area }} km²</li>
            <li>Region: {{ country.region }}</li>
            <li>Subregion: {{ country.subregion }}</li>
            <li v-if="country.car.side === 'right'">Traffik: Höger</li>
            <li v-else>Traffik: Vänster</li>
          </ul>
          <h2>Kartor</h2>
          <ul>
            <li>
              Google Maps:
              <a :href="country.maps.googleMaps" target="_blank">Link</a>
            </li>
            <li>
              OpenStreetMaps:
              <a :href="country.maps.openStreetMaps" target="_blank">Link</a>
            </li>
          </ul>
        </BCardText>
        <div class="d-flex justify-content-evenly">
          <router-link to="/" class="d-flex">
            <BButton class="mx-auto" variant="warning">Gå till hemsida</BButton>
          </router-link>
        </div>
      </BCard>
    </div>
  </section>
</template>
<style scoped>
a {
  color: #ffc107;
  font-weight: bolder;
}

h1 {
  color: #e6ae05;
  font-weight: bolder;
  text-align: center;
  font-family: Brush Script MT;
  font-size: 60px;
}

h2 {
  font-weight: bolder;
}

#infoCard {
  margin: 32px;
  margin-top: 177px;
  max-width: 333px;
}

.circle {
  border-radius: 50%;
}
</style>
