
<template>
  <div class="nav">
    <div class="title">Pokéstore</div>
    <div class="search">search</div>
    <router-link to="/cart" class="cart">{{stateTotal}} $</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["stateTotal"])
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
    ...mapActions(["getTotal"])
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #444;
  z-index: 1;
  line-height: 60px;
  text-align: center;

  .title {
    background-color: red;
    width: 120px;
  }
  .search {
    flex: 1;
    background-color: blue;
  }
  .cart {
    background-color: yellow;
    width: 120px;
    justify-self: center;
  }
}
</style>