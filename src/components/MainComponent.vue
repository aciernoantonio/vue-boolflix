<template>
    <div>
        <ul class="movie" v-for="(movie, index) in movieList" :key="index">
        
        <li><img :src="imgSize + movie.poster_path" alt=""></li>
        <li><h3>{{movie.title}}{{movie.name}}</h3></li>
        <li><h3>{{movie.original_title}}{{movie.original_name}}</h3></li>
        <li><country-flag :country="movie.original_language === 'en' ? 'gb' : movie.original_language" size="normal" /></li>
        <li>
          <div v-for="num in roundVote(movie.vote_average)" :key="num">
            <div><font-awesome-icon icon="fa-solid fa-star" :key="star + 'full'" /></div>
          </div>

          <div v-for="empty in 5 - roundVote(movie.vote_average)" :key="empty">
            <div><font-awesome-icon icon="fa-regular fa-star" :key="star + 'empty'" /></div>
          </div>
        </li>
        
      </ul>

      <ul class="tv" v-for="(tv, index) in tvList" :key="index">

        <li><img :src="imgSize + tv.poster_path" alt=""></li>
        <li><h3>{{tv.name}}</h3></li>
        <li><h3>{{tv.original_name}}</h3></li>
        <li><country-flag :country="tv.original_language === 'en' ? 'gb' : tv.original_language" size="normal" /></li>
        <li>
          <div v-for="num in roundVote(tv.vote_average)" :key="num">
            <div><font-awesome-icon icon="fa-solid fa-star" /></div>
          </div>

          <div v-for="empty in 5 - roundVote(tv.vote_average)" :key="empty">
            <div><font-awesome-icon icon="fa-regular fa-star" /></div>
          </div>
        </li>

      </ul>

    </div>
</template>

<script>
export default {
    name: "MainComponent",
    components: {
        
    },

    methods:{
        roundVote(vote){
        return Math.ceil(vote / 2);
        }   
    },

    data(){
        return{
            imgSize: "http://image.tmdb.org/t/p/w500/"
        }
    },

    props: [
        "movieList",
        "tvList"
    ]

}
</script>