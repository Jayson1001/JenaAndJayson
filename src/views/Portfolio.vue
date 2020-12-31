<template>
  <div class="portfolio">
    <PortfolioCard />
    <h1>Portfolio Page</h1>
  </div>
</template>

<script>
import PortfolioCard from "@/components/PortfolioCard.vue";
export default {
  name: "portfolio",
  components: {
    PortfolioCard
  }
};
</script>
