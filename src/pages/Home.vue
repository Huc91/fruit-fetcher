<template>
  <div class="index-page">
    hello
  </div>
</template>

<script>
import * as traverse from 'traverse'

export default {
  name: "Index",
  data() {
      return {
        loading: false,
        fruitData: null,
      };
  },
  methods: {
    async getFruits(){
      this.loading = true;
      try {
        const baseUrl = 'http://localhost:3000';
        const rawData = await fetch(`${baseUrl}/fruit`);
        const { data } = await rawData.json();

        const fruitCount = data.fruitCount || 0
        let count = 0;

        const filteredData = [];
        traverse(data).forEach(
          function(node) {
            if (node.isFruit) {
              filteredData.push(node);
              count = count + 1;
              if(fruitCount  === count) {
                this.stop();
              }
            }
          }
        )
        this.fruitData = filteredData;
      }
      catch(err){
        console.log(err);
      }
      finally {
        this.loading = false;
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
