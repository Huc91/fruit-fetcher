<template>
  <div class="index-page">
    hello
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
      return {
        loading: false,
      };
  },
  methods: {
    async getFruits(){
      const baseUrl = 'http://localhost:3000';
      const rawData = await fetch(`${baseUrl}/fruit`);
      const data = await rawData.json();
      console.log(data);
    }
  },
  created() {
    this.getFruits();
  }
};
</script>

<style scoped lang="scss">
</style>
