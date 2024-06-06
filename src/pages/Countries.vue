<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import axios from 'axios'

import PageKontrol from "../components/PageKontrol.vue";
import Search from "../components/Search.vue";

const countries = ref([])
const page = ref(1);
const lastPage = ref(0)
const searchInput = ref("");

onMounted(async () => {
  try {
    const result = await axios.get('https://restcountries.com/v3.1/region/europe')
    countries.value = result.data
    // console.log((countries.value.length));
  } catch (error) {
    console.log(error)
  }
  countries.value = countries.value.filter(country => country.translations.swe.common !== "Andorra");
  // Tar bort ett land som inte har sin flaggas img.
  countries.value.sort((a, b) => a.translations.swe.common.localeCompare(b.translations.swe.common, 'sv')
  ); //Alfabetisk ordning

})
const handleSearch = (query) => { //tar emot en query från komponenten Search.vue
  console.log("Sök resultat:", query);
  searchInput.value = query;
  page.value = 1;
}

const filteredCountries = computed(() => {  //query filtreras här
  const filtered = countries.value.filter(country =>
    country.translations.swe.common.toLowerCase().includes(searchInput.value.toLowerCase()))
  const itemsPerPage = 12;
  lastPage.value = Math.ceil(filtered.length / itemsPerPage) //räkna sida enligt antal länder
  console.log(lastPage.value);
  const start = (page.value - 1) * 12;
  const end = start + 12;
  return filtered.slice(start, end); //visa filtered länder
});

// SIDA KONTROLL
function next() {
  if (page.value < lastPage.value) {
    page.value++;
  }
}
function previous() {
  if (page.value > 1) {
    page.value--;
  }
}
function first() { //Hoppa till första sidan
  page.value = 1;
}
function last() { //Hoppa till sista sidan
  page.value = lastPage.value;
}

watch(page, function (newValue, oldValue) {
  console.log(`Sida har byts ut från ${oldValue} till ${newValue}`);
})

</script>

<template>
  <section class=" d-flex flex-column mx-auto v-cloak">
    <!-- SÖKRUTA tar ordet från search.vue -->
    <Search @handle-input="handleSearch" />

    <!-- SIDA KONTROLL 1-->
    <PageKontrol v-if="filteredCountries.length > 0" :countryAntal="filteredCountries.length" :page="page"
      :lastPage="lastPage" :next="next" :previous="previous" :first="first" :last="last" />
    <RouterView />

    <!-- CARDS -->
    <div id="card-container" class="d-flex flex-wrap  justify-content-evenly  flex-grow-1">
      <div v-if="filteredCountries.length !== 0" v-for="country in filteredCountries" :key="country.id">
        <BCard :title="country.translations.swe.common" :img-src="country.flags.png" img-alt="Image" img-loading="lazy"
          style="max-width: 21rem;  background-color: rgb(244, 237, 215);">
          <BCardText>
            Landets huvudstad är {{ country.capital[0] }}
            , och det officiella språket är {{
              Object.values(country.languages)[0]
            }}.
          </BCardText>
          <router-link :to="{ name: 'country-details', params: { id: country.name.common } }">
            <BButton variant="warning">Läs mer</BButton>
          </router-link>
        </BCard>
      </div>
      <div v-else>
        <p class="error">Inget land hittades! Försök igen.</p>
      </div>
    </div>

    <!-- SIDA KONTROLL 2-->
    <PageKontrol v-if="filteredCountries.length > 0" :countryAntal="filteredCountries.length" :page="page"
      :lastPage="lastPage" :next="next" :previous="previous" :first="first" :last="last" />
  </section>
</template>

<style >
.error {
  margin: 30px auto;
  color: #e6ae05;
  font-size: xx-large;
  font-weight: bolder
}

h1 {
  font-family: Brush Script MT;
  font-size: 60px;
}

[v-cloak] {
  display: none;
}
</style>
