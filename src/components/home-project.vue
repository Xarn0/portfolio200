<template lang="pug">
include ../assets/pugmix/mixin.pug

section.container
    +CreateH("Проекты",true)
    .project-list
        +CreatCard("@/static/image/agencyStudio.jpg","HTML SCSS vuetify VUE","Юристы","Описание: Верстка ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/agencystudio/") 
        +CreatCard("@/static/image/whitetechnique.43c3745a.jpg","HTML SCSS vuetify VUE","Белая техника","Описание: Верстка ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/whitetechnique/") 

        +CreatCard("@/static/image/lawyer.jpeg","HTML SCSS Pug VUE","lawyer","Описание: Верстка ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/lawyer/") 
        //- +CreatCard("@/static/image/work8.jpg","HTML CSS","Sage","Описание: Адаптивный","Live <~>",false,"Cached >=", "https://xarn0.github.io/Maket/")  
        //- +CreatCard("@/static/image/fler.jpg","HTML CSS","Frelanser","Описание","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/work8/")   
        //- +CreatCard("@/static/image/glass.jpg","HTML CSS","Frelanser","Описание","Live <~>",false,"Cached >=", "https://xarn0.github.io/Maket/")  
</template>

<script>
export default {
	name: "home-project",
};
</script>
<style scoped lang="scss">
.project-list {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;

	padding-bottom: 50px;
}
.project__btn {
	margin-left: 16px;
}
</style>
