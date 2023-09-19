<template>
  <div>
    <div class="bg-black">
      <form @submit.prevent="submitForm" id="tournamentForm" action="" method="POST" enctype="multipart/form-data"
        class="form max-w-screen-md mx-auto p-4 bg-white shadow-lg rounded-md">
        <!-- Step 1: Select Tournament Type -->
        <div class="step" id="step1">
          <h2 class="text-xl font-semibold mb-4">Step 1: Select Tournament Type</h2>
          <label for="type" class="block">Type:</label>
          <select name="type" required class="border rounded-md p-2 w-full">
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
          <input type="url" name="image-link" required maxlength="500" class="border rounded-md p-2 w-full" />
          <label for="game_type" class="block mt-4">Game Type:</label>
          <select name="game_type" style="margin-bottom: 30px;" class="border rounded-md p-2 w-full">
            <option value="League Of Legends">League Of Legends</option>
            <option value="Dota 2">Dota 2</option>
            <option value=">Counter-Strike: Global Offensive">Counter-Strike: Global Offensive</option>
            <option value="Valorant">Valorant</option>
            <option value="Overwatch">Overwatch</option>
            <option value="cod">Call of Duty</option>
            <option value="FO4">FIFA ONLINE</option>
            <option value="AOV">Arena Of Valor</option>
            <option value="AOE">AOE</option>
          </select>
          <label for="name" class="block">Name:</label>
          <input type="text" name="name" required maxlength="50" class="border rounded-md p-2 w-full" />
          <label for="start_date" class="block mt-4">Start Date:</label>
          <input type="datetime-local" name="start_date" required class="border rounded-md p-2 w-full" v-model="startDate" />
          <label for="end_date" class="block mt-4">End Date:</label>
          <input type="datetime-local" name="end_date" required class="border rounded-md p-2 w-full" v-model="endDate" />
          <div class="mt-2 text-red-500" v-if="dateValidationError">{{ dateValidationError }}</div>
          <div class="mt-4">

          </div>
        </div>

        <!-- Step 3: Bracket Setting -->
        <div class="step" id="step3">
          <h2 class="text-xl font-semibold mb-4">Step 3: Bracket Setting</h2>
          <label for="tournament_format" class="block">Tournament Format:</label>
          <select name="tournament_format" required class="border rounded-md p-2 w-full">
            <option value="Single Elimination">Single Elimination</option>
            <option value="Double Elimination">Double Elimination</option>
          </select>
          <label for="total_team" class="block mt-4">Total Team:</label>
          <select name="total_team" required class="border rounded-md p-2 w-full">
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>

            <!-- Add more options here -->
          </select>
          <div class="mt-4">


          </div>
        </div>

        <!-- Step 4: Prize Details -->
        <div class="step" id="step4">
          <h2 class="text-xl font-semibold mb-4">Step 4: Prize Details</h2>
          <label for="prize" class="block">Total Price</label>
          <input type="text" id="prize_1" name="prize_1" required maxlength="50" class="border rounded-md p-2 w-full" />

          <div class="mt-4">

          </div>
        </div>

        <!-- Step 5: Tournament Details -->
        <div class="step" id="step5">
          <h2 class="text-xl font-semibold mb-4">Step 5: Tournament Details</h2>
          <label for="description" class="block">Description:</label>
          <textarea name="description" required maxlength="500" class="border rounded-md p-2 w-full"></textarea>
          <div class="mt-4">

          </div>
        </div>

        <!-- Step 6: Advanced Options -->
        <div class="step" id="step6">
          <h2 class="text-xl font-semibold mb-4">Step 6: Advanced Options</h2>
          <label for="checkin_time" class="block">Check-in Time:</label>
          <input type="text" name="checkin_time" required maxlength="50" class="border rounded-md p-2 w-full" />
          <button type="submit">Add Tournament</button>
        </div>
      </form>
    </div>
  </div>
</template>
  


<script>
import { ref } from 'vue';
import { useTournamentStore } from '~/store/useTournamentStore';
const startDate = ref('');
const endDate = ref('');
const dateValidationError = ref('');

export default {
  setup() {
    const tournamentStore = useTournamentStore();

    const submitForm = async () => {
      try {
        // Create an object with tournament data based on the form fields
        const startDateTime = new Date(startDate.value);
        const endDateTime = new Date(endDate.value);
        // Check if the start date is greater than or equal to the end date
        if (startDateTime >= endDateTime) {
          dateValidationError.value = 'Start date must be before end date.';
          return; // Prevent form submission if validation fails
        }

        const newTournamentData = {
          type: document.querySelector('select[name="type"]').value,
          image: document.querySelector('input[name="image-link"]').value,
          gameType: document.querySelector('select[name="game_type"]').value,
          title: document.querySelector('input[name="name"]').value,
            startDate: startDateTime.toISOString(), // Convert back to ISO string
          endDate: endDateTime.toISOString(),
          tournamentFormat: document.querySelector('select[name="tournament_format"]').value,
          totalTeam: document.querySelector('select[name="total_team"]').value,
          award: document.querySelector('input[name="prize_1"]').value,
          description: document.querySelector('textarea[name="description"]').value,
        };

        // Call the addTournament function from the store
        const addedTournament = await tournamentStore.addTournament(newTournamentData);

        // Reset the form fields after successfully adding the tournament
        document.querySelector('select[name="type"]').value = '';
        // Reset other form fields similarly

        console.log('Added tournament:', addedTournament);
      } catch (error) {
        console.error('Error adding tournament:', error);
      }
    };

    return { submitForm, startDate, endDate, dateValidationError };
  },
};
</script>

  