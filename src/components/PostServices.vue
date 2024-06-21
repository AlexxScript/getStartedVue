<template>
    <div>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <h1>{{ post.title }}</h1>
                <p>{{ post.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import PostService from '../services/PostService.js'

const services = new PostService()
const posts = services.getPost()
onMounted( async ()=>{
    await services.fetchAll()
})
</script>

<style scoped>
div{
    color:white;
}
</style>