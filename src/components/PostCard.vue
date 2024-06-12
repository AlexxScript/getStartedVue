<template>
    <div class="post-card">
        <h3>Título</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit et doloremque ea odit vel, cum quibusdam, ullam exercitationem, nobis laudantium expedita pariatur perferendis sint autem accusamus possimus eligendi sapiente qui.</p>
        <PostButton/>
    </div>
</template>

<script setup>
    import PostButton from "./PostButton.vue";
</script>

<style scoped>
    .post-card{
        border-radius: 16px;
        padding: 10px;
        margin: 5px;
        border: 1px solid wheat;
    }
</style>