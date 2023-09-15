    <template>
            <h2 class=" bg-gray-100 text-2xl font-bold text-center">Create your own team</h2>
        <div class="bg-gray-100 h-screen flex justify-center items-center">

        <form  method="post" enctype="multipart/form-data" class="form responsive-width-100" @submit.prevent="submitForm">
        <label for="teamName" class="block font-semibold mb-2">Team Name:</label>
        <input type="text" id="teamName" name="teamName" required maxlength="20" class="w-64 border rounded-md p-2 mb-4"><br>



        <label for="gameType" class="block font-semibold mb-2">Game Type:</label>
        <select id="gameType" name="gameType" class="w-64 border rounded-md p-2 mb-4">
        <option value="lol">League of Legends</option>
        <option value="dota2">Dota 2</option>
        <option value="csgo">Counter-Strike: Global Offensive</option>
        <option value="valorant">Valorant</option>
        <option value="overwatch">Overwatch</option>
        <option value="cod">Call of Duty</option>
        <option value="FO4">FIFA ONLINE</option>
        <option value="AOV">Arena Of Valor</option>
        </select>

        <h4 class="text-lg font-semibold mb-2">Contact Information:</h4>
        <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
            <label for="contactType" class="block font-semibold">Type of Contact:</label>
            <select id="contactType" name="contactType" class="w-full border rounded-md p-2">
            <option value="email" data-icon="./icons/email.png">Email</option>
            <option value="phone" data-icon="./icons/phone.png">Phone Number</option>
            <option value="facebook" data-icon="./icons/facebook.png">Facebook Handle</option>
            <option value="twitter" data-icon="./icons/twitter.png">Twitter Handle</option>
            <option value="discord" data-icon="./icons/discord.png">Discord Handle</option>
            </select>
        </div>
        <div>
            <label for="contactDetail" class="block font-semibold">Contact Detail:</label>
            <input type="text" id="contactDetail" name="contactDetail" class="w-64 border rounded-md p-2">
        </div>
        </div>

        <label for="location" class="block font-semibold mb-2">Country:</label>
        <select id="location" name="location" class="w-64 border rounded-md p-2 mb-4">
        <option value="VN">Viet Nam</option>
        <option value="US">United States</option>
        <option value="CN">China</option>
        <option value="KR">Korea</option>
        <!-- Add more options here -->
        </select>
        <button
            type="submit"
            value="createTeam"
            class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-4 focus:outline-none focus:bg-blue-600"
            >
            Create
            </button>
    </form>
 
        <div class="flex space-x-4">

        </div>
    </div>




    </template>

<script setup>
import { useTeamStore } from '../server/RestAPI/index';

const teamStore = useTeamStore();

function submitForm(event) {
  event.preventDefault();

  const contactType = document.getElementById('contactType').value;
  const contactDetail = document.getElementById('contactDetail').value;

  if (contactType === 'email' && !isValidEmail(contactDetail)) {
    alert('Invalid email address. Please enter a valid email address.');
    return;
  }

  const formData = new FormData(event.target);

  const jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  teamStore.createTeam(jsonData); // Call the store's action to create a team
}

function isValidEmail(email) {
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return emailRegex.test(email);
}
</script>


<style lang="scss" scoped>
</style>