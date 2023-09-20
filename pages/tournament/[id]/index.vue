<template>
  <Head>
    <Title>{{ tournament.title }}</Title>
  </Head>
  <div class="tour-detail bg-black-5">

    <div class="content-banner sm:min-h-[400px]"
      :style="{ backgroundImage: `url(${tournament.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
      <div class="overlay"></div>
      <div class="flex flex-row items-center justify-between" style="padding-top:250px">
        <div class="image-title">
          <h3 class="uppercase flex flex-col sm:max-w-[100%] ">
            <span class="flex flex-row items-center mb-2 text-white">{{ tournament.gameType }} </span>
            <strong class="text-5xl font-bold text-neutral-10 mb-4 text-white ">{{ tournament.title }}</strong>
            <div class="flex flex-row text-white ">
              <span class=" text-left flex items-center mr-10 ">
                <i Icon="" name="material-symbols:calendar-month-sharp"></i>
                <p>{{ tournament.startDate }}</p>
              </span>
            </div>
          </h3>
        </div>


        <div>
          <button class="btn-join">Join</button>
        </div>

      </div>

    </div>
    <div class="py-3 xs:px-4 sm:px-8 items-center text-white bg-black-4 " style="row-gap: 16px">
      <div class="flex flex-row flex-1 ">
        <div class="info">
          <p class="text-sm font-light">Place:</p>
          <p class="font-bold text-base">{{ tournament.place }}</p>
        </div>
        <div class="info">
          <p class="text-sm font-light">Registed Team:</p>
          <p class="font-bold text-base">{{ tournament.totalTeam }}</p>
        </div>
        <div class="info">
          <p class="text-sm font-light">Prize:</p>
          <p class="font-bold text-base">{{ tournament.award }}</p>
        </div>
        <div class="info ml-auto flex flex-row items-center">
          <p class="text-sm font-light">Host by:</p>
          <p class="font-bold">{{ tournament.host }}</p>
        </div>
      </div>
    </div>

    <div style="color: grey; margin-top: 10px; margin-bottom:10px;">
      _________________________________________________________________________________________________________________________________________________________________________________
    </div>
    <div>
      <div class="section-wrapper-title flex flex-row justify-between items-center">
        <p class="font-bold text-lg mb-2 text-white">Định dạng giải đấu</p>
      </div>
      <div class="container11">
        <div class="bg-black-4 rounded-md py-3 px-4 mb-3 flex flex-row">
          <div class="items-center min-w-[25%] w-fit border-r-black-2 border-r-[0.5px] mr-4 pr-4">
            <div class="ant-image"><img class="ant-image-img object-cover w-8 h-8"
                src="https://beta.ugesports.xyz/assets/gaming-pad-03.19b38ef6.svg">
            </div>
            <p class="whitespace-nowrap text-white" style="font-bold">Trò chơi</p>
          </div>
          <div class="align-middle justify-center flex flex-col flex-1">
            <p class="text-neutral-40 break-words">Arena Of Valor</p>
          </div>
        </div>
        <div class="bg-black-4 rounded-md py-3 px-4 mb-3 flex flex-row">
          <div class="items-center min-w-[25%] w-fit border-r-black-2 border-r-[0.5px] mr-4 pr-4">
            <div>
              <img class=" object-cover w-8 h-8" src="https://beta.ugesports.xyz/assets/trophy-03.37706bfd.svg">
            </div>
            <p class="whitespace-nowrap text-white">Giải thưởng</p>
          </div>
          <div class="align-middle justify-center flex flex-col flex-1">
            <p class="text-neutral-40 break-words">{{ tournament.award }}</p>
          </div>
        </div>
        <div class="bg-black-4 rounded-md py-3 px-4 mb-3 flex flex-row">
          <div class="items-center min-w-[25%] w-fit border-r-black-2 border-r-[0.5px] mr-4 pr-4">
            <div>
              <img class=" object-cover w-8 h-8" src="https://beta.ugesports.xyz/assets/dataflow-01.3989a6d9.svg">
            </div>
            <p class="whitespace-nowrap text-white">Brackets</p>
          </div>
          <div class="align-middle justify-center flex flex-col flex-1">
            <p class="text-neutral-40 break-words">{{ tournament.tournamentFormat }}</p>
          </div>
        </div>
        <div class="bg-black-4 rounded-md py-3 px-4 mb-3 flex flex-row">
          <div class="items-center min-w-[25%] w-fit border-r-black-2 border-r-[0.5px] mr-4 pr-4">
            <div>
              <img class=" object-cover w-8 h-8" src="https://beta.ugesports.xyz/assets/wallet-04.90405651.svg">
            </div>
            <p class="whitespace-nowrap text-white">Entry Fee</p>
          </div>
          <div class="align-middle justify-center flex flex-col flex-1">
            <p class="text-neutral-40 break-words">{{ tournament.registrationFee }}</p>
          </div>
        </div>
        <div class="bg-black-4 rounded-md py-3 px-4 mb-3 flex flex-row">
          <div class="items-center min-w-[25%] w-fit border-r-black-2 border-r-[0.5px] mr-4 pr-4">
            <div>
              <img class=" object-cover w-8 h-8" src="https://beta.ugesports.xyz/assets/clock.842f26a8.svg">
            </div>
            <p class="whitespace-nowrap text-white">Checkin Time</p>
          </div>
          <div class="align-middle justify-center flex flex-col flex-1">
            <p class="text-neutral-40 break-words">{{ tournament.checkinTime }}</p>
          </div>
        </div>
        <div class="bg-black-4 rounded-md py-3 px-4 mb-3 flex flex-row">
          <div class="items-center min-w-[25%] w-fit border-r-black-2 border-r-[0.5px] mr-4 pr-4">
            <div>
              <img class=" object-cover w-8 h-8" src="https://beta.ugesports.xyz/assets/users-04.64abb536.svg">
            </div>
            <p class="whitespace-nowrap text-white">Team size</p>
          </div>
          <div class="align-middle justify-center flex flex-col flex-1">
            <p class="text-neutral-40 break-words">{{ tournament.teamSize }}</p>
          </div>
        </div>
      </div>
    </div>

    <div style="color: grey;">
      _________________________________________________________________________________________________________________________________________________________________________________
    </div>

    <div class="container-info">
      <div class="font-bold text-lg mb-2 text-white">Tournament Info</div>
      <div class="font-bold text-lg mb-2 text-white">
        <p class="font-bold text-lg mb-2">Team</p>
        <div class="team-section flex flex-row flex-1 bg-black-4 rounded-md p-3 justify-between mb-4">
          <div class="mr-2">
            <p class="text-sm font-light text-neutral-40 mb-2">Registered team</p>
            <p class="font-bold text-base">11/32</p>
          </div>
          <div class="mr-2">
            <p class="text-sm font-light text-neutral-40 mb-2">Team confirmed</p>
            <p class="font-bold text-base">11</p>
          </div>
          <div class="mr-2">
            <p class="text-sm font-light text-neutral-40 mb-2">Remaining slots</p>
            <p class="font-bold text-base">0</p>
          </div>
        </div>
        <p class="font-bold text-lg mb-2">Prize</p>
        <div class="team-section flex flex-row flex-1 bg-black-4 rounded-md p-3 justify-between mb-4">
          <div class="mr-2 items-center">
            <div class="flex flex-row items-end mb-2">
              <div class=" mr-1"><img class=" object-cover undefined"
                  src="https://beta.ugesports.xyz/assets/prize-gold.b8416faa.svg"></div>
              <p class="text-sm font-light text-yellow-60">1st</p>
            </div>
            <p class="font-bold text-base text-center">3.000.000 ₫</p>
          </div>
          <div class="mr-2 items-center">
            <div class="flex flex-row items-end mb-2">
              <div class=" mr-1"><img class="object-cover undefined"
                  src="https://beta.ugesports.xyz/assets/prize-silver.d95a1007.svg"></div>
              <p class="text-sm font-light text-neutral-20">2nd</p>
            </div>
            <p class="font-bold text-base text-center">2.000.000 ₫</p>
          </div>
          <div class="mr-2 items-center">
            <div class="flex flex-row items-end mb-2">
              <div class="mr-1"><img class="object-cover undefined"
                  src="https://beta.ugesports.xyz/assets/prize-bronze.3071851e.svg"></div>
              <p class="text-sm font-light text-blue-40">3rd</p>
            </div>
            <p class="font-bold text-base text-center">1.000.000 ₫</p>
          </div>
        </div>
        <!-- <div>
          <p>Host</p>
          <div class="font-bold text-lg mb-2">{{ tournament.host }}</div>
        </div> -->
      </div>
    </div>
  </div>
  <!-- <div class="tournament">
