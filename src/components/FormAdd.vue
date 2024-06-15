<template>
    <div class="min-h-screen flex items-center justify-center w-full">
        <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
            <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Add teacher!</h1>
            <form @submit.prevent="createTeacher">
                <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name teacher</label>
                    <input v-model="nameT" type="text" id="name" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your name" required>
                </div>
                <div class="mb-4">
                    <label for="text" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last name</label>
                    <input v-model="lastT" type="text" id="text" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your lastname" required>
                </div>
                <div class="mb-4">
                    <label for="text" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">DNI or NIF</label>
                    <input v-model="idT" type="text" id="text" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="DNI or NIF" required>
                </div>
                <div class="mb-4">
                    <label for="text" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                    <input type="text" v-model="subjetcT">
                    <button @click.prevent="handleSubject">Add subject</button>
                </div>
                <div class="mb-4 flex justify-center items-center gap-3">
                    <label for="text" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Documentation completed?</label>
                    <input v-model="documentationT" type="checkbox" name="" id="">
                </div>
                <input type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
            </form>
        </div>
    </div>

    <table class="text-left  max-w-full w-10/12 m-auto">
		<thead class="bg-white flex text-black w-full">
			<tr class="flex w-full mb-4">
				<th class="border border-slate-600 p-4 w-1/4">DNI</th>
				<th class="border border-slate-600 p-4 w-1/4">Name</th>
				<th class="border border-slate-600 p-4 w-1/4">Last name</th>
				<th class="border border-slate-600 p-4 w-1/4">subject</th>
				<th class="border border-slate-600 p-4 w-1/4">Documentation</th>
			</tr>
		</thead>
		<tbody v-for="teacher in teachers" :key="teacher.id" class="bg-slate-600 flex flex-col items-center justify-between overflow-y-scroll">
            <tr class="flex w-full mb-4">
				<td class="p-4 w-1/5">{{ teacher.id }}</td>
				<td class="p-4 w-1/5">{{ teacher.name }}</td>
				<td class="p-4 w-1/5">{{ teacher.lastName }}</td>
				<td class="p-4 w-1/5">
                    <ul v-for="i in teacher.subject" :key="i">
                        <li>{{ i }}</li>
                    </ul>
                </td>
				<td class="p-4 w-1/5">{{ teacher.documentation }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup>
import { ref } from 'vue';
    let idT = ref('')
    let nameT = ref('')
    let lastT = ref('')
    let s = ref([])    
    let subjetcT = ref('')
    let documentationT = ref(false)
    let teachers = ref([{id:'',name:'',lastName:'',subject:[],documentation:''}])

    const handleSubject = () => {
        s.value.push(subjetcT.value)
        subjetcT.value = ""
        console.log(s)
    }

    const createTeacher = () => {
        teachers.value.push({
            id:idT.value,
            name:nameT.value,
            lastName:lastT.value,
            subject:s.value,
            documentation:documentationT.value
        })
        idT.value=''
        nameT.value=''
        lastT.value=''
        s.value=''
        documentationT.value=''
    }
</script>