<template>
  <div>
    <div class="parallax_container_main">
      <h2 class="parallax_title_main">紀錄每個瞬間</h2>
			<div class="main_Img"></div>
		</div>
  </div>
</template>

<style scoped>
	.main_Img{
    background: url('../assets/img/main_bg1.jpg');
		background-size: cover;
    background-position: bottom center;
    background-attachment: fixed;
    height: 100%;
	}
	.parallax_container_main{
    position: relative;
    overflow: hidden;
    height: 600px;
	}
	.parallax_title_main{
		position: absolute;
		top: 20%;
		left: 5%;
		padding: 20px;
		color: white;
		text-align: left;
		font-family: 'Noto Serif TC', serif;
	}
</style>

<script>
export default {
  
};
</script>