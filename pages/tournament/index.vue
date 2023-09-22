<template>
  <div>
    <div>
        <img alt="" class=" object-cover w-full h-50" src="https://images2.alphacoders.com/570/570396.jpg">
    </div>
    <div class="slider-item__intro">
        <div class="slider-item__intro__inner container text-left xs:ml-2 sm:ml-8">
            <h3 class="uppercase flex flex-col sm:max-w-[70%]">
                <span class="uppercase">Nhanh lên nào!</span>
                <strong class="uppercase">Các giải đấu đang sắp đầy lượt đăng ký.</strong>
            </h3>
            <p class="text-neutral-40 font-thin xs:my-4 sm:max-w-[60%] sm:my-8"
                style="font-family: Inter; font-size: 20px;">
                Cùng tham gia không giới hạn các giải đấu tại UGE để cạnh tranh và nhận phần thưởng hấp dẫn!
            </p>
        </div>
    </div>
</div>

<div class="upcoming">
<strong class="uppercase">Upcoming Tournament</strong>
</div>


<div>
  <div class="sort-tour">
    <label for="sortBy"></label>
    <select v-model="selectedGame" id="sortBy" @change="sortTournaments">
      <option value="All Games">All Games</option>
      <option v-for="game in uniqueGames" :value="game">{{ game }}</option>
    </select>
  </div>
  
  <div v-for="tournament in sortTournaments" :key="tournament.id">
    
  </div>
</div>




  <div>
    <div class="tournament-grid">
      <div class="grid grid-cols-2 gap-5">
        <div v-for="tournament in arr" :key="tournament.id">
          <NuxtLink :to="`/tournament/${tournament.id}`" class="tournament-link">
            <div class="tournament-card">
              <img :src="tournament.image" alt="Tournament Image" class="tournament-image" />
              <div class="tournament-overlay">
                <h2 class="tournament-title">{{ tournament.title }}</h2>
                <p class="tournament-info">{{ tournament.host }}</p>
                <p class="tournament-info">{{ tournament.place }}</p>
                <p class="tournament-info">{{ tournament.award }}</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="container-button">
      <button @click="handleClick" class="show-more-button">
        <span></span>
        {{ loading ? 'Loading...' : 'Show More' }}
      </button>
    </div>
 
    <div class="loading-container" v-if="loading">
      <div class="loading-indicator">
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useTournamentStore } from '~/store/useTournamentStore';

const { data: tournaments } = await useFetch('http://localhost:3000/tournaments');
console.log(tournaments);

const itemShow = ref(10);
const arr = computed(() => tournaments.value.slice(0, itemShow.value));
const loading = ref(false);

const selectedGame = ref('All Games');

const uniqueGames = computed(() => {
  const uniqueGameTypes = [];
  tournaments.value.forEach((tournament) => {
    if (!uniqueGameTypes.includes(tournament.gameType) ) {
      uniqueGameTypes.push(tournament.gameType);
    }
  });
  return uniqueGameTypes;
});
  

const sortTournaments = () => {
  if (selectedGame.value === 'All Games') {
    itemShow.value = 10;
  } else {
    // filter and sort tournaments by selected game type
    const sortedTournaments = tournaments.value
      .filter((tournament) => tournament.gameType === selectedGame.value)
      .slice(0, 10); 

    tournaments.value = sortedTournaments;
  }
};

const handleClick = () => {
  loading.value = true; // set loading to true before the timeout
  setTimeout(() => {
    itemShow.value += 6;
    loading.value = false; // set loading to false after the timeout
  }, 2000);
};

const taskTour = useTournamentStore()



</script>

<style>
.sort-tour{
  margin-top: 20px;
  margin-left: 200px;
  max-width: 170px;
  max-height: 32px;
  border-radius: 0.375rem;
  background-color: white; 
  border: 1px solid #655c5c; 
  padding: 4px; 

}
.upcoming{
  font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 36px;
    margin: 20px 0 0 200px;
    font-weight: bold;
    background: linear-gradient(0deg, #ff006b 0%, #885fff 101.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

}
.uppercase {
  text-transform: uppercase;
}

b, strong {
  font-weight: bolder;
}
.slider-item__intro {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  color: white;
  text-align: left;
  padding: 2rem;
}


.slider-item__intro h3 {
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;

}


.slider-item__intro strong {
  font-weight: bold;
  background: linear-gradient(96.46deg, #ff006b 0%, #885fff 101.5%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}


.slider-item__intro p {
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 300;
  margin-top: 20px;
  max-width: 60%;

}

@media (max-width: 640px) {
  .slider-item__intro {
      padding: 1rem;
  }

  .slider-item__intro h3 {
      font-size: 20px;
  }

  .slider-item__intro p {
      max-width: 70%;
  }
}

.tournament-grid{
  padding: 20px 200px 0px 200px;
}
.loading-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 75.8px;
  width: 100%;
}

.loading-indicator:after {
  content: '';
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid #fff;
  border-top-color: #076fe5;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.container-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.show-more-button {
  margin: 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background-color 0.3s ease;
  align-items: center;
}

.show-more-button:hover {
  background-color: #0056b3;
}

.tournament-card {
  position: relative;
  overflow: hidden;
}

.tournament-image {
  width: 900px;
  height: 400px;
  border-radius: 10px;
  object-fit: cover;
}

.tournament-overlay {
  position: absolute;
  ;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Adjust the background color and opacity */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tournament-card:hover .tournament-overlay {
  opacity: 1;

} 

.tournament-title {
  font-weight: bold;
  font-size: 2rem;
}

.tournament-info {
  margin-top: 5px;
  font-size: 1.5rem;
}

</style>