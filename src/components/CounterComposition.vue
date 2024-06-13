<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">incrementar</button>
    <button @click="decreaseCounter">Decrementar</button>
</template>

<script>
//composition API, usamos ref para el control del estado
import { defineComponent, ref } from "vue"
export default defineComponent({
    name: "CounterComposition",
    setup() {
        let counter = ref(0);

        const addCounter = () => {
            counter.value++
        }

        const decreaseCounter = () => {
            counter.value--
        }

        return {
            counter,
            addCounter,
            decreaseCounter
        }
    }
})
</script>

<style></style>