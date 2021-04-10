<template>
  <div id="restaurant-forum">
  </div>
  <Navbar/>
  <main
    role="main"
    class="bg-white mt-5">
    <router-view/>
  </main>
</template>

<style>
</style>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>
