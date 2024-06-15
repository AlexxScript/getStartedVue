<template>
    <form>
        <input type="text" name="" id="" v-model="inputText">
        <input type="checkbox" v-model="agree"> Acepto los términos y condiciones 
        <select name="" id="" v-model="country">
            <option value="Spain">Spain</option>
            <option value="France">France</option>
            <option value="UK">UK</option>
        </select>
    </form>
    <h3>{{ inputText }}</h3>
</template>

<script setup>
import { ref } from 'vue';

let country = ref('Spain')
let inputText = ref('')
let agree = ref(true)
</script>

<style scoped>
</style>