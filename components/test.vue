<template>
    <div>
        <div class="bg-black">
            <form @submit.prevent="submitForm" id="tournamentForm" action="" method="POST" enctype="multipart/form-data"
                class="form max-w-screen-md mx-auto p-4 bg-white shadow-lg rounded-md">
                <div v-for="step in steps" :key="step.id" class="step" :id="step.id">
                   

                    <!-- Input Fields -->
                    <div v-if="step.id === 'step1'">
                        <label for="type" class="block">Type:</label>
                        <select v-model="newTournamentData.type" required class="border rounded-md p-2 w-full">
                            <option value="">Select Type</option>
                            <option value="free">Free</option>
                            <option value="payable">Payable</option>
                        </select>
                    </div>
                    <div v-else-if="step.id === 'step2'">
                        <label for="banner" class="block">Banner Image Link (Max size: 5MB):</label>
                        <input v-model="newTournamentData.image" type="url" name="image-link" required maxlength="500"
                            class="border rounded-md p-2 w-full" />

                        <label for="game_type" class="block mt-4">Game Type:</label>
                        <select v-model="newTournamentData.gameType" style="margin-bottom: 30px;"
                            class="border rounded-md p-2 w-full">
                            <option v-for="game in games" :key="game">{{ game }}</option>
                        </select>

                        <label for="name" class="block">Name:</label>
                        <input v-model="newTournamentData.title" type="text" name="name" required maxlength="50"
                            class="border rounded-md p-2 w-full" />

                        <label for="start_date" class="block mt-4">Start Date:</label>
                        <input v-model="startDate" type="datetime-local" name="start_date" required
                            class="border rounded-md p-2 w-full" />

                        <label for="end_date" class="block mt-4">End Date:</label>
                        <input v-model="endDate" type="datetime-local" name="end_date" required
                            class="border rounded-md p-2 w-full" />
                        <div class="mt-2 text-red-500" v-if="dateValidationError">{{ dateValidationError }}</div>
                    </div>
                    <div v-else-if="step.id === 'step3'">
                        <label for="tournament_format" class="block">Tournament Format:</label>
                        <select v-model="newTournamentData.tournamentFormat" required class="border rounded-md p-2 w-full">
                            <option value="Single Elimination">Single Elimination</option>
                            <option value="Double Elimination">Double Elimination</option>
                        </select>

                        <label for="total_team" class="block mt-4">Total Team:</label>
                        <select v-model="newTournamentData.totalTeam" required class="border rounded-md p-2 w-full">
                            <option value="4">4</option>
                            <option value="8">8</option>
                            <option value="16">16</option>
                            <option value="32">32</option>
                            <!-- Add more options here -->
                        </select>
                    </div>
                    <div v-else-if="step.id === 'step4'">
                        <label for="prize" class="block">Total Price</label>
                        <input v-model="newTournamentData.award" type="text" id="prize_1" name="prize_1" required
                            maxlength="50" class="border rounded-md p-2 w-full" />
                    </div>
                    <div v-else-if="step.id === 'step5'">
                        <label for="description" class="block">Description:</label>
                        <textarea v-model="newTournamentData.description" required maxlength="500"
                            class="border rounded-md p-2 w-full"></textarea>
                    </div>
                    <div v-else-if="step.id === 'step6'">
                        <label for="checkin_time" class="block">Check-in Time:</label>
                        <input v-model="newTournamentData.checkinTime" type="text" name="checkin_time" required
                            maxlength="50" class="border rounded-md p-2 w-full" />
                    </div>

                    <!-- Button -->
                    <div class="mt-4" v-if="step.id !== 'step6'">
                        <button class="submit-button" type="button" @click="nextStep">Next</button>
                    </div>
                    <div class="mt-4" v-else>
                        <button class="submit-button" type="submit">Add Tournament</button>
                    </div>
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