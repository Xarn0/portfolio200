<template lang="pug">
include ../assets/pugmix/mixin.pug

section.container
    +CreateH("projects",true)
    .project-list
        +CreatCard("@/static/image/flore.jpg","HTML SCSS Pug VUE","floristman","Описание: Верстка","Live <~>",true,"Cached >=", "https://xarn0.github.io/newWorkWeb/") 
        +CreatCard("@/static/image/glass.jpg","HTML CSS","Frelanser","Описание","Live <~>",true,"Cached >=", "https://xarn0.github.io/work8/")   
        +CreatCard("@/static/image/glass.jpg","HTML CSS","Frelanser","Описание","Live <~>",true,"Cached >=", "https://xarn0.github.io/Maket/")  
</template>


<script>

export default{
    name:"home-project"
}

</script>
<style scoped lang="scss">
.project-list{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  
    padding-bottom: 50px;
}
.project__btn{
    margin-left: 16px;
}
</style>