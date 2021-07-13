<template>
  <main id="app">
    <h1><img alt="VueDex" src="./assets/vuedex.png"></h1>
    <div v-if="pokemons.total">
      <section>
        <h5>Pokemon Listed: <span>{{ pokemons.count }} / {{ pokemons.total }}</span></h5>
        <Search :filter="filter"/>
      </section>
      <section>
        <ListTypes :types="types" :filter="filter"/>
      </section>
      <section>
        <PokemonTable :pokemons="pokemons" :sort="sort" :view="view" v-if="pokemons.count"/>
        <span class="not-found" v-else>No pokemons were found!<br/>
          <small>in current search terms.</small>
        </span>
      </section>
    </div>
    <Loading v-else />
  </main>
</template>

<script>
import bus from './bus.js';
import Search from "./components/Search.vue";
import Loading from "./components/Loading.vue";
import ListTypes from "./components/ListTypes.vue";
import PokemonTable from "./components/PokemonTable.vue";

export default {
  name: 'App',
  components: {
    Search,
    Loading,
    ListTypes,
    PokemonTable,
  },
  data: () => ({
    sort: null,
    page: 0,
    view: {
      id: 0,
      number: 0,
      name: "MissingNo.",
      type_1: "Bug",
      type_2: "Error",
      total: 0,
      hp: 0,
      attack: 0,
      defense: 0,
      special_attack: 0,
      special_defence: 0,
      speed: 0,
      generation: 0,
      legendary: true,
    },
    filter: {
      types: [],
      mega: null,
      search: null,
      legendary: null,
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

    bus.$on('info', (id) => {
      this.axios.get(`info/id/${id}`).then((response) => {
        this.view = response.data.data;
      }).then(() => {
        bus.$emit('modal');
      });
    });
    bus.$on('sort', (number) => {
      this.sort = number;
      this.fetchPokemons();
    });
    bus.$on('gopage', (number) => {
      this.page = number;
      this.fetchPokemons();
    });
    bus.$on('search', (input) => {
      this.filter.search = input;
      this.fetchPokemons();
    });
    bus.$on('checkmega', (check) => {
      this.filter.mega = check? 1: null;
      this.fetchPokemons();
    });
    bus.$on('checklegendary', (check) => {
      this.filter.legendary = check? 1: null;
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
          'PokemonSearch[mega]': this.filter.mega,
          'PokemonSearch[name]': this.filter.search,
          'PokemonSearch[type_1]': this.filter.types[0] ?? null,
          'PokemonSearch[type_2]': this.filter.types[1] ?? null,
          'PokemonSearch[legendary]': this.filter.legendary,
        }
      }).then((response) => {
        this.pokemons = response.data;
      })
    },
  }
}
</script>

<style>
@import '//fonts.googleapis.com/icon?family=Material+Icons';
@import '../node_modules/@materializecss/materialize/dist/css/materialize.min.css';

#app {
  text-align: center;
}

section {
  max-width: 640px;
  margin: 8px auto;
}

.not-found {
  padding-top: 32px;
  font-size: 24px;
}
</style>
