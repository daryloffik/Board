<script setup>
import { ref } from 'vue'
const name =ref('')
const numberOfMember = ref(0)

const CardProps = ref(
    [
  
    ]
)

let Id = 0;
function addCardProps(){
if( name.value.trim !== '' &&  typeof numberOfMember.value == 'number'){
    CardProps.value.push(
    {
     id:Id++,
    name:name.value,
    numberOfMember:numberOfMember.value})  
}
else{
    console.warn('Please enter a board name.');
}
    name.value=''
    numberOfMember.value =''
}
</script>

<template>
    <div class="rounded-2xl bg-white p-10 flex flex-col w-fit  items-center justify-center shadow-xl border ">
     <form action="" v-on:submit.prevent="addCardProps">
        <input class="appearance-none bg-transparent  w-full text-gray-700  leading-tight focus:outline-none border-b-2 border-blue-900 mb-5 " type="text" placeholder="Board Name" v-model="name">
        <input class="appearance-none bg-transparent  w-full text-gray-700  leading-tight focus:outline-none border-b-2 border-blue-900  mb-8" type="text" placeholder="Number of members" v-model.number="numberOfMember">
        <input type="submit" value="Créer" class="bg-blue-950 p-2 rounded-2xl w-full" >
     </form>
     <div v-for="card in CardProps" :key="card.id" class="text-red-800">
        {{ card.name }} - {{ card.numberOfMember }} members
    </div>
    </div>
    
</template>

<style scoped>

</style>