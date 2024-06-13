<template>
    <!-- cuando necesitemos que no se va a modificar demasiado por ejemplo
        cuando el usuario hace cierta acción
    -->
    <h1 v-if="age<18">Eres menor de edad</h1>
    <h1 v-else>Eres mayor de edad</h1>

    <!-- Cambios constantes, comprobaciones constantes
        para mejorar el rendimiento
    -->
    <h1 v-show="age<18">Eres menor de edad</h1>
    <h1 v-show="age>18">Eres mayor de edad</h1>
</template>

<script setup>
    let age = 10
</script>

<!-- <script>
import { defineComponent } from 'vue'
    export default defineComponent({
        name: "ExampleSelective",
        setup() {
            let age = 10
            return { age }
        }
    }) 
</script> -->

<style scoped>
</style>