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
    <div class=" w-full lg:max-w-xl  shadow-xl border bg-white rounded-2xl ">
     <form action="" v-on:submit.prevent="addCardProps" class="flex flex-col   items-center justify-center   p-8  py-10 ">
        <input class="appearance-none bg-transparent   text-gray-700 w-full  focus:outline-none border-b-2 border-blue-900 mb-5 " type="text" placeholder="Board Name" v-model="name"><br>
        <input class="appearance-none bg-transparent   text-gray-700 w-full focus:outline-none border-b-2 border-blue-900  mb-8" type="text" placeholder="Number of members" v-model.number="numberOfMember">
        <input type="submit" value="Créer" class="bg-blue-950 p-2 rounded-2xl w-full" >
     </form>
     <div v-for="card in CardProps" :key="card.id" class="text-red-800">
        {{ card.name }} - {{ card.numberOfMember }} members
    </div>
    </div>
    
</template>

<style scoped>

</style>