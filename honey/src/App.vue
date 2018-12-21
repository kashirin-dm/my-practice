<template>
<div id="app">
<div class="first-screen">
	<section class="container">
		<header class="row">
			<div class="col-12 my-5">
				<img src="./assets/logo.png" srcset="./assets/logo-x2.png 2x" alt="Honey Hunters" class="img-fluid">
			</div>
		</header>

		<div class="row">
			<div class="col-12">
				<div class="contact-icon mx-auto"></div>
			</div>
		</div>
		<form @submit.prevent="addComment" class="row mt-5">
			<div class="col-xs-12 col-md-5">
				<div class="justify-content-start form-group">
				<label for="name">Имя <span>*</span></label>
				<input v-model="newComment.name" @blur="startName" :class="{ 'bad-field': !validation.name && startEditName == true }" type="text" id="name" class="form-control-lg" autocomplete="off" maxlength="30">
				<small v-show="!validation.name && startEditName == true " class="form-text bad-field-message">Имя не должно быть пустым</small>
				</div>
				<div class="justify-content-start form-group">
				<label for="email" class="mt-4">E-Mail <span>*</span></label>
				<input v-model="newComment.email" @blur="startEmail" :class="{ 'bad-field': !validation.email && startEditEmail == true }" type="email" id="email" class="form-control-lg" autocomplete="off" maxlength="30">
				<small v-show="!validation.email && startEditEmail == true" class="form-text bad-field-message">Введите корректный E-Mail</small>
				</div>
			</div>
			<div class="col-xs-12 col-md-5 ml-auto">
				<div class="form-group">
				<label for="comment">Комментарий <span>*</span></label>
				<textarea v-model="newComment.text" @blur="startText" :class="{ 'bad-field': !validation.text && startEditText == true }" id="comment" class="form-control" autocomplete="false" rows="6"></textarea>
				<small v-show="!validation.text && startEditText == true" class="form-text bad-field-message">Введите свой комментарий</small>
				</div>
				<button type="submit" :disabled="disabledButton" class="btn btn-lg btn-submit my-5 float-right">Записать</button>
			</div>
			<div class="clearfix"></div>
		</form>
	</section>
</div>

<div class="second-screen">
	<section class="container text-center">
		<div class="row">
			<div class="col-12">
				<h1 class="my-5">Выводим комментарии</h1>
			</div>
		</div>

			<transition-group name="list-comment" tag="div" class="row comments-block">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" v-for="cmt in comment" :key="cmt['.key']">
				<header>{{cmt.name}}</header>
				<div>
					<span>{{cmt.email}}</span>
					<p>{{cmt.text}}</p>
				</div>
			</div>
			</transition-group>

	</section>
</div>

<div class="footer">
	<footer class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-9 py-4 my-4 text-center text-md-left">
				<img src="./assets/logo.png" srcset="./assets/logo-x2.png 2x" alt="Honey Hunters">
			</div>
			<div class="col-xs-12 col-sm-12 col-md-3 py-4 text-center text-md-right">
					<a href="#" class="social my-4">
						<i class="fab fa-vk"></i>
					</a>
					<a href="#" class="social ml-4 my-4">
						<i class="fab fa-facebook-f"></i>
					</a>
			</div>
		</div>
	</footer>
</div>
</div>
</template>

<script>
let emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// Initialize Firebase
let config = {
	apiKey: "AIzaSyCy73SHHMtd45jryMAb4r8hV9R0f4a3Bo8",
	authDomain: "honey-home-work.firebaseapp.com",
	databaseURL: "https://honey-home-work.firebaseio.com",
	projectId: "honey-home-work",
	storageBucket: "honey-home-work.appspot.com",
	messagingSenderId: "844406212621"
};
firebase.initializeApp(config);
let commentRef = firebase.database().ref('comment');


import Styles from './assets/scss/styles.scss';
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";

export default {
name: 'app',
components: {
	Bootstrap,
},
data() {
	return {
		newComment: {
			name: '',
			email: '',
			text: '',
		},
		startEditName: false,
		startEditEmail: false,
		startEditText: false,
		disabledButton: true,


	};
},
firebase() {
	return {
		comment: commentRef,
	};
},

// вычисляемые свойства для валидации
computed: {
	validation() {
		return {
			name: !!this.newComment.name.trim(),
			text: !!this.newComment.text.trim(),
			email: emailRE.test(this.newComment.email),
		};
	},
	isValid() {
		var validation = this.validation;
		return Object.keys(validation).every(function (key) {
			return validation[key];
		});
	},
},
// методы
methods: {
	isValidForm() {
		if (this.validation.name && this.validation.email && this.validation.text && true) {
			this.disabledButton = false;
		} else {
			this.disabledButton = true;
		};
	},
	startName() {
		this.startEditName = true;
		this.isValidForm();
	},
	startEmail() {
		this.startEditEmail = true;
		this.isValidForm();
	},
	startText() {
		this.startEditText = true;
		this.isValidForm();
	},
	addComment() {
		if (this.isValid) {
			commentRef.push(this.newComment);
			this.newComment.name = '';
			this.newComment.email = '';
			this.newComment.text = '';
			this.startEditName = false;
			this.startEditEmail = false;
			this.startEditText = false;
			this.disabledButton = true;
		};
	},
	
},


}
</script>
<style lang="scss">
</style>
