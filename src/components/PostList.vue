<template>
    <div class="container">
        <PostDetail v-for="elm in info" :key="elm.title" 
            :title="elm.title" 
            :content="elm.content"
            @sayHi="showAlert"
        />
    </div>
</template>

<script setup>
import PostDetail from './PostDetail.vue'

let info = [
    { title: "post1", content: "content del post 1" },
    { title: "post2", content: "content del post 2" },
    { title: "post3", content: "content del post 3" },
    { title: "post4", content: "content del post 4" },
    { title: "post5", content: "content del post 5" }
]

function showAlert(msg){
    alert(msg)
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row;
}
</style>