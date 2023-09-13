<script>

</script>
<template>
    <div class="bg-black">
    <form
      id="tournamentForm"
      action=""
      method="POST"
      enctype="multipart/form-data"
      class="form max-w-screen-md mx-auto p-4 bg-white shadow-lg rounded-md"
      @submit.prevent="submitForm"
    >
      <!-- Step 1: Select Tournament Type -->
      <div class="step" id="step1">
        <h2 class="text-xl font-semibold mb-4">Step 1: Select Tournament Type</h2>
        <label for="type" class="block">Type:</label>
        <select
          name="type"
          required
          class="border rounded-md p-2 w-full"
        >
          <option value="">Select Type</option>
          <option value="free">Free</option>
          <option value="payable">Payable</option>
        </select>
        <div class="mt-4">
         
        </div>
      </div>
  
      <!-- Step 2: General Information -->
      <div class="step" id="step2">
        <h2 class="text-xl font-semibold mb-4">Step 2: General Information</h2>
        <label for="banner" class="block">Banner Image Link (Max size: 5MB):</label>
        <input
          type="url"
          name="image-link"
          required
          maxlength="500"
          class="border rounded-md p-2 w-full"
        />
        <label for="game_type" class="block mt-4">Game Type:</label>
        <select
          name="game_type"
          style="margin-bottom: 30px;"
          class="border rounded-md p-2 w-full"
        >
          <option value="League Of Legends">League Of Legends</option>
          <!-- Add more options here -->
        </select>
        <label for="name" class="block">Name:</label>
        <input
          type="text"
          name="name"
          required
          maxlength="50"
          class="border rounded-md p-2 w-full"
        />
        <label for="start_date" class="block mt-4">Start Date:</label>
        <input
          type="datetime-local"
          name="start_date"
          required
          class="border rounded-md p-2 w-full"
        />
        <label for="end_date" class="block mt-4">End Date:</label>
        <input
          type="datetime-local"
          name="end_date"
          required
          class="border rounded-md p-2 w-full"
        />
        <div class="mt-4">
     
        </div>
      </div>
  
      <!-- Step 3: Bracket Setting -->
      <div class="step" id="step3">
        <h2 class="text-xl font-semibold mb-4">Step 3: Bracket Setting</h2>
        <label for="tournament_format" class="block">Tournament Format:</label>
        <select
          name="tournament_format"
          required
          class="border rounded-md p-2 w-full"
        >
          <option value="single_elimination">Single Elimination</option>
          <option value="double_elimination">Double Elimination</option>
        </select>
        <label for="total_team" class="block mt-4">Total Team:</label>
        <select
          name="total_team"
          required
          class="border rounded-md p-2 w-full"
        >
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="16">16</option>
          <!-- Add more options here -->
        </select>
        <div class="mt-4">
       
      
        </div>
      </div>
  
      <!-- Step 4: Prize Details -->
      <div class="step" id="step4">
        <h2 class="text-xl font-semibold mb-4">Step 4: Prize Details</h2>
        <label for="prize" class="block">Total Price</label>
        <input
          type="text"
          id="prize_1"
          name="prize_1"
          required
          maxlength="50"
          class="border rounded-md p-2 w-full"
        />
      
        <div class="mt-4">
    
        </div>
      </div>
  
      <!-- Step 5: Tournament Details -->
        <div class="step" id="step5">
            <h2 class="text-xl font-semibold mb-4">Step 5: Tournament Details</h2>
            <label for="description" class="block">Description:</label>
            <textarea
            name="description"
            required
            maxlength="500"
            class="border rounded-md p-2 w-full"
            ></textarea>
            <div class="mt-4">
        
            </div>
        </div>
  
      <!-- Step 6: Advanced Options -->
      <div class="step" id="step6">
        <h2 class="text-xl font-semibold mb-4">Step 6: Advanced Options</h2>
        <label for="checkin_time" class="block">Check-in Time:</label>
        <input
          type="text"
          name="checkin_time"
          required
          maxlength="50"
          class="border rounded-md p-2 w-full"
        />
        <div class="mt-4">
          <input
            type="submit"
            value="Submit"
            class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          />
        </div>
      </div>
    </form>
</div>
  </template>
  
  <script setup>
  
function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission


  // Get the form data
  const formData = new FormData(event.target);

  // Convert form data to JSON
  const jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });
console.log(jsonData)
  // Send a POST request to the server with JSON data
  fetch('http://localhost:3001/Tournament', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Set the content type to JSON
    },
    body: JSON.stringify(jsonData), // Convert JSON data to a string
  })
    .then(response => {
      if (response.ok) {
        // Handle success
      } else {
        // Handle error
      }
    })
    .catch(error => {
      // Handle network error or other errors
    });
}
</script>
  
  <style lang="scss" scoped>
  /* Add custom styles if needed */
  </style>
  