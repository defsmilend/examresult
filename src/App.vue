<template>
  <div class="main">
    <div class="container">
      <div class="header">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Главная</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cpu" class="nav-link">Процессоры</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/motherboard" class="nav-link">Мат Плата</router-link>
            </li>
          </ul>
        </nav>
        <router-view />
        <hr />
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  /* margin: 0; */
  /* padding: 0; */
  background-color: #b2bec3;
}
</style>


<script>
import Footer from "./views/Footer";
export default {
  components: {
    Footer
  }
};
</script>