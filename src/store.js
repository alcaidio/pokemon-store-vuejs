import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    statePokemonDataList: [],
    stateCartPokemonList: []
  },
  actions: {
    setPokemonData(context, payload) {
      context.commit("setPokemonData", payload);
    },
    setCartPokemonList(context, payload) {
      context.commit("setCartPokemonList", payload);
    },
    addToCart(context, payload) {
      context.commit("addToCart", payload);
    },
    deleteFromCArt(context, payload) {
      context.commit("deleteFromCArt", payload);
    },
    eraseFavoritePokemonList(context) {
      context.commit("eraseFavoritePokemonList");
    }
  },
  mutations: {
    setPokemonData(state, list) {
      state.statePokemonDataList = list;
    },
    setCartPokemonList(state, list) {
      state.stateCartPokemonList = list;
    },
    addToCart(state, name) {
      state.stateCartPokemonList.push(name);
    },
    deleteFromCArt(state, item) {
      state.stateCartPokemonList.splice(item, 1);
    },
    eraseFavoritePokemonList(state) {
      state.stateCartPokemonList = [];
    }
  }
});