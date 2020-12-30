<template>
  <div class="services">
    <ServicesCard />
    <h1>This is the services page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import ServicesCard from "@/components/ServicesCard.vue";

export default {
  name: "Services",
  components: {
    ServicesCard
  }
};
</script>