<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-nav py-4">
      <a class="navbar-brand" href="#">Photograph</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">首頁</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">訂單查詢</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">購物車</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">聯絡我們</a>
          </li>
        </ul>
      </div>
    </nav>
    <header class="bg-warning">
      <div id="carousel" class="carousel slide" data-ride="carousel" style="height:400px">
        <ol class="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" class="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner h-100">
          <div class="carousel-item active">
            <img src="" class="d-block img_carousel1" alt="">
            <!-- @/assets/images/carousel1.jpg -->
          </div>
          <div class="carousel-item">
            <img src="" class="d-block" alt="">
          </div>
          <div class="carousel-item">
            <img src="" class="d-block" alt="">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>
