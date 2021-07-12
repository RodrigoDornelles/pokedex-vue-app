<template>
  <ul class="pagination">
    <li :class="actual>min?'waves-effect':'disabled'"><a href="#!" @click="change(min)"><i class="material-icons">first_page</i></a></li>
    <li :class="actual>min?'waves-effect':'disabled'"><a href="#!" @click="change(actual - 1)"><i class="material-icons">chevron_left</i></a></li>
    <li v-for="i in pages()" :key="i" :class="i==actual?'active':'waves-effect'">
        <a href="#!" @click="change(i)">{{ i }}</a>
    </li>
    <li :class="actual<max?'waves-effect':'disabled'"><a href="#!" @click="change(actual + 1)"><i class="material-icons">chevron_right</i></a></li>
    <li :class="actual<max?'waves-effect':'disabled'"><a href="#!" @click="change(max)"><i class="material-icons">last_page</i></a></li>
  </ul>
</template>

<script>
import bus from '../bus.js';

export default {
  name: 'Pagination',
  props: {
    min: Number,
    max: Number,
    actual: Number
  },
  methods: {
      pages() {
        return Array.from({length: Math.min(7, this.max - this.min)}, (_, i) => 
          Math.max(this.actual - 3, this.min) + i + Math.min(0, (this.max - 3) - this.actual)
        );
      },
      change(number) {
        bus.$emit('gopage', number);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
