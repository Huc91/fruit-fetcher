<template>
    <v-card
      elevation="2"
      class="mx-auto my-12"
      max-width="374"
    >
      <v-img
        height="250"
        :src="fruit.image"
        :lazy-src="fruit.image"
      >
      </v-img>

      <v-card-title>{{ fruit.name }}</v-card-title>

      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="handleClick()"
        >
          See more about it!
        </v-btn>
      </v-card-actions>

    </v-card>
</template>

<script>

export default {
  name: 'FruitCard',
  props: {
    fruit: {
      type: Object,
      default: () => {}
    }
  },
  methods: {

    handleClick(){
      this.$emit('call-to-action-click')
    }

  }
};
</script>
