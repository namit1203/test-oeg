<template>
    <div>
      <h1>Tournament Management</h1>
      <table class="table-auto max-w-screen-md max-w-screen-md mx-auto p-4 bg-white shadow-lg rounded-md">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th @click="sortBy('name')" class="cursor-pointer">Name</th>
            <th @click="sortBy('game_type')" class="cursor-pointer">Game Type</th>
            <th @click="sortBy('start_date')" class="cursor-pointer">Start Date</th>
            <th @click="sortBy('end_date')" class="cursor-pointer">End Date</th>
            <th @click="sortBy('total_team')" class="cursor-pointer">Total Teams</th>
            <th @click="sortBy('prize_1')" class="cursor-pointer">Prize</th>
            
          </tr>
        </thead>
        <tbody class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-xs text-white ">
          <tr v-for="tournament in sortedTournaments" :key="tournament.id">
            <td>{{ tournament.name }}</td>
            <td>{{ tournament.game_type }}</td>
            <td>{{ tournament.start_date }}</td>
            <td>{{ tournament.end_date }}</td>
            <td>{{ tournament.total_team }}</td>
            <td>{{ tournament.prize_1 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const tournaments = ref([]);
  const sortKey = ref('');
  const sortOrder = ref(1);
  
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/tournament', {
        method: 'GET',
      });
      const data = await response.json();
      tournaments.value = data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const sortBy = (key) => {
    if (sortKey.value === key) {
      sortOrder.value *= -1;
    } else {
      sortKey.value = key;
      sortOrder.value = 1;
    }
  };
  
  const sortedTournaments = computed(() => {
    return tournaments.value.slice().sort((a, b) => {
      const modifier = sortOrder.value === 1 ? 1 : -1;
      return modifier * (a[sortKey.value] - b[sortKey.value]);
    });
  });
  
  onMounted(() => {
    fetchData();
  });
  </script>
  
  <style scoped>
  
  </style>
  