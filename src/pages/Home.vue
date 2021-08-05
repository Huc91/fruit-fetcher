<template>
  <div class="index-page">
    <h1>My Tuttifrutti party</h1>
    <template v-if="!loading">
    <v-card
      elevation="2"
      v-for="fruit in fruitData"
      :key="fruit.id"
      class="mx-auto my-12"
      max-width="374"
    >
    <v-img
      height="250"
      :src="fruit.image"
    >
    </v-img>

    <v-card-title>{{ fruit.name }}</v-card-title>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="goToDetail()"
      >
        See more about it!
      </v-btn>
    </v-card-actions>

    </v-card>
    </template>
    <span v-else>Loading...</span>
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
    },
    goToDetail(){
      console.log('pippo');
    },
  },
  created() {
    this.getFruits();
  }
};
</script>

<style scoped lang="scss">
</style>
