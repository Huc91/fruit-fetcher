<template>
  <div class="index-page">
    hello
    <span>{{ fruitCount }}</span>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
      return {
        loading: false,
        fruitData: null,
        fruitCount: null,
      };
  },
  methods: {
    async getFruits(){
      this.loading = true;
      try {
        const baseUrl = 'http://localhost:3000';
        const rawData = await fetch(`${baseUrl}/fruit`);
        const { data } = await rawData.json();
        console.log(data);
        this.fruitData = data;
      }
      catch(err){
        console.log(err);
      }
      finally {
        this.loading = false;
        this.fruitCount = this.fruitData?.fruitCount || 0;
      }
    }
  },
  created() {
    this.getFruits();
  }
};
</script>

<style scoped lang="scss">
</style>
