<template>
  <div class="d-flex justify-content-end m-4">
    <BButtonToolbar key-nav aria-label="Toolbar with button groups">
      <BButtonGroup class="mx-1 ">
        <BButton variant="warning " :disabled="page === 1" @click="first">&laquo;</BButton>
        <BButton variant="warning" :disabled="page === 1" @click="previous">&lsaquo;</BButton>
      </BButtonGroup>
      <BButtonGroup class="mx-1">
        <BButton variant="warning" :disabled="page === 1" @click="previous">Föregående</BButton>
        <span><strong>Sida {{ page }} av {{ lastPage }}</strong></span>
        <BButton variant="warning" :disabled="page === lastPage || countryAntal < 12" @click="next">Nästa</BButton>
      </BButtonGroup>
      <BButtonGroup class="mx-1">
        <BButton variant="warning" :disabled="page === lastPage || countryAntal < 12" @click="next">&rsaquo;</BButton>
        <BButton variant="warning" :disabled="page === lastPage || countryAntal < 12" @click="last">&raquo;</BButton>
      </BButtonGroup>
    </BButtonToolbar>
  </div>
</template>

<script >
export default {  //Kopplar allt till countries sida via PROPS
  props: {
    page: Number,
    lastPage: Number,
    countryAntal: Number,
    next: Function,
    previous: Function,
    first: Function,
    last: Function,
  },
};

</script>
<style scoped>
span {
  margin: 10px;
}
</style>
