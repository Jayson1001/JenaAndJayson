<template>
  <div class="body">
    <div class="headerContainer">
      <div class="header">Jena + JSON</div>
      <div class="subheader">Web Development Consulting Firm</div>
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
    <div class="lowerContainer">
      <div class="help">NEED HELP WITH YOUR PROJECT?<br>LET US KNOW HOW WE CAN HELP.</div>
      <button class="helpButton">Help</button>
    </div>
    <div class="test"></div>
    <div class="tesst"></div>
  </div>
</template>

<script>
export default {
  name: "HomeCard"
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
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
  text-align: center;
  padding-top: 100px;
  font-family: "Roboto";
  text-transform: uppercase;
}
.header {
  font-size: 48px;
  color: white;
  font-size: 68px;
}
.subheader {
  color: white;
  font-size: 36px;
}
.mainContainer {
  display: flex;
  justify-content: space-around;
}
.servicesContainer {
  border: 3px solid gray;
  width: 100%;
  height: 160px;
}
.serviceTitle {
  text-align: center;
  padding-bottom: 10px;
}
.serviceDesc {
  text-align: center;
}
.lowerContainer {
  background-color: rgb(89, 89, 89);
  height: 100px;
  width: 100%;
  display: flex;
}
.help {
  font-family: "Roboto";
  font-size: 25px;
  color: white;
  padding-left: 30px;
  padding-top: 12px;
}
.helpButton {
  width: auto;
  height: 40px;
  font-size: 24px;
  font-family: "Roboto";
  margin-top: 25px;
  margin-left: 300px;
}

.test {
  height: 200px;
  width: 100%;
  background-color: none;
}
.tesst {
  height: 200px;
  width: 100%;
  background-color: lavender;
}
</style>
