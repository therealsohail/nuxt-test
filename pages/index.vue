<template>
  <div class="flex flex-col" >
      <div class="content">
        <Navbar class="z-10" />
      <Banner class="z-0" />
      <BottomNav class="z-10" />
      <MainContent />
      <Content pointer="1." />
      </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import BottomNav from '../components/BottomNav'
import MainContent from '../components/MainContent'
import Content from '../components/Content'



export default {

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');


body {
  font-family: 'Lato';
  font-weight: 900;
  background: #EBF4FF;
}
</style>