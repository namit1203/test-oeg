<template>
    <div class="bg-gray-100 h-screen flex justify-center items-center">
      <div class="flex space-x-4"></div>
  
      <form class="ajax-form mt-4" @submit.prevent="submitForm">
        <label for="username" class="block text-gray-600">Username</label>
        <div class="relative">
          <i class="fas fa-user absolute top-3 left-3 text-gray-400"></i>
          <input
            type="text"
            name="username"
            placeholder="Username"
            id="username"
            required
            v-model="username"
            class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
  
        <label for="password" class="block text-gray-600 mt-3">Password</label>
        <div class="relative">
          <i class="fas fa-lock absolute top-3 left-3 text-gray-400"></i>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            required
            v-model="password"
            class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
  
        <label id="rememberme" class="block mt-3">
          <input type="checkbox" name="rememberme" class="mr-2" />Remember me
        </label>
        <a href="/forgotpassword" class="text-blue-500 text-sm mt-1">Forgot Password?</a>
  
        <input type="hidden" name="token" value="{{ token }}" />
  
        <div class="text-red-500 mt-2">{{ msg }}</div>
        <div v-if="successMsg" class="text-green-500 ">{{ successMsg }}</div>
        <button
          type="submit"
          value="Login"
          class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-4 focus:outline-none focus:bg-blue-600"
        >
          Login
        </button>
      </form>
  
      <!-- Notification for successful login -->
   
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const router = useRouter();
  const username = ref('');
  const password = ref('');
  const msg = ref('');
  const successMsg = ref('');
  
  const submitForm = () => {
    fetch('http://localhost:3001/users', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        const user = data.find(
          (user) => user.username === username.value && user.password === password.value
        );
  
        if (user) {
          // Assuming you have a named route for the homepage called 'home'
          router.push({ path: '/' })
          successMsg.value = 'Login successful!'; 
          msg.value = '';
        } else {
          // Invalid username or password
          msg.value = 'Invalid username or password';
          successMsg.value = '';
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        msg.value = 'An error occurred. Please try again later.';
        successMsg.value = ''; 
      });
  };
  </script>

  
  <style scoped>
  /* Add any custom CSS styles here */
  </style>
  