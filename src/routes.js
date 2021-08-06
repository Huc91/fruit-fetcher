const routes = [
  {
        // default
        path: '/',
        name: 'index',
        component: () => import(
            '@/pages/Index'
        ),
    },
    {
      path: '/fruit-detail/:id',
      name: 'Fruit detail',
      component: () => import(
          '@/pages/FruitDetail/Index.vue'
      ),
    },
];

export default routes;
