<template>
  <div id="app">
    <HelloWorld dataUrl="http://localhost:8082/icd10" v-model="value"/>
  </div>
</template>

<script>
import IcdSelect from "./components/IcdSelect.vue";

export default {
  name: "app",
  components: {
    IcdSelect
  },
  data: function() {
    return { value: "A18.02" };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
