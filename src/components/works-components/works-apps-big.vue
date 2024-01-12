<template lang="pug">
include ../../assets/pugmix/mixin.pug
.conteiner.worksApps.public_margin
    .worksApps__header 
        +CreateH("Работки",false,false)
    .worksApps__content.public_margin 
        +CreatCard("@/static/image/lawyer.jpeg","HTML SCSS Pug VUE","lawyer","Описание: Верстка ","Live <~>",false,"Cached >=", "https://xarn0.github.io/lawyer/") 
        +CreatCard("@/static/image/OVE.jpg","HTML CSS ","O.A.DEVOLD","Описание: Обычнвя верстка, неадаптивная ","Live <~>",false,"Cached >=","https://xarn0.github.io/tem-25/")
        +CreatCard("@/static/image/flore.jpg","HTML SCSS Pug VUE","floristman","Описание: Верстка","Live <~>",false,"Cached >=", "https://xarn0.github.io/newWorkWeb/") 
        +CreatCard("@/static/image/fler.jpg","HTML CSS","Frelanser","Описание: Адаптивный ","Live <~>",false,"Cached >=", "https://xarn0.github.io/work8/")   
        +CreatCard("@/static/image/work8.jpg","HTML CSS","Sage","Описание: Адаптивный","Live <~>",false,"Cached >=", "https://xarn0.github.io/Maket/")  
        +CreatCard("@/static/image/craze.png","HTML CSS JS","Craze","Описание: Старый обычный сайт, адаптивный","Live <~>",false,"Cached >=","https://xarn0.github.io/web-layout/")
        +CreatCard("@/static/image/Leo.png","HTML Css","Leo","Описание: Старый обычный сайт, неадаптивный","Live <~>",false,"Cached >=","https://xarn0.github.io/web-layout-1/")
        +CreatCard("@/static/image/glass.jpg","HTML CSS ","The glass huts","Описание: Старый обычный сайт, адаптивный","Live <~>",false,"Cached >=","https://xarn0.github.io/layout_Hut/")



</template>
<script>

export default {
    name:"works-apps-big",
    data(){
        return{

        }
    }
}

</script>

<style lang="scss" scoped>
.worksApps{
    &__content{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: flex-start;
    }
    .card{
        align-self: start;
    }
}
.project__btn{
    margin-left: 16px;
}
</style>
