<template>
  <div id="app">
    <h1><img alt="VueDex" src="./assets/vuedex.png"></h1>
    <section>
      <h3>Pokemon Listed: <span>{{ pokemons.count }} / {{ pokemons.total }}</span></h3>
    </section>
    <section id="Types">
      <Type 
        v-for="(name, key) in types.data"
        :checked="checkedtype(name)"
        :name="name" :key="key"
      />
    </section>
    <section>
      <PokemonTable :pokemons="pokemons" :sort="sort"/>
    </section>
    <section>

    </section>
  </div>
</template>

<script>
import bus from './bus.js';
import Type from "./components/Type.vue";
import PokemonTable from "./components/PokemonTable.vue";

export default {
  name: 'App',
  components: {
    Type,
    PokemonTable,
  },
  data: () => ({
    sort: null,
    page: 0,
    filter: {
      types: []
    },
    types: {
      data: [],
      count: 0
    },
    pokemons: {
      data: [],
      count: 0,
      total: 0,
      pagination: {
        page: 0,
        pageCount: 0,
      }
    }
  }),
  mounted() {
    this.fetchTypes();
    this.fetchPokemons();

    bus.$on('sort', (number) => {
      this.sort = number;
      this.fetchPokemons();
    });
    bus.$on('gopage', (number) => {
      this.page = number;
      this.fetchPokemons();
    });
    bus.$on('checktype', (name) => {
      if (this.filter.types.includes(name)) {
        this.filter.types.splice(this.filter.types.indexOf(name), 1);
      }
      else if (this.filter.types.length <= 1) {
        this.filter.types.push(name);
      } else {
        this.filter.types.splice(0, 1);
        this.filter.types.push(name);
      }
      this.fetchPokemons();
    });
  },
  methods: {
    fetchTypes() {
      this.axios.get('types').then((response) => {
        this.types = response.data;
      })
    },
    fetchPokemons() {
      this.axios.get('list', {
        params: {
          'sort': this.sort,
          'page': this.page,
          'PokemonSearch[type_1]': this.filter.types[0] ?? null,
          'PokemonSearch[type_2]': this.filter.types[1] ?? null
        }
      }).then((response) => {
        this.pokemons = response.data;
      })
    },
    checkedtype(name) {
      return this.filter.types.includes(name);
    }
  }
}
</script>

<style>
@import '//fonts.googleapis.com/icon?family=Material+Icons';
@import '../node_modules/@materializecss/materialize/dist/css/materialize.min.css';

#app {
  text-align: center;
}

#Types {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

section {
  max-width: 640px;
  margin: 32px auto;
}

h2 span {
  display: inline-block;
}
</style>
