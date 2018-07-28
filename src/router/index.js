import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HelloAgain from '@/components/HelloAgain';
import HelloAgainWithID from '@/components/HelloAgainWithID';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/hello-again',
      name: 'HelloAgain',
      component: HelloAgain,
    },
    {
      path: '/hello-again/:id',
      name: 'HelloAgainWithID',
      component: HelloAgainWithID,
    },
  ],
});
