<template lang="pug">
include ../assets/pugmix/mixin.pug

section.container
    +CreateH("Проекты",true)
    .project-list
        +CreatCard("@/static/image/tz5.png","HTML css js","тестовое задание одной компании","Описание: Верстка, тз одной из компаний. использовал чистый html - css - js, здесь предоставляли три сайта на выбор, чтобы сделать такой же дизайн как у них, в задании было нужно реализовать следующие: 1 картинка 1 параграф 1 заголовок и сделать сементику страницы  ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/in-tz/")
        +CreatCard("@/static/image/tz8.png","HTML css js","Содание playable-ads","Описание: Реализовать интерактивный Playable Ads, где игроку нужно выбрать одну из трех закрытых карточек, за которой скрыт приз. Карточки перемешиваются, и игрок делает выбор. В конце отображается результат (выигрыш или проигрыш). ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/tz8/")
        +CreatCard("@/static/image/delivery.png","HTML scss vue typescript","Реализовал интересный слайдер","Описание: Сайт с слайдером. использовал vue,ts - Сайт адаптивный, слайдер позволяет видить какие товары идут следующие и при нажатие на них(снизу) переходит на слайд, так же доступна возможномть выше выбрать категорию. она позволяет переключать слайды между категориями ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/delivery/") 
        +CreatCard("@/static/image/apis.png","HTML scss vue typescript","Сделал мини-приложение погоды и лента новостей через api","Описание: мини-приложение. использовал vue,ts - приложение работаю так: указываешь город в поле и автоматически показывается погода в это городе, второе приложение ленты просто выводит сообщение новостей через api, нажми на обновить ленту и добавится ещё 5 статей ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/apis-apps/") 
        //- +CreatCard("@/static/image/agencyStudio.jpg","HTML SCSS vuetify VUE","Юристы","Описание: Верстка ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/agencystudio/") 
        //- +CreatCard("@/static/image/whitetechnique.43c3745a.jpg","HTML SCSS vuetify VUE","Белая техника","Описание: Верстка ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/whitetechnique/") 


        //- +CreatCard("@/static/image/lawyer.jpeg","HTML SCSS Pug VUE","lawyer","Описание: Верстка ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/lawyer/") 
        //- +CreatCard("@/static/image/whitetex.png","HTML SCSS vuetify VUE","белая техника","Описание: Верстка ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/whitetechnique/") 
        //- +CreatCard("@/static/image/work8.jpg","HTML CSS","Sage","Описание: Адаптивный","Live <~>",false,"Cached >=", "https://xarn0.github.io/Maket/")  
        //- +CreatCard("@/static/image/fler.jpg","HTML CSS","Frelanser","Описание","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/work8/")   
        //- +CreatCard("@/static/image/glass.jpg","HTML CSS","Frelanser","Описание","Live <~>",false,"Cached >=", "https://xarn0.github.io/Maket/")  
        div.project-list-link  
            router-link(:to="{name:'works'}").link-header-click-me Ещё работы...
</template>

<script>
export default {
	name: "home-project"
};
</script>
<style scoped lang="scss">
.project-list {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;

	padding-bottom: 50px;
}
.project-list-link {
	display: flex;
	justify-content: center;
	align-items: center;
	/* align-self: center;   */
	width: 100%;
	font-size: 1.4em;
	border: 2px dashed #afa1a1b9;
	padding: 15px 0;
	text-transform: uppercase;
	transition: background 0.5s ease-in;
}
.project-list-link a {
	transition: color 0.5s ease-in;
}
.project-list-link:hover {
	background-color: #afa1a108;
}
.project-list-link:hover a {
	color: white;
}
.project__btn {
	margin-left: 16px;
}
</style>
