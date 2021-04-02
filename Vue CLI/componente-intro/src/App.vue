<template>
  <div id="app">
    <h1>{{ contadores }}</h1>
    <app-contadores></app-contadores>
  </div>
</template>

<script>
export default {
  el: '#app',
  data() {
    return {
      contadores : 'Contador'
    }
  }
}
</script>

<style></style>
