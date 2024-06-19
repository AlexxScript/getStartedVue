<template>
    <div class="post">
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
        <input type="text" v-model="message">
        <button @click="handleClick">Di hola</button>
    </div>
</template>

<script setup>
import { definProps, defineEmits, ref } from 'vue';

const props = definProps({
    title: String,
    content: String
});

const emit = defineEmits(["sayHi"]);

let message = ref('');

const handleClick = () => {
    emit("sayHi",message.value)
}
// export default defineComponent({
//     name:"PostDetail",
    // props: {
    //     title:{
    //         type:String,
    //         required:true
    //     },
    //     content:{
    //         type: String,
    //         required: false,
    //         default:"Este post no tiene contenido"
    //     }
    // },
    // emits:["sayHi"],
    // setup(props,{emit}){
    //     function handleClick () {
    //         emit('sayHi',message.value)
    //     }
    //     let message = ref('')
    //     return{
    //         props,
    //         handleClick,
    //         message
    //     }
    // }
// })
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