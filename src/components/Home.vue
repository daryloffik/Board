<script setup>

import Image from './Image.vue'
import BoardForm from './BoardForm.vue'

import { ref } from 'vue'
import { useCurrentUser } from 'vuefire'

const showAddButton =ref(false);

setInterval(showAddButton.value = true,2);
const user = useCurrentUser();

const showForm =ref(false);
const showDropdown =ref(false);
 console.log(showForm.value)
</script>

<template >
   <div class="bg-slate-200 h-[50vh] relative z-0">
    <div class="flex flex-row justify-end">
        <div class="bg-slate-300 p-2 px-5 text-slate-400 uppercase absolute top-1 left-2">
      Logo
     </div>
     <div class="flex flex-row gap-3">
       <div class="p-3 pt-8  rounded-b-2xl cursor-pointer transition hover:p-8 duration-500" :class="{addButton : showAddButton}" @click="showForm = !showForm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 stroke-white">
  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
</svg>

       </div>
   <div class="flex flex-row gap-3 items-center justify-center cursor-pointer " @click="showDropdown = !showDropdown">
    <div class="bg-slate-300 h-fit p-2 m-2 rounded-xl ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-white">
  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
</svg>

       </div>
      <div class="hidden lg:flex lg:flex-row mr-5">
        <p class="text-slate-400" > {{ user?.email || 'Anthony'}}</p>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-slate-300">
  <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
</svg>

      </div>
   </div>
   
     </div>
     <div class="bg-white p-5 flex flex-col rounded-xl absolute right-2 top-20 font-medium" v-if=" showDropdown" :class="{ slidedIn : showDropdown}">
      <p class="border-b-2 border-blue-950 hover:bg-slate-400 flex flex-row text-blue-950 transition-all duration-500 cursor-pointer mb-2 text-lg ">
        Se déconnecter
      </p>
      <router-link class="border-b-2 border-blue-950 hover:bg-slate-400 flex flex-row text-blue-950 transition-all duration-500 cursor-pointer text-lg hover:ps-3" to="/SignIn">
        Se connecter
      </router-link>
      <router-link class="border-b-2 border-blue-950 hover:bg-slate-400 flex flex-row text-blue-950 transition-all duration-500 cursor-pointer text-lg hover:ps-3" to="/SignUp">
        S'inscrire
      </router-link>
     </div>
    </div>
    <div >
      <h2 class="font-bold text-3xl text-blue-950  ml-7 lg:ml-16">My Boards</h2>
      <p class=" ml-7 lg:ml-16 text-slate-500">0 boards-0 tasks</p>
     
    </div>
    
    </div>
    <router-view></router-view>
    <Image class="-translate-y-44 min-h-screen md:ml-24 lg:ml-80"></Image>
    <BoardForm class="absolute top-72 lg:left-[22rem] md:left-[09rem]" v-if="showForm"></BoardForm>
    <SignIn></SignIn>
 
</template>

<style scoped>

.addButton{
  z-index: 1;


position: relative;


transition: all 250ms;
overflow: hidden;
}
.addButton::before{
  content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 0;
      width: 100%;
       
    background-color: rgb(23 37 84 );

      z-index: -1;

      transition: all 250ms;
  animation: full ease-in-out 1s forwards;
}


@keyframes full {
  from{
 

  }
  to{
    height: 100%;
  }
}

.slidedIn {
       transform: translateX(12rem);
       animation: slide-in 1s ease-in-out forwards;
   }

   @keyframes slide-in {
       from {
           transform: translateX(12rem);
       }

       to {
           transform: translateX(0px);
       }
   }


</style>
