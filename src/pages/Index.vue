<template>
  <div class="index-page">
    <h1 class="index-page__hero">MY TUTTI FRUTTI PARTY</h1>
    <template v-if="!loading">
      <fruit-card
        v-for="fruit in fruitData"
        :key="fruit.id"
        :fruit="fruit"
        @call-to-action-click="goToDetail(fruit)"
      />
    </template>
    <span v-else>Loading...</span>
  </div>
</template>

<script>
import * as traverse from 'traverse'

export default {
  name: 'Index',
  data() {
      return {
        loading: false,
      };
  },
  components: {
    'fruit-card': () => import(
      '@/components/FruitCard/Index'
    )
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
        /*
        * I saw that real fruits could also be nested deep far
        * in the list data structure. So i need to traverse the list.
        * I could have used an algorith written by me but why reinvent the wheel?
        */
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
        this.$store.commit('setFruits', filteredData);
      }
      catch(err){
        console.log(err);
      }
      finally {
        this.loading = false;
      }
    },
    goToDetail(fruit){
      this.$store.commit('setDetail', fruit);
      this.$router.push(`/fruit-detail/${fruit.id}`)
    },
  },
  computed: {
    fruitData(){
      return this.$store.getters.fruits;
    }
  },
  created() {
    if(!this.fruitData) {
      this.getFruits();
    }
  }
};
</script>

<style scoped lang="scss" src="./style.scss">
</style>
