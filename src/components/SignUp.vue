<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { ref,onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const auth = useFirebaseAuth() // only exists on client side
 const email = ref('')
 const password = ref('')
 const error = ref(null)
 const router = useRouter()
 
 const createUser = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        // Handle successful signup (e.g., navigate to another page)
        router.push({ name: "Home" });

      } catch (err) {
        error.value = err.message; // Set error message
      }
    };

    const user = useCurrentUser()
  return {
    error,
      email,
      password,
      createUser,
      user,
      
    };
  }

}
</script>

<template>
   
 <div class="flex flex-col items-center justify-center min-h-screen bg-slate-200">
  <p class="p-4 text-red-500 bg-slate-50 rounded-xl mb-2 opacity-0" :class="{scaled : error}">{{ error }}</p>
  <p class="text-xl text-blue-950 font-semibold mb-3">Sign Up</p>
  <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2 " for="email">
      Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-500 focus:ring focus:ring-blue-500" id="email" type="email" v-model="email" placeholder="Email">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border  rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-500 focus:ring focus:ring-blue-500" id="password" type="password" v-model="password" placeholder="******************">
      <p class="text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-center">
      <button class="bg-blue-800 hover:bg-blue-900 transition-colors duration-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button" @click="createUser">
        Sign Up
      </button>
     
    </div>
  </form>
  <p>{{ user.email }}</p>
 

</div>
 </div>
  </template>

  <style scoped>
    .scaled {
       opacity: 0;
       animation: scale-up 0.8s ease-in-out forwards ;
   }

   @keyframes scale-up {
       from {
           opacity: 0;

           transform: scale(0);
       }

       to {
           opacity: 1;
           transform: scale(1);
       }
   }
  </style>
  