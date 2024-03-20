<script>
import { GoogleAuthProvider } from 'firebase/auth'
export const googleAuthProvider = new GoogleAuthProvider()
</script>


<script setup>
import {
  getRedirectResult,
  signInWithRedirect,
  signOut,
} from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { ref,onMounted } from 'vue'
import {
  signInWithPopup,
 
} from 'firebase/auth'

const auth = useFirebaseAuth() // only exists on client side

// display errors if any
const error = ref(null)
function signinRedirect() {
  signInWithRedirect(auth, GoogleAuthProvider).catch((reason) => {
    console.error('Failed signinRedirect', reason)
    error.value = reason
  })
}

function signinPopup() {
  error.value = null
  signInWithPopup(auth, googleAuthProvider).catch((reason) => {
    console.error('Failed sign', reason)
    error.value = reason
  })
}
// only on client side
onMounted(() => {
  getRedirectResult(auth).catch((reason) => {
    console.error('Failed redirect result', reason)
    error.value = reason
  })
})
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-slate-200">
  <div class="w-full max-w-xs">
    <p class="text-xl text-blue-950 font-semibold mb-3">Sign In</p>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="border-b-2 p-2 pb-4 mb-2">
      <button @click="signinPopup" class="p-2 shadow appearance-none transition-colors duration-500 rounded w-full flex items-center justify-center  bg-blue-900 hover:bg-blue-950 text-white "> 
        <svg viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000" class="w-12 p-2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g></svg>
        Sign In with Google</button>
    </div>
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
   
    </div>
    <div class="flex items-center justify-center">
      <button class="bg-blue-800 hover:bg-blue-900 transition-colors duration-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button" @click="createUser">
        Sign In
      </button>
     
    </div>
  </form>
</div>
 </div>
   
  
</template>