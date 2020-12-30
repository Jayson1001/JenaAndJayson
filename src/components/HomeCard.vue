<template>
  <div class="body">
    <div class="headerContainer">
      <div class="header">Jena And JSON</div>
      <div class="subheader">Makin your site look good since 2021</div>
    </div>
    <div class="mainContainer">
      <div class="servicesContainer">
        <div class="serviceTitle">Site Upgrading/Updating</div>
        <div class="serviceDesc">Work with an existing site to upgrade out-dating technology</div>
      </div>
      <div class="servicesContainer">
        <div class="serviceTitle">Site Construction</div>
        <div class="serviceDesc">We will work with you on site development and implementation, taking in the specific needs of your business.</div>
      </div>
      <div class="servicesContainer">
        <div class="serviceTitle">Site Maintenance</div>
        <div class="serviceDesc">Periodic updates like displaying new products / pictures can keep you site looking fresh and attractive to browsers.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  // props: {
  //   msg: String
  // }
};
</script>

<style scoped>
.body {
  width: 100%;
  height: 750px;
  /* background-color: darkseagreen; */
  /* background-image: url("../assets/matrix.jpg"); */
}
.headerContainer {
  width: 100%;
  height: 200px;
  background-image: url("../assets/code2.1.jpg");
  padding-bottom: 400px;
}
.header {
  font-size: 48px;
  color: white;
}
.subheader {
  color: white;
}
.mainContainer {
  display: flex;
  justify-content: space-around;
}
.servicesContainer {
  border: 3px solid gray;
  width: 380px;
  height: 160px;
  /* display: flex;
  justify-content: center; */
}
.serviceTitle {
  text-align: center;
  padding-bottom: 10px;
}
.serviceDesc {
  text-align: center;
}
</style>
