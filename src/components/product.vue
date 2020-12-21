<template>
  <div>
    <h2 class="article text-center py-5 mb-0 text-content">Portfolio</h2>
    <div class="row no-gutters">
      <div class="col-md-4">
        <a href="#" class="d-flex justify-content-center product_person_bg" style="text-decoration:none">
          <h2 class="align-self-center text-white">人像攝影</h2>
        </a>
      </div>
      <div class="col-md-4">
        <a href="#" class="d-flex justify-content-center product_business_bg" style="text-decoration:none">
          <h2 class="align-self-center text-white">商業攝影</h2>
        </a>
      </div>
      <div class="col-md-4">
        <a href="#" class="d-flex justify-content-center product_food_bg" style="text-decoration:none">
          <h2 class="align-self-center text-white">食品攝影</h2>
        </a>
      </div>
    </div>
    <div class="row py-5 no-gutters justify-content-center">
      <div class="col-md-6 mt-md-5 px-4">
        <h2 class="article text-content">Address</h2>
        <p>地址：台北市信義區信義路五段7號1樓</p>
      </div>
      <div class="col-md-6 text-center wrap">
        <iframe class="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7140.571567904392!2d121.56482459057939!3d25.03449809699712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6e9d93249%3A0xd508f7b3aa02d931!2z5Y-w5YyXMTAx6KeA5pmv5Y-w!5e0!3m2!1szh-TW!2stw!4v1608198391290!5m2!1szh-TW!2stw"
           frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" 
          tabindex="0">
        </iframe>
      </div>
    </div>
  </div>
</template>
<style lang="">
  .product_person_bg , .product_business_bg , .product_food_bg{
    position: relative;
    overflow: hidden;
    height: 400px;
    z-index: 1;
    transition: 0.5s all;
  }
  .product_person_bg::after{
    background: url('../assets/img/person.jpg') 0 / cover ;
  }
  .product_business_bg::after{
    background: url('../assets/img/business.jpg') 0 / cover ;
  }
  .product_food_bg::after{
    background: url('../assets/img/food.jpg') 0 / cover ;
  }
  .product_person_bg::after , .product_business_bg::after , .product_food_bg::after{
    content: "";
    background-position: center center;
    background-size: cover;
    position: absolute;
    /* 圖片需超過外層的區塊 */
    top: 0px;
    bottom:  0px;
    left:  0px;
    right: 0px;
    /* 加入模糊 */
    filter: blur(5px);
    z-index: -1;
  }
  .product_person_bg:hover::after, .product_business_bg:hover::after , .product_food_bg:hover::after{
    transition: 0.6s all;
    filter: blur(0px);
  }
  .wrap{
    position: relative;
    padding-bottom: 48%;
    overflow: hidden;
  }
  .wrap iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
		.wrap{
      padding-bottom: 100%;
    }
	}
</style>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>