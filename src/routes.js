const routes = [
  {
        // default
        path: '/',
        name: 'home',
        component: () => import(
            '@/pages/Home'
        ),
    },
    {
      path: '/fruit-detail/:id',
      name: 'Fruit detail',
      component: () => import(
          '@/pages/FruitDetail'
      ),
    },
];

export default routes;
