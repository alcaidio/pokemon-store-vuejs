import Vue from "vue";
import Router from "vue-router";

import Shop from "./views/Shop.vue";
import Pokemon from "./views/Pokemon.vue";
import Cart from "./views/Cart.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "shop",
      component: Shop
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/pokemon/:id",
      name: "pokemon",
      component: Pokemon
    },
    {
      path: "*",
      redirect: '/'
    },
  ]
});
