<template>
    <p v-bind:style="{color:c}">El mensaje se ha enviado satisfactoriamente</p>
    <button @click="handleClick()">Cambiar color</button>
    <!-- <p :class="{ 'danger': hasError }">El mensaje se ha enviado satisfactoriamente</p> -->
</template> 

<script setup>
import { ref } from 'vue'
let c = ref('#fff')
function handleClick() {
    c.value = '#000'
}
</script>

<!-- <script>
import { defineComponent } from "vue";
export default defineComponent({
    name:'ClassBind',
    setup(){
        let hasError = true
        return { hasError }
    }
})
</script> -->

<style scoped>
.danger {
    color: red;
}
</style>