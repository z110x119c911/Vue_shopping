<template>
  <div>
		<div class="parallaxy_container">
			<h1 class="parallax-title d-none d-md-block">細膩捕捉每一個動人時刻<br>豐富您的生活</h1>
			<h1 class="parallax-title d-block d-md-none h3">細膩捕捉每一個動人時刻<br>豐富您的生活</h1>
			<VueParallaxy><div class="headerImg h-100" :speed-factor="0.5"></div></VueParallaxy>
		</div>
  </div>
</template>

<style scoped>
  .headerImg{
    background: url('../assets/img/header3.jpg');
		background-size: cover;
		background-position: bottom center;
	}
	.parallax-container {
		position: relative;
	}
	.parallax-title {
		position: absolute;
		top: 5%;
		right: 15%;
		line-height: 60px;
		padding: 20px;
		color: white;
		text-align: left;
		font-family: 'Noto Serif TC', serif;
	}
	@media (max-width: 768px) {
		.parallax-title {
		top: 0%;
		right: 0%;
		padding: 20px;
		color: white;
		text-align: right;
	}
}
</style>

<script>
export default {

}
</script>