<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/services">Services</router-link>
    <router-link to="/portfolio">Portfolio</router-link>
    <router-link class="contact" to="/contact">Contact Us</router-link>
  </div>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
#app {
  font-family: "Roboto";
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* text-align: center; */
  /* background-image: url("./assets/matrix.jpg"); */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 15px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.contact {
  border: 3px solid red;
  /* padding: 15px; */
  /* padding-left: 30px; */
}
</style>
