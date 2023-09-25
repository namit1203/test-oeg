<template>
  <div>
    <div class="bg-black">
      <form @submit.prevent="submitForm" id="tournamentForm" action="" method="POST" enctype="multipart/form-data"
        class="form max-w-screen-md mx-auto p-4 bg-white shadow-lg rounded-md">
        <!-- Step 1: Select Tournament Type -->
        <div class="step" id="step1">
          <h2 class="text-xl font-semibold mb-4">Step 1: Select Tournament Type</h2>
          <label for="type" class="block">Type:</label>
          <select v-model="newTournamentData.type" required class="border rounded-md p-2 w-full">
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
          <input v-model="newTournamentData.image" type="url" name="image-link" required maxlength="500" class="border rounded-md p-2 w-full" />
          <label  for="game_type" class="block mt-4">Game Type:</label>
          <select v-model="newTournamentData.gameType" name="game_type" style="margin-bottom: 30px;" class="border rounded-md p-2 w-full">
            <option value="League Of Legends">League Of Legends</option>
            <option value="Dota 2">Dota 2</option>
            <option value=">Counter-Strike: Global Offensive">Counter-Strike: Global Offensive</option>
            <option value="Valorant">Valorant</option>
            <option value="Overwatch">Overwatch</option>
            <option value="cod">Call of Duty</option>
            <option value="FO4">FIFA ONLINE</option>
            <option value="AOV">Arena Of Valor</option>
            <option value="AOE">AOE</option>
            <option value="LQ">Liên Quân Mobile</option>
            <option value="LOLMB">League of Legends: Wild Rift</option>
          </select>
          <label for="name" class="block">Name:</label>
          <input v-model="newTournamentData.title" type="text" name="name" required maxlength="50" class="border rounded-md p-2 w-full" />
          <label for="start_date" class="block mt-4">Start Date:</label>
          <input v-model="newTournamentData.startDate" type="datetime-local" name="start_date" required class="border rounded-md p-2 w-full"/>
          <label for="end_date" class="block mt-4">End Date:</label>
          <input v-model="newTournamentData.endDate" type="datetime-local" name="end_date" required class="border rounded-md p-2 w-full"/>
          <div class="mt-2 text-red-500" v-if="dateValidationError">{{ dateValidationError }}</div>
          <div class="mt-4">

          </div>
        </div>

        <!-- Step 3: Bracket Setting -->
        <div class="step" id="step3">
          <h2 class="text-xl font-semibold mb-4">Step 3: Bracket Setting</h2>
          <label for="tournament_format" class="block">Tournament Format:</label>
          <select v-model="newTournamentData.tournamentFormat" name="tournament_format" required class="border rounded-md p-2 w-full">
            <option value="Single Elimination">Single Elimination</option>
            <option value="Double Elimination">Double Elimination</option>
          </select>
          <label for="total_team" class="block mt-4">Total Team:</label>
          <select v-model="newTournamentData.totalTeam" name="total_team" required class="border rounded-md p-2 w-full">
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
          <input v-model="newTournamentData.award" type="text" id="prize_1" name="prize_1" required maxlength="50" class="border rounded-md p-2 w-full" />

          <div class="mt-4">

          </div>
        </div>

        <!-- Step 5: Tournament Details -->
        <div class="step" id="step5">
          <h2 class="text-xl font-semibold mb-4">Step 5: Tournament Details</h2>
          <label for="description" class="block">Description:</label>
          <textarea v-model="newTournamentData.description" name="description" required maxlength="500" class="border rounded-md p-2 w-full"></textarea>
          <div class="mt-4">

          </div>
        </div>

        <!-- Step 6: Advanced Options -->
        <div class="step" id="step6">
          <h2 class="text-xl font-semibold mb-4">Step 6: Advanced Options</h2>
          <label for="checkin_time" class="block">Check-in Time:</label>
          <input v-model="newTournamentData.tournamentFormat" type="text" name="checkin_time" required maxlength="50" class="border rounded-md p-2 w-full" />
          <button class="submit-button" type="submit">Add Tournament</button>
          
        </div>
      </form>
    </div>
  </div>
</template>
  



<script>
import { ref } from 'vue';
import { useTournamentStore } from '~/store/useTournamentStore';

export default {
  setup() {
        const tournamentStore = useTournamentStore();
        const newTournamentData = ref({
            type: '',
            image: '',
            gameType: '',
            title: '',
            startDate: '',
            endDate: '',
            tournamentFormat: '',
            totalTeam: '',
            award: '',
            description: '',
            checkinTime: ''
        });

        const submitForm = async () => {
            try {
                console.log(newTournamentData.value);
                await tournamentStore.addTournament(newTournamentData.value);
                newTournamentData.value = {
                    type: '',
                    image: '',
                    gameType: '',
                    title: '',
                    startDate: '',
                    endDate: '',
                    tournamentFormat: '',
                    totalTeam: '',
                    award: '',
                    description: '',
                    checkinTime: ''
                };

                console.log('Tournament added successfully!');
            } catch (error) {
                console.error('Error adding tournament:', error);
            }
        };

        return { newTournamentData, submitForm };
    },
};
</script>

<style>

.submit-button {
  appearance: none;
  background-color: #FAFBFC;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
}

.submit-button:hover {
  background-color: #F3F4F6;
  text-decoration: none;
  transition-duration: 0.1s;
}

.submit-button:disabled {
  background-color: #FAFBFC;
  border-color: rgba(27, 31, 35, 0.15);
  color: #959DA5;
  cursor: default;
}

.submit-button:active {
  background-color: #EDEFF2;
  box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
  transition: none 0s;
}

.submit-button:focus {
  outline: 1px transparent;
}

.submit-button:before {
  display: none;
}

.submit-button:-webkit-details-marker {
  display: none;
}
</style>
