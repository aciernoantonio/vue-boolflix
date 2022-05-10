<template>
  <div id="app">

    <div class="searchbar">
      <input type="text" v-model="searchText">
      <button @click="searchedMovie">Search</button>

      <div class="movie" v-for="(movie, index) in movieList" :key="index">
        
        <h3>{{movie.title}}</h3>
        <h3>{{movie.original_title}}</h3>
        <div>{{movie.original_language}}</div>
        <div>{{movie.vote_average}}</div>

      </div>

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
      link: `https://api.themoviedb.org/3/search/movie?api_key=e089283e85aac817aa741b544b97794c&language=en-US&page=1&include_adult=false&query=`,
      searchText: "",
      reponse: null,
    }
  },

  methods:{

    searchedMovie(){
      axios
      .get(`${this.link}${this.searchText}`)
      .then(response => {
        console.log(response.data.results);
      this.movieList = response.data.results;
      console.log(this.movieList);
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

img{
  height: 200px;
}
</style>