<button @click="taskTour.deleteTournament(id)">Delete</button>
</div> -->
</template>
  
<script setup>
import { useTournamentStore } from '~/store/useTournamentStore';
import { useRoute } from 'vue-router';
import { useFetch } from 'nuxt/app';


const route = useRoute();


const uri = 'http://localhost:3000/tournaments/' + route.params.id;

// fetch the tournament details
const { data: tournament } = await useFetch(uri);

</script>


<style>
.team-section {
  margin-top: 10px;
  max-width: 485px;
}

.container-info {
  display: grid;
  grid-template-columns: 649px 649px;
  grid-template-rows: 991px 991px;
  padding-top: 20px;
}

.container11 {
  display: grid;
  grid-template-columns: 362px 362px 362px;
  grid-template-rows: 83px 83px;
  grid-gap: 20px;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  max-width: 1128px;
  max-height: 400px;
  margin-left: 200px;
  margin-top: 63px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
}


.image-title {
  position: relative;
  z-index: 1;
  margin-left: 30px;
}

.info {
  margin-right: 2.5rem;
}

.tour-detail {
  padding: 0 200px 0px 200px;
  background-color: #121212;
}


.tournament-image1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-item__intro {

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
  text-align: left;
}

.slider-item__intro__inner {
  max-width: 100%;
  margin: 0 auto;
}

.btn-join {
  background-image: linear-gradient(to right, #FF006B var(--tw-gradient-from-position), #885FFF var(--tw-gradient-to-position));
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #FF006B var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 0 107 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: #885FFF var(--tw-gradient-to-position);
  color: white;
  padding: 10px 20px;
  border: 10px;
  cursor: pointer;
  margin-right: 20px;
  border-radius: 10px;
  z-index: 2;
}

.text-neutral-40 {
  --tw-text-opacity: 1;
  color: rgb(169 163 194 / var(--tw-text-opacity));
}</style>


  