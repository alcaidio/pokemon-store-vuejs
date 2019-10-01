<template>
  <div>
    <h1>This is an Cart page</h1>
    <summary-products
      :pokemon-list="statePokemonDataList"
      :products="stateCartPokemonList"
      @addToCart="addToCart"
      @eraseCartPokemonList="eraseCartPokemonList"
    />
    <router-link to="/">Go back</router-link>
  </div>
</template>

<script>
import SummaryProducts from "@/components/SummaryProducts";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    SummaryProducts
  },
  computed: {
    ...mapState(["statePokemonDataList", "stateCartPokemonList"])
  },
  methods: {
    ...mapActions(["addToCart", "eraseCartPokemonList"])
  }
};
</script>