import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/home', // 项目启动的时候默认是访问根目录
  },
  {
    path: '/code',
    name: 'Code',
    component: () => import('../src/Code.vue'),
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('../src/table.vue'),
  },
  {
    path: '/hellow',
    name: 'HelloWorld',
    component: () => import('../components/HelloWorld.vue'),
  },
  {
    path: '/testcode',
    name: 'TestCode',
    component: () => import('../src/Testcode.vue'),
  },
  {
    path: '/slid',
    name: 'Slid',
    component: () => import('../src/Slid.vue'),
  },
  {
    path: '/home',
    name: 'HomeNavigation',
    component: () => import('../src/homeNavigation.vue'),
    children: [
      {
        path: '/product',
        name: 'Production',
        component: () => import('../src/view/product.vue'),
      },
      {
        path: '/question',
        name: 'Question',
        component: () => import('../src/view/question.vue'),
      },
      {
        path: '/public',
        name: 'Public',
        component: () => import('../src/view/public.vue'),
        children: [
          {
            path: 'one',
            name: 'One',
            component: () => import('../src/view/public/one.vue'),
          },
          {
            path: 'two',
            name: 'Two',
            component: () => import('../src/view/public/two.vue'),
          },
          {
            path: 'three',
            name: 'Three',
            component: () => import('../src/view/public/three.vue'),
          },
        ],
      },
    ],
  },
];

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
// export default new Router({
//   routes: [
//     {
//       path: '/code',
//       name: 'Code',
//       component: () => import("../src/Code.vue")
//     },
//     {
//       path: '/hellow',
//       name: 'HelloWorld',
//       component: () => import("../components/HelloWorld.vue")
//     },
//   ]
// });
