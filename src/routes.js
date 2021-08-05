const routes = [
  {
        // default
        path: '/',
        name: 'home',
        component: () => import(
            '@/pages/Home'
        ),
    },
];

export default routes;
