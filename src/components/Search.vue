<template>
    <div>
        <div class="input-field">
            <input type="text" v-model.trim="filter.search" @input="input()">
            <label for="autocomplete-input">Search by pokémon name...</label>
        </div>
    </div>
</template>

<script>
import bus from '../bus.js';

let searchTimeout;

export default {
  name: 'Search',
  props: {
    filter: Object,
    legendary: Boolean,
  },
  methods: {
    input() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            bus.$emit('search', this.filter.search);
        }, 1000);
    }
  }
}
</script>

<style scoped>
.input-field {
    margin: 0 auto;
    width: 95%;
}
</style>
