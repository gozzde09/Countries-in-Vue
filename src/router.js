import { createRouter, createWebHashHistory } from "vue-router";

import CountryDetails from "./pages/CountryDetails.vue";
import Countries from "./pages/Countries.vue";
import Hem from "./pages/Hem.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: Hem,
      path: "/",
    },
    {
      component: Countries,
      name: "countries",
      path: "/countries",
    },
    {
      path: "/countries/:id",
      name: "country-details",
      component: CountryDetails,
    },
  ],
});
