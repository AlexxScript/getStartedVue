<template>
    <div class="post">
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
        <input type="text" v-model="message">
        <button @click="handleClick">Di hola</button>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name:"PostDetail",
    props: {
        title:{
            type:String,
            required:true
        },
        content:{
            type: String,
            required: false,
            default:"Este post no tiene contenido"
        }
    },
    emits:["sayHi"],
    setup(props,{emit}){
        function handleClick () {
            emit('sayHi',message.value)
        }
        let message = ref('')
        return{
            props,
            handleClick,
            message
        }
    }
})
</script>

<style scoped>
.post{
    width: 300px;
    height: 250px;
    background-color: antiquewhite;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}
</style>