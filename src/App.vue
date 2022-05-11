<template>
  <div id="app">

    <HeaderSection @click="searchedMovie"/>

    <MainSection :movieList="movieList" :tvList="tvList"/>
    

  </div>
</template>

<script>
import axios from "axios"

import HeaderSection from "@/components/HeaderComponent.vue"
import MainSection from "@/components/MainComponent.vue"


export default {
  name: 'App',
  components: {
    HeaderSection,
    MainSection,
  },

  data(){
    return {
      
      movieList: [],
      tvList: [],
      linkMovie: `https://api.themoviedb.org/3/search/movie?api_key=e089283e85aac817aa741b544b97794c&language=en-US&page=1&include_adult=true&query=`,
      linkTv: `https://api.themoviedb.org/3/search/tv?api_key=e089283e85aac817aa741b544b97794c&language=en-US&page=1&include_adult=true&query=`,
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
      this.tvList = response.data.results;
      console.log(this.tvList);
      })
      
    },

    
    
  },

  

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
