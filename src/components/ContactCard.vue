<template>
  <div class="body">
    <div class="contactUsTextContainer">
      <div class="contactUsText">Contact Us</div>
    </div>
    <div class="lowerContactContainer">
      <div class="lowerLeft">
        <div class="contactInfo">
          <img class="contactImg" src="../assets/email1.jpg" />
          Email
        </div>
        <div class="contactInfo">
          <img class="contactImg" src="../assets/phone1.png" />
          Phone
        </div>
        <div class="contactInfo">
          <img class="contactImg" src="../assets/insta1.jpg" />
          Insta
        </div>
        <div class="contactInfo">
          <img class="contactImg" src="../assets/fb1.png" />
          FB
        </div>
        <div class="contactInfo">
          <img class="contactImg" src="../assets/googlemaps1.jpg" />
          Address
        </div>
      </div>
      <div class="lowerRight">
        <div class="form">
          <div class="eachContainer">
            <div class="name">First Name</div>
            <input type="text" v-model="firstName" />
          </div>
          <div class="eachContainer">
            <div class="name">Last Name</div>
            <input type="text" v-model="lastName" />
          </div>
        </div>
        <div class="eachContainer">
          <div class="name">Submit</div>
          <input type="submit" value="Submit" v-on:click="submit" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactCard"
};
</script>

<style scoped>
.body {
  background-image: url("../assets/map-small.jpg");
  height: 450px;
}
.contactUsTextContainer {
  display: flex;
  justify-content: center;
  vertical-align: middle;
  line-height: 450px;
}
.contactUsText {
  color: white;
  font-size: 48px;
  font-weight: 700;
  text-transform: uppercase;
}
.lowerContactContainer {
  display: flex;
  height: 300px;
}
.lowerLeft {
  /* background-color: blue; */
  height: 300px;
  width: 30%;
  padding-left: 60px;
  padding-top: 50px;
}
.contactInfo {
  font-size: 30px;
  padding-bottom: 20px;
}
.contactImg {
  height: 25px;
  width: 25px;
}
.lowerRight {
  background-color: green;
  height: 300px;
  width: 70%;
}
.form {
  display: flex;
  padding: 30px;
}
.name {
  font-size: 36px;
  /* padding: 3px; */
}
.eachContainer {
  padding: 30px;
}
</style>
