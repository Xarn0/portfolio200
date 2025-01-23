<template lang="pug">
include ../assets/pugmix/mixin.pug

section.container
    +CreateH("Проекты",true)
    .project-list
        +CreatCard("@/static/image/agencyStudio.jpg","HTML SCSS vuetify VUE","Агенство","Описание: Верстка ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/agencystudio/") 
        +CreatCard("@/static/image/tz4.png","HTML CSS JS","Тола","Описание: Верстка ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/tz4/") 

        +CreatCard("@/static/image/lawyer.jpeg","HTML SCSS Pug VUE","lawyer","Описание: Верстка ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/lawyer/") 
        +CreatCard("@/static/image/whitetex.png","HTML SCSS vuetify VUE","белая техника","Описание: Верстка ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/whitetechnique/") 
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
