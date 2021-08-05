<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-main>
      <home/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    home: () => import(
            '@/pages/Home'
        ),
  },

  data: () => ({
    //
  }),
};
</script>
