<template>
  <div id="app">
    <h1>Vue/.git Tree Browser</h1>
    <TreeBrowser @onClick="nodeWasClicked" :node="root"/>
  </div>
</template>

<script>
import TreeBrowser from "./components/TreeBrowser.vue";
import root from "./assets/data.json";
export default {
  name: "app",
  data() {
    return {
      root
    };
  },
  methods: {
    nodeWasClicked(node) {
      alert(node.name);
    }
  },
  components: {
    TreeBrowser
  }
};
</script>

<style>
body {
  background: #333;
  color: white;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
