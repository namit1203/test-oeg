
<template>
    <div class="wrapper">
        <div class="sidebar">
            <ul class="menu-vertical">
                <li  style="margin-top: 20px;">
                  <Icon style="margin-right: 10px; color:white" class="menu-vertical-icon" name="ion:game-controller" />
                  <span>My tournaments</span>
                </li>
                <li @click="handleCreateTournamentClick">
                  <Icon style="margin-right: 10px; color: white" class="menu-vertical-icon" name="ic:outline-settings" />
                  <span>Tournament creating</span>
                </li>
               <span style="font-weight: lighter;"> __________________________</span>
                <li>
                  <Icon style="margin-right: 10px; color:white" class="menu-vertical-icon" name="pajamas:rocket" />
                  <span>My matches</span>
                </li>
                <li>
                  <Icon style="margin-right: 10px; color:white" class="menu-vertical-icon" name="ic:outline-settings" />
                  <span>Match creating</span>
                </li>
                <span style="font-weight: lighter;"> __________________________</span>
                <li>
                  <Icon style="margin-right: 10px; color:white" class="menu-vertical-icon" name="ion:people" />
                  <span>My teams</span>
                </li>

                <li style="margin-bottom: 20px;">
                  <Icon style="margin-right: 10px; color:white" class="menu-vertical-icon" name="ic:outline-settings" />
                  <span>Team creating</span>
                </li>
              </ul> 
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
*{
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Josefin Sans', sans-serif;
  }
  
  body{
     background-color: #f3f5f9;
  }
  
  .wrapper{
    display: flex;
    position: relative;
  }
  
  .wrapper .sidebar{
    width: 200px;
    height: 100%;
    background:  #2E2E2E;
    padding: 30px 0px;

  }
  
  .wrapper .sidebar span{
    color: #fff;
    text-align: center;


  }
  
  .wrapper .sidebar ul li{
    padding: 15px;
    border-bottom: 1px solid #bdb8d7;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    border-top: 1px solid rgba(255,255,255,0.05);
    cursor: pointer;
    font-size: 14px;

  }   
  .wrapper:hover .sidebar:hover ul:hover li:hover{
    font-weight: bold;
  }
  
</style>