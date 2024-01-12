<template lang="pug">
include ../../assets/pugmix/mixin.pug
.conteiner.worksApps.public_margin
    .worksApps__header 
        +CreateH("Работки",false,false)
    .worksApps__content.public_margin 
        +CreatCard("@/static/image/lawyer.jpeg","HTML SCSS Pug VUE","Юристы","Описание: Верстка ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/lawyer/") 
        +CreatCard("@/static/image/OVE.jpg","HTML CSS ","фирма O.A.DEVOLD","Описание: Обычнвя верстка, неадаптивная ","Открыть <~>",false,"Cached >=","https://xarn0.github.io/tem-25/")
        +CreatCard("@/static/image/flore.jpg","HTML SCSS Pug VUE","Флорист","Описание: Верстка","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/newWorkWeb/") 
        +CreatCard("@/static/image/fler.jpg","HTML CSS","Фрилансер","Описание: Адаптивный ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/work8/")   
        +CreatCard("@/static/image/work8.jpg","HTML CSS","фирма Sage","Описание: Адаптивный","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/Maket/")  
        +CreatCard("@/static/image/craze.png","HTML CSS JS","фирма Craze","Описание: Старый обычный сайт, адаптивный","Открыть <~>",false,"Cached >=","https://xarn0.github.io/web-layout/")
        +CreatCard("@/static/image/Leo.png","HTML Css","фирма Leo","Описание: Старый обычный сайт, неадаптивный","Открыть <~>",false,"Cached >=","https://xarn0.github.io/web-layout-1/")
        +CreatCard("@/static/image/glass.jpg","HTML CSS ","Стеклянные хижины","Описание: Старый обычный сайт, адаптивный","Открыть <~>",false,"Cached >=","https://xarn0.github.io/layout_Hut/")



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
