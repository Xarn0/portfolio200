<template lang="pug">
include ../../assets/pugmix/mixin.pug
.conteiner.worksSmall.public_margin
    .worksSmall__header
        +CreateH("small-projects",false,false)
    .worksSmall__content.public_margin 
        +CreatSmallbtn("Discord.js","Bot boilerplate","Start creating scalable discord.js bot with typescript in seconds","github")
        +CreatSmallbtn("Discord.js","Bot boilerplate","Start creating scalable discord.js bot with typescript in seconds","github")
        +CreatSmallbtn("Discord.js","Bot boilerplate","Start creating scalable discord.js bot with typescript in seconds","github")
        +CreatSmallbtn("Discord.js","Bot boilerplate","Start creating scalable discord.js bot with typescript in seconds","github")
        +CreatSmallbtn("Discord.js","Bot boilerplate","Start creating scalable discord.js bot with typescript in seconds","github")
    


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
