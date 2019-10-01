<template>
  <div>
    <h1>User {{ $route.params.id }}</h1>
    <pokemon-card :key="index" :pokemonId="$route.params.id" />
    <router-link to="/">Go back</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PokemonCard from "@/components/PokemonCard";
export default {
  components: {
    PokemonCard
  },
  computed: {
    ...mapState(["stateCartPokemonList"])
  }
};
</script>