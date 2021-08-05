<template>
  <div class="detail-page">
    <h2 v-if="details.name"> {{details.name }} </h2>
    <v-img
      v-if="details.image"
      height="250"
      :src="details.image"
      :lazy-src="details.image"
    >
    </v-img>
    <p v-if="details.description">{{ details.description }}</p>
    <span v-if="details.price"> {{ details.price }} Gold</span>
  </div>
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
  },
  created() {
    if(!this.details) {
      this.$router.push('/')
    }
  }
};
</script>

<style scoped lang="scss">
</style>
