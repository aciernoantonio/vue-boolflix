<template>

<header>
    <div class="searchbar">
      <input type="text" v-model="searchText">
      <button @click="$emit('click', searchText)">Search</button>
    </div>
</header>
    
</template>

<style lang="scss" scoped>

</style>

<script>


export default {
        name: "HeaderComponent",
        components: {

        },

        data(){
            return {
                searchText: ""

            }
        },

        methods: {
        

    }
    
    
}
</script>