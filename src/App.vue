<template>
  <div id="app">

    <div class="searchbar">
      <input type="text" v-model="searchText">
      <button @click="searchedMovie">Search</button>

      <ul class="movie" v-for="(movie, index) in movieList" :key="index">
        
        <li><h3>{{movie.title}}{{movie.name}}</h3></li>
        <li><h3>{{movie.original_title}}{{movie.original_name}}</h3></li>
        <li><country-flag :country="movie.original_language === 'en' ? 'gb' : movie.original_language" size="normal" /></li>
        <li><div>{{movie.vote_average}}</div></li>

      </ul>

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
      linkMovie: `https://api.themoviedb.org/3/search/movie?api_key=e089283e85aac817aa741b544b97794c&language=en-US&page=1&include_adult=false&query=`,
      linkTv: `https://api.themoviedb.org/3/search/tv?api_key=e089283e85aac817aa741b544b97794c&language=en-US&page=1&include_adult=false&query=`,
      searchText: "",
      reponse: null,
    }
  },

  methods:{

    searchedMovie(){
      axios
      .get(`${this.linkMovie}${this.searchText}`)
      .then(response => {
      this.movieList = response.data.results;
      console.log(this.movieList);
      }),

      axios
      .get(`${this.linkTv}${this.searchText}`)
      .then(response => {
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
