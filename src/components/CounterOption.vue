<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">incrementar</button>
    <button @click="decreaseCounter">Decrementar</button>
</template>

<script>
//Option API
    import { defineComponent } from "vue"
    export default defineComponent({
        name: "CounterOption",
        // components: { en caso de que usemos componentes dentro de este compoenente
        //     MiComponente1, no olvidar importarlos
        //     MiComponente2,
        //     MiComponente3,
        // }
        data(){ //datos que vamos a utilizar
            let counter = 0;
            return {
                counter
            }
        },
        methods: {
            addCounter () {
                this.counter++
            },
            decreaseCounter () {
                this.counter--
            }
        }
    })
</script>

<style scoped>
</style>