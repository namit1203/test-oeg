<template>
    <div class="bg-gray-100 h-screen flex justify-center items-center">


<form class="ajax-form mt-4" @submit.prevent="submitForm">

    <label for="username">
        <i class="fas fa-user"></i>
    </label>
    <div class="relative">
        <label for="username" class="block text-gray-600">Username</label>
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



        <label for="password" class="block text-gray-600 mt-3">Confirm Password</label>
        <div class="relative">
        <i class="fas fa-lock absolute top-3 left-3 text-gray-400"></i>
        <input
            type="password"
            name="cpassword"
            placeholder="Password"
            id="password"
            required
            v-model="password"
            class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        </div>

        <label for="email" class="block text-gray-600 mt-3">EMail</label>
        <div class="relative">
        <i class="fas fa-lock absolute top-3 left-3 text-gray-400"></i>
        <input
            type="email"
            name="email"
            placeholder="email"
            id="passemailword"
            required
            v-model="email"
            class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        </div>
        <div v-if="successMsg" class="text-green-500 ">{{ successMsg }}</div>
        <button
      type="submit"
      value="Register"
      class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-4 focus:outline-none focus:bg-blue-600"
    >
      Login
    </button>
    </form>
</div>
</template>

<script setup>


const username = ref('');
const password = ref('');
const email = ref('');
const successMsg = ref('');
const userData = {
username: username.value,
password: password.value,
};


</script>

<style lang="scss" scoped>
/* Your styles here */
</style>