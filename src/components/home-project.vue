<template lang="pug">
include ../assets/pugmix/mixin.pug

section.container
    +CreateH("projects",true)
    .project-list
        +CreatCard("@/static/image/lawyer.jpeg","HTML SCSS Pug VUE","lawyer","Описание: Верстка ","Live <~>",false,"Cached >=", "https://xarn0.github.io/lawyer/") 
        //- +CreatCard("@/static/image/work8.jpg","HTML CSS","Sage","Описание: Адаптивный","Live <~>",false,"Cached >=", "https://xarn0.github.io/Maket/")  
        +CreatCard("@/static/image/fler.jpg","HTML CSS","Frelanser","Описание","Live <~>",false,"Cached >=", "https://xarn0.github.io/work8/")   
        //- +CreatCard("@/static/image/glass.jpg","HTML CSS","Frelanser","Описание","Live <~>",false,"Cached >=", "https://xarn0.github.io/Maket/")  
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