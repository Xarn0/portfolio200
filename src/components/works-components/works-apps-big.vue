<template lang="pug">
include ../../assets/pugmix/mixin.pug
.conteiner.worksApps.public_margin
    .worksApps__header 
        +CreateH("Работки",false,false)

    .worksApps__content.public_margin

        +CreatCard("@/static/image/delivery.png","HTML scss vue typescript","Реализовал интересный слайдер","Описание: Сайт с слайдером. использовал vue,ts - Сайт адаптивный, слайдер позволяет видить какие товары идут следующие и при нажатие на них(снизу) переходит на слайд, так же доступна возможномть выше выбрать категорию. она позволяет переключать слайды между категориями ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/apis-apps/") 
        +CreatCard("@/static/image/apis.png","HTML scss vue typescript","Сделал мини-приложение погоды и лента новостей через api","Описание: мини-приложение. использовал vue,ts - приложение работаю так: указываешь город в поле и автоматически показывается погода в это городе, второе приложение ленты просто выводит сообщение новостей через api, нажми на обновить ленту и добавится ещё 5 статей ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/apis-apps/") 
        +CreatCard("@/static/image/tz3.png","HTML scss vue","тестовое задание одной компании","Описание: Верстка, тз одной из компаний. использовал vue,  нужно было сделать по макету, при условие если блоков меньше 8, то отрисовывалось в две строчки, если блоков меньше 5 то в одну строчку, если болоков больше 8- в одну строчку скролл ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/rlt-tz/") 
        +CreatCard("@/static/image/tz6.png","HTML scss vue  typescript","тестовое задание одной компании","Описание: Верстка, тз одной из компаний. использовал vue, typescript, нужно было сделать по макету, не используя никаких ui-библиотек ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/rlt-tz/") 
        +CreatCard("@/static/image/tz5.png","HTML css js","тестовое задание одной компании","Описание: Верстка, тз одной из компаний. использовал чистый html - css - js, здесь предоставляли три сайта на выбор, чтобы сделать такой же дизайн как у них, в задании было нужно реализовать следующие: 1 картинка 1 параграф 1 заголовок и сделать сементику страницы  ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/in-tz/") 
        +CreatCard("@/static/image/tz2.png","HTML SCSS Pug VUE VUEX VUE-router","Тестовое задание №2 ","Описание: Здесь реализовал подобие мини-игры, сделано вращение барабана, и выводит  комбинации(Их порядка 15-20), сделал подcветку комбинаций, когда у вас закончится монеты игра остановится, так-же можно менять ставку каждого круга 'снизу в левом углу'(Но у вас не получится изменить ставку если она больше количества ваших монет) ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/royal-mini-game/")
        +CreatCard("@/static/image/tz4.png","HTML css js","тестовое задание одной компании","Описание: Верстка, тз одной из компаний. использовал чистый html - css - js, задача была сделать страницу по макету, и адаптировать под телефоны без макета ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/tz4/")
        +CreatCard("@/static/image/whitetechnique.43c3745a.jpg","HTML SCSS vuetify VUE","Белая техника","Описание: Верстка ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/whitetechnique/") 
        +CreatCard("@/static/image/tz1.png","HTML SCSS Pug VUE VUEX VUE-router","Тестовое задание №1 ","Описание: В этом тестовом задание было реализовано следующие, панели связанные между собой, при нажатие на правую панель на любой цвет квадрата он удалиться, при нажатие кнопки сортировать, все квадратики перемешиваются, в левой панели можно добавить квадратики, можно изменить их цвет, можно их отключить(как строчку, так и весь блок с квадратами) ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/proContent/") 
        +CreatCard("@/static/image/agencyStudio.jpg","HTML SCSS vuetify VUE","Юристы","Описание: Верстка ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/agencystudio/") 
        +CreatCard("@/static/image/lawyer.jpeg","HTML SCSS Pug VUE","Юристы","Описание: Верстка ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/lawyer/") 
        //- +CreatCard("@/static/image/OVE.jpg","HTML CSS ","фирма O.A.DEVOLD","Описание: Обычнвя верстка, неадаптивная ","Открыть <~>",false,"Cached >=","https://xarn0.github.io/tem-25/")
        +CreatCard("@/static/image/flore.jpg","HTML SCSS Pug VUE","Флорист","Описание: Верстка","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/newWorkWeb/") 
        //- +CreatCard("@/static/image/fler.jpg","HTML CSS","Фрилансер","Описание: Адаптивный ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/work8/")   
        //- +CreatCard("@/static/image/work8.jpg","HTML CSS","фирма Sage","Описание: Адаптивный","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/Maket/")  
        //- +CreatCard("@/static/image/craze.png","HTML CSS JS","фирма Craze","Описание: Старый обычный сайт, адаптивный","Открыть <~>",false,"Cached >=","https://xarn0.github.io/web-layout/")
        //- +CreatCard("@/static/image/Leo.png","HTML Css","фирма Leo","Описание: Старый обычный сайт, неадаптивный","Открыть <~>",false,"Cached >=","https://xarn0.github.io/web-layout-1/")
        //- +CreatCard("@/static/image/glass.jpg","HTML CSS ","Стеклянные хижины","Описание: Старый обычный сайт, адаптивный","Открыть <~>",false,"Cached >=","https://xarn0.github.io/layout_Hut/")



</template>
<script>
export default {
	name: "works-apps-big",
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.worksApps {
	&__content {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		align-items: flex-start;
	}
	.card {
		align-self: start;
	}
}
.project__btn {
	margin-left: 16px;
}
</style>
