<template>
    <Head>
        <Title>{{ tournament.title }}</Title>
    </Head>
    <div class="tour-detail">
      <div class="image-container">
        <img src="https://cdn.oneesports.vn/cdn-data/sites/4/2023/02/FO4-Nga-dong-cua-thumb.jpg" alt="Tournament Image" class="tournament-image1">
      </div>
      <h1>{{ tournament.title }}</h1>
      <h1>{{ tournament.gameType }}</h1>
      <h1>{{ tournament.type }}</h1>
      <h1>{{ tournament.host }}</h1>
      <h1>{{ tournament.place }}</h1>

      <h1>{{ tournament.award }}</h1>

      <h1>{{ tournament.startDate }}</h1>

      <h1>{{ tournament.endDate }}</h1>
      <h1>{{ tournament.totalTeam }}</h1>
      <h1>{{ tournament.tournamentFormat }}</h1>
      <h1>{{ tournament.registrationFee }}</h1>
<div class="tournament">
<button @click="taskTour.deleteTournament(id)">Delete</button>
</div>
    </div>
  </template>
  
  <script setup>
  import { useTournamentStore } from '~/store/useTournamentStore';
import { useRoute } from 'vue-router';
import { useFetch } from 'nuxt/app';


const route = useRoute();


const uri = 'http://localhost:3000/tournaments/' + route.params.id;

// Fetch the tournament details
const { data: tournament } = await useFetch(uri);

// export default {
//     props: ['tournament'],
//     setup() {
//       const taskTour = useTournamentStore()

//       return { taskTour }
//     }
//   }
  </script>

  <script setup>
</script>

<style>
.tour-detail{
  padding-left: 100px;
}
.image-container {
  position: relative;
  width: 100%;
  height: 400px; 
}

.tournament-image1 {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
  