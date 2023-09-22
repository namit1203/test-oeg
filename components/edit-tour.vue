    <template>
        <div>
        <h1>Edit Tournament</h1>
        <form @submit.prevent="updateTournament">
            <label for="title">Title:</label>
            <input v-model="updatedTournament.title" id="title" class="border rounded-md p-2 w-full" />
    
            <label for="gameType">Game Type:</label>
            <input v-model="updatedTournament.gameType" id="gameType" class="border rounded-md p-2 w-full"/>
    
            <label for="host">Host:</label>
            <input v-model="updatedTournament.host" id="host" class="border rounded-md p-2 w-full"/>
    
            <label for="place">Place:</label>
            <input v-model="updatedTournament.place" id="place" class="border rounded-md p-2 w-full"/>
    
            <label for="award">Award:</label>
            <input v-model="updatedTournament.award" id="award" class="border rounded-md p-2 w-full"/>
    
            <label for="startDate">Start Date:</label>
            <input type="datetime-local" v-model="updatedTournament.startDate" class="border rounded-md p-2 w-full" id="startDate" />
    
            <label for="endDate">End Date:</label>
            <input type="datetime-local" v-model="updatedTournament.endDate" class="border rounded-md p-2 w-full" id="endDate" />
    
            <label for="totalTeam">Total Teams:</label>
            <input type="number" v-model="updatedTournament.totalTeam"  id="totalTeam" class="border rounded-md p-2 w-full"/>
    
            <label for="registrationFee">Registration Fee:</label>
            <input v-model="updatedTournament.registrationFee" id="registrationFee" class="border rounded-md p-2 w-full" />
    
            <label for="tournamentFormat">Tournament Format:</label>
            <input v-model="updatedTournament.tournamentFormat" id="tournamentFormat" class="border rounded-md p-2 w-full"/>
    

    
            <button type="submit">Update Tournament</button>
        </form>
        </div>
    </template>

    <script>
    import { ref } from 'vue';
    import { useTournamentStore } from '~/store/useTournamentStore';
    


    export default {
        setup() {
        const taskTour = useTournamentStore();
    
        // define a ref to store the updated tournament data
        const updatedTournament = ref({
            id: 1, 
            title: "",
            gameType: "",
            host: "",
            place: "",
            award: "",
            startDate: "",
            endDate: "",
            totalTeam: 0,
            registrationFee: "",
            tournamentFormat: "",
        });
    
        const updateTournament = async () => {
            try {
            // call the updateTournament action to update the tournament
            await taskTour.updateTournament(updatedTournament.value);
  
            } catch (error) {
            console.error('Error updating tournament:', error);
            }
        };
    
        return {
            updatedTournament,
            updateTournament,
        };
        },
    };
    </script>

<style scoped>

div {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="date"] {
 
}

button[type="submit"] {
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
