<template>
  <div>
    <pokemon-detail 
      @addToCart="addToCart"
      :pokemonId="$route.params.id" 
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PokemonDetail from "@/components/PokemonDetail";
export default {
  components: {
    PokemonDetail
  },
  methods: {
    ...mapActions(["addToCart"])
  },
};
</script>