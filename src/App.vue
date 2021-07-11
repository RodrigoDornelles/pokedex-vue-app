<template>
  <div id="app">
    <img alt="VueDex" src="./assets/vuedex.png">
    
    <section id="Types">
      <Type v-for="(name, key) in this.types.data" :name="name" :key="key"/>
    </section>
  </div>
</template>

<script>
import Type from "./components/Type.vue";

export default {
  name: 'App',
  components: {
    Type
  },
  data: () => ({
    types: {
      data: [],
      count: 0
    },
    pokemons: {
      data: [],
      count: 0,
      total: 0
    }
  }),
  mounted() {
    this.fetchTypes();
    this.fetchPokemon();
  },
  methods: {
    fetchTypes() {
      this.axios.get('types').then((response) => {
        this.types = response.data;
      })
    },
    fetchPokemons() {
      this.axios.get().then((response) => {
        console.log(response.data)
      })
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}

#Types {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
