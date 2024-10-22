<template>
  <main class="d-flex flex-column">
    <div class="info d-flex flex-column card text-center mx-auto">
      <div class="card-body mx-auto">
        <h1 style="font-weight: bold; color:#ffc107">LÄRA DIG OM LÄNDER</h1>
        <h2>Utforska Världens Mångfald</h2>
        <p class="card-text">
          Vår sida är dedikerad till att erbjuda en fascinerande inblick i länder runt om i Europe. </p>
        <p class="card-text">Utforska deras fakta,
          geografi och mycket mer. Läs om spännande fakta och intressanta detaljer om olika länder.</p>
        <p class="card-text"> Se vackra bilder och kartor som ger dig en visuell resa genom världen.</p>
        <router-link to="/countries" class=" d-flex">
          <BButton class="mx-auto" variant="warning">LISTA ÖVER LÄNDER</BButton>
        </router-link>
      </div>
    </div>
    <!-- <div class="mx-auto">
      <img src="https://source.unsplash.com/3lxrM5yvkcI" alt="Belgium">
      <img src="https://source.unsplash.com/3wFRlwS91yk" alt="Austria">
      <img src="https://source.unsplash.com/7dEyTJ7-8os" alt="Globe">
      <img src="https://source.unsplash.com/dBtWLliLt5k" alt="Italy">
      <img src="https://source.unsplash.com/aDxmYZtYj7g" alt="Prag">
    </div> -->
  </main>
</template>
<style scoped>
.info {
  width: max-content;
  text-align: center;
  font-size: larger;
  margin: 60px auto;
  background-color: rgb(244, 237, 215);
}
a {
  text-decoration: none;
}
button {
  padding:10px;
  margin: 10px auto;
}
</style>
