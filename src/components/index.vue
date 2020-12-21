<template>
  <div>
    <Nav/>

    <Header/>

    <About/>

    <Product/>

    <Banner/>

    <Contact/>

    <Footer/>
  </div>
</template>

<style scoped>

</style>


<script>
import Nav from './nav';
import Header from './header';
import About from './about';
import Banner from './banner';
import Product from './product';
import Footer from './footer';
import Contact from './contact.vue';

export default {
  components:{
    Nav,
    Header,
    About,
    Banner,
    Product,
    Footer,
    Contact
  },
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  methods: {
    
  },
}
</script>
