<template>
    <Head>
        <Title>{{ tournament.title }}</Title>
    </Head>
    <div>
      <h1>{{ tournament.title }}</h1>
    </div>
  </template>
  
  <script setup>
  
  const {id} = useRoute().params
  const uri = 'http://localhost:3000/tournaments/' + id;
  
  // Fetch the tournament details
  const { data: tournament } = await useFetch(uri);
  </script>
  
  <script>
  export default {
    layout: 'default',
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  