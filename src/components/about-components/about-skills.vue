<template lang="pug">
include ../../assets/pugmix/mixin.pug
.container.aboutSkills
    .aboutSkills__header 
        +CreateH("skills",false,false)
    .aboutSkills__content.public_margin 
        +createSkill("Languages","Python Javascript PHP ")
        +createSkill("Other","HTML CSS jinja scss")
        +createSkill("Tools","VSCode Linux Git Font Awesome boxicons")
        +createSkill("Databases","SQL MYSQL")
        +createSkill("Frameworks","VUE Django")


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
