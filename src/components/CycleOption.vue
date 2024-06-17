<template>
    <div>
        hello world
    </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'CycleOption',
    created() {
        console.log("created")
    },
    mounted() {
        console.log("mounted")
    },
    updated() {
        console.log("updated")
    },
})
</script>

<style scoped></style>