<template lang="pug">
include ../../assets/pugmix/mixin.pug
.container.aboutSkills
    .aboutSkills__header 
        +CreateH("Навыки",false,false)
    .aboutSkills__content.public_margin 
        +createSkill("Языки","Python Javascript PHP ")
        +createSkill("Разметка","HTML CSS jinja scss")
        +createSkill("Инструменты","VSCode Linux Git Font Awesome boxicons")
        +createSkill("Базы данных","SQL MYSQL")
        +createSkill("Фреймворки","VUE Django Nuxt2 djoser")


</template>
<script>

export default {
    name: "aboutSkills",

}


</script>
<style lang="scss" scoped>
.aboutSkills {
    &__header {
        padding: 5px;
    }

    &__content {
        
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
}
</style>
