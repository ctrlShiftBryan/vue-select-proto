<template>
  <v-select :options="options"
            :filterable="false"
            label="name"
            @search="onSearch" v-model="selected">
    <template slot="no-options">
      Please enter 3 or more characters
    </template>
    <template slot="option" slot-scope="option">
      <div class="d-center">
        <b>{{ option.code }}</b>
        {{ option.name }}
      </div>
    </template>
    <template slot="selected-option" slot-scope="option">
      <div class="selected d-center">
        <b>{{ option.code }}</b>
        {{ option.name }}
      </div>
    </template>
  </v-select>
</template>

<script>
import vSelect from "vue-select";
export default {
  name: "HelloWorld",
  data: function() {
    return {
      selected: null,
      options: []
    };
  },
  props: {
    initValue: {},
    dataUrl: {}
  },
  components: {
    "v-select": vSelect
  },
  methods: {
    onSearch(search, loading) {
      if (search.length >= 3) {
        loading(true);
        this.search(loading, search, this);
      }
    },
    search: (loading, search, vm) => {
      fetch(`${vm.dataUrl}?q=${escape(search)}`).then(res => {
        res.json().then(json => (vm.options = json.data));
        loading(false);
      });
    }
  },
  created: function() {
    fetch(`${this.dataUrl}?q=${escape(this.initValue)}`).then(res => {
      res.json().then(json => (this.selected = json.data[0]));
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
