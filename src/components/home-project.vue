<template lang="pug">
include ../assets/pugmix/mixin.pug

section.container
	+CreateH("Проекты",true)
	.project-list
		+CreatCard("@/static/image/minishop.png","Vue 3 Pinia Vite Vue Router","Создание MiniShop","Описание: MiniShop — это одностраничный интернет-магазин, реализованный на Vue 3 с использованием Pinia и Vue Router. Проект демонстрирует работу с внешним API (загрузка списка товаров), фильтрацию и пагинацию данных, реализацию корзины с сохранением в localStorage, адаптивный интерфейс и модульную архитектуру. В проекте применена методология БЭМ, реализовано бургер-меню, отдельные страницы и взаимодействие компонентов через события. Проект собирается с помощью Vite и развёрнут на GitHub Pages","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/MiniShop") 
		+CreatCard("@/static/image/task-board.png","Html css js","Создание Task Board","Описание: Проект Task Board — это интерактивная доска задач с возможностью перетаскивания карточек между колонками. Реализована структура с четырьмя статусами задач, каждая из которых содержит номер, описание и стоимость. Пользователь может добавлять, редактировать и удалять карточки, перетаскивать их между колонками, при этом все изменения сохраняются в localStorage. Интерфейс построен на чистом JavaScript и DOM API без использования сторонних библиотек, включая поддержку drag-and-drop, динамического рендеринга и адаптивной верстки. ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/task-board") 
		+CreatCard("@/static/image/chocolate.png","scss vue vuetify","Создание playable-ads","Описание: создание макета для прродаже шоколада. ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/chocolate/")
		+CreatCard("@/static/image/tz5.png","HTML css js","тестовое задание одной компании","Описание: Верстка, тз одной из компаний. использовал чистый html - css - js, здесь предоставляли три сайта на выбор, чтобы сделать такой же дизайн как у них, в задании было нужно реализовать следующие: 1 картинка 1 параграф 1 заголовок и сделать сементику страницы  ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/in-tz/")
		+CreatCard("@/static/image/tz8.png","HTML css js","Создание playable-ads","Описание: Реализовать интерактивный Playable Ads, где игроку нужно выбрать одну из трех закрытых карточек, за которой скрыт приз. Карточки перемешиваются, и игрок делает выбор. В конце отображается результат (выигрыш или проигрыш). ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/tz8/")
		+CreatCard("@/static/image/delivery.png","HTML scss vue typescript","Реализовал интересный слайдер","Описание: Сайт с слайдером. использовал vue,ts - Сайт адаптивный, слайдер позволяет видить какие товары идут следующие и при нажатие на них(снизу) переходит на слайд, так же доступна возможномть выше выбрать категорию. она позволяет переключать слайды между категориями ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/delivery/") 
		+CreatCard("@/static/image/apis.png","HTML scss vue typescript","Сделал мини-приложение погоды и лента новостей через api","Описание: мини-приложение. использовал vue,ts - приложение работаю так: указываешь город в поле и автоматически показывается погода в это городе, второе приложение ленты просто выводит сообщение новостей через api, нажми на обновить ленту и добавится ещё 5 статей ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/apis-apps/")   
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
	background-color: #00cc6a;
	text-transform: uppercase;
	transition: background 0.5s ease-in;

	cursor: pointer;
}
.project-list-link a {
	transition: color 0.5s ease-in;
	color: #fff !important;
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
