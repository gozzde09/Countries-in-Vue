<template>
  <div class="d-flex justify-content-end m-4 mb-2 " >
    <BNavForm class="d-flex" style="width:400px; height:50px">
      <BFormInput v-model="searchWord" class="me-2" placeholder="Sök ett land" />
      <BButton type="submit" variant="outline-success"  style="width:100px; height:50px">Sök</BButton>
      <!-- Bara denna också funkar: <BButton @click="search" type="submit" variant="outline-success">Sök</BButton> -->
    </BNavForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWord: "",
      searchResults: [],
    };
  },
  watch: {
    searchWord: function (newValue) {
      this.search();  //Söker direkt värdet. smidigare än sök button
      // console.log(`Sökordet ${newValue} letas efter`);
    }
  },
  emits: ["handle-input"],  //SearchWord kopplas till search funktionen och handle-input i countries.vue
  methods: {
    search() {
      this.$emit("handle-input", this.searchWord);
    },
  },
};
</script>
<style> </style>
