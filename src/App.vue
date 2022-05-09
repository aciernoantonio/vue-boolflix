<template>
  <div id="app">

    <div class="searchbar">
      <input type="text" v-model="searchText" @keyup="searchedMovie">
      <button @click="searchedMovie">Search</button>
    </div>

    <div class="results">

      <div class="movie"></div>

    </div>
    

  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'App',
  components: {
    
  },

  data(){
    return {
      movieList: [],
      link: "https://api.themoviedb.org/3/search/movie?api_key=e089283e85aac817aa741b544b97794c&language=en-US&page=1&include_adult=false",
      searchText: "",
    }
  },

  methods:{
    searchedMovie(){
      console.log(this.searchText);
      axios
      .get(this.link)
      .then(response => {
        this.movie = response.data.results;
        console.log(this.movie);
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
