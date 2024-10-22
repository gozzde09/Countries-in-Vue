<template>
  <header>
    <BNavbar toggleable="lg" variant="dark" v-b-color-mode="'dark'">
      <RouterLink to="/">
        <BNavbarBrand> <img id="logo" src="/travel.svg" alt="logo" style="width: 100px; height: auto"></BNavbarBrand>
      </RouterLink>
      <RouterLink to="/" class="nav-link px-2 text-warning link-underline-opacity-25 link-underline-opacity-100-hover">
        <h1> Lära Länder </h1>
      </RouterLink>

      <BNavbarToggle target="nav-collapse" />
      <BCollapse id="nav-collapse" is-nav>
        <BNavbarNav class="mx-5">
          <BNavItem>
            <RouterLink id="hem" class="nav-link px-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/">
            HEM</RouterLink>
          </BNavItem>
          <BNavItem>
            <RouterLink id="countries" class="nav-link px-2  link-underline-opacity-25 link-underline-opacity-100-hover"
              to="/countries">LÄNDER</RouterLink>
          </BNavItem>

        </BNavbarNav>
      </BCollapse>
    </BNavbar>
  </header>

  <main class="d-flex flex-grow-1 ">
    <RouterView />
  </main>

  <footer>
    <BNavbar variant="dark" v-b-color-mode="'dark'">
      <BCollapse id="nav-collapse" is-nav>
        <BNavbarNav class="d-flex mx-auto">
          <BNavItem href="#">© 2024 Copyright: Lära Länder</BNavItem>
        </BNavbarNav>
      </BCollapse>
    </BNavbar>
  </footer>
</template>
<style>
main{
    background-color: rgb(60, 191, 115);
}
.card {
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
  margin: 1rem;
}

img {
  width: 300px;
  height: 160px;
  padding: 10px;
}

[v-cloak] {
  display: none;
}


</style>
