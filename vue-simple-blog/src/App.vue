<template>
  <div id="app" class="app">
    <Header/>
	<Posts/>
    <Footer/>
  </div>
</template>

<script>
import "./assets/scss/style.scss";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
	  Header,
	  Posts,
	  Footer
  }
};
</script>
