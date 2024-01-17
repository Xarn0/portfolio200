<template lang="pug">
include ../../assets/pugmix/mixin.pug
.conteiner.worksSmall.public_margin
    .worksSmall__header
        +CreateH("Тестовые задание",false,false)
    .worksSmall__content.public_margin 
        +CreatCard("@/static/image/tz1.png","HTML SCSS Pug VUE VUEX VUE-router","Тестовое задание №1 ","Описание: В этом тестовом задание было реализовано следующие, панели связанные между собой, при нажатие на правую панель на любой цвет квадрата он удалиться, при нажатие кнопки сортировать, все квадратики перемешиваются, в левой панели можно добавить квадратики, можно изменить их цвет, можно их отключить(как строчку, так и весь блок с квадратами) ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/proContent/")
        +CreatCard("@/static/image/tz2.png","HTML SCSS Pug VUE VUEX VUE-router","Тестовое задание №2 ","Описание: Здесь реализовал подобие мини-игры, сделано вращение барабана, и выводит  комбинации(Их порядка 15-20), сделал подcветку комбинаций, когда у вас закончится монеты игра остановится, так-же можно менять ставку каждого круга 'снизу в левом углу'(Но у вас не получится изменить ставку если она больше количества ваших монет) ","Открыть <~>",false,"Cached >=", "https://xarn0.github.io/royal-mini-game/")  
    


</template>


<script>


export default{
    name:"works-small"
}



</script>


<style lang="scss" scoped>
.project__btn{
    align-self: start;
}
.worksSmall{
    &__content{
        display: flex;
        flex-wrap: wrap; 
        gap: 10px;
    }} 
</style>
