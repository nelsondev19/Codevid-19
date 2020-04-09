<template>
    <div>
    

	
	<div class="portada" id="portada">
		<div class="header">
			<h1 class="logotipo">FalconMasters</h1>
			<p class="mensaje">sitio web en construcción</p>
		</div>

		<div id="cuenta">
        </div>

		<div class="redes-sociales">
			<a href="https://www.facebook.com/falconamsters" class="btn-red-social"><i class="fab fa-facebook-f"></i></a>
			<a href="https://www.twitter.com/falconamsters" class="btn-red-social"><i class="fab fa-twitter"></i></a>
			<a href="https://www.twitter.com/falconamsters" class="btn-red-social"><i class="fab fa-instagram"></i></a>
		</div>
	</div>

	<main class="contenedor">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus hic obcaecati fugit illo voluptatibus reiciendis tempora sequi, harum enim eaque fugiat est! Fugiat ipsam eaque qui facilis esse sed voluptatem?
		Quibusdam quasi voluptatum non fuga. Sit assumenda qui culpa nam vitae maiores, at enim minus eos soluta numquam asperiores ratione iusto perspiciatis cumque? Tenetur dicta voluptates, doloremque ipsa itaque cupiditate!
		Suscipit placeat, officia enim labore, mollitia corporis molestiae quam amet voluptates quaerat ipsum ut nostrum! Perferendis quidem sapiente, accusamus placeat voluptatem quae laboriosam animi earum nemo natus, culpa eum quam.
		Recusandae illo aliquam, animi fugit cupiditate blanditiis numquam! Laboriosam quos ullam optio distinctio maiores dolorem pariatur quaerat nulla adipisci cum ratione provident, ducimus delectus quod illum dicta nisi iusto mollitia?
		A iste eius necessitatibus porro eaque architecto eveniet culpa voluptatibus non! Eius deleniti amet, assumenda eveniet necessitatibus iste quasi facere laudantium dolores numquam commodi magnam ducimus dignissimos quis! Alias, fugit.</p>
	</main>
    </div>
</template>
<script>
import countdown from '../../public/simplyCountdown.min.js'
import countConfig from '../../public/countdwon.js'
export default {
  name:"contador", 
  data(){
    return {

    }
  },
  
}
</script>
<style >

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background: #EFEFEF;
	color: #363639;
    font-family: 'Work Sans', sans-serif;
}



/* ? ----- PORTADA ----- */
.portada {
	width: 100%;
	background: #EFEFEF;

	min-height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	transition: .5s ease-out all;
}

.portada.oculta {
	transform: translateY(100%);
}

.portada .header {
	margin-bottom: 100px;
	text-transform: uppercase;
	letter-spacing: 3px;
}

.portada .header .logotipo {
	font-size: 50px;
	font-size: 900;
	margin-bottom: 20px;
}

.portada .header .mensaje {
	font-size: 30px;
	font-weight: 600;
}



/* ? ----- MAIN ----- */
main {
	max-width: 1000px;
	margin: auto;
	width: 90%;
	padding: 60px 0;
	font-size: 18px;
	line-height: 28px;
	text-align: left;
}



/* ? ----- Cuenta Regresiva ----- */
#cuenta {
	display: flex;
	justify-content: center;
	margin-bottom: 100px;
}

.simply-section {
	background: #fff;
	width: 180px;
	height: 180px;
	margin: 0 20px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.simply-amount {
	display: block;
	font-size: 50px;
	font-weight: 700;
}

.simply-word {
	font-weight: 300;
	font-size: 30px;
}


/* ? ---------------------------- */



/* ? ----- REDES SOCIALES ----- */
.redes-sociales .btn-red-social {
	padding: 15px 0;
	display: inline-block;
	min-width: 120px;
	border-radius: 5px;
	background: #FF0000;
	color: #fff;
	font-size: 30px;
	margin: 0 20px;
	transition: .3s ease all;
}

.redes-sociales .btn-red-social:hover {
	box-shadow: 0px 0px 50px 10px rgba(0,0,0,.15);
}
</style>