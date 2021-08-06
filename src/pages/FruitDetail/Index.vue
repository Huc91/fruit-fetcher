<template>
  <v-main class="detail-page" :style="{background: dynamicGradient}">
    <div class="detail-page__container">
      <v-btn
        elevation="2"
        @click="$router.push('/')"
      >
        <v-icon
          left
        >
          mdi-arrow-left
         </v-icon>
         Go back
      </v-btn>
      <h2 v-if="details.name" class="detail-page__title"> {{details.name }} </h2>
      <v-img
        v-if="details.image"
        contain
        max-height="500"
        :src="details.image"
        :lazy-src="details.image"
      >
      </v-img>
      <p v-if="details.description" class="detail-page__description">{{ details.description }}</p>

      <span>Value</span>
      <br/>
      <strong v-if="details.price">{{ details.price }} Gold</strong>

    </div>
  </v-main>
</template>

<script>
export default {
  name: "FruitDetail",
  data() {
      return {
        loading: false,
      };
  },
  computed: {
    details(){
      return this.$store.getters.fruitDetails;
    },
    dynamicGradient() {
      return `linear-gradient(125deg, ${this.details.color} 0%, rgba(255,255,255,1) 100%)`;
    }
  },
  created() {
    if(!this.details) {
      this.$router.push('/')
    }
  }
};
</script>

<style scoped lang="scss" src="./style.scss">
</style>
