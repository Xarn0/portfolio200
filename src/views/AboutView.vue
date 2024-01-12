<template lang="pug">
include ../assets/pugmix/mixin.pug
.container
    div.public_margin     
        +CreatBread("Обо мне","Кто я?")
    homeAboutPreview.public_margin
      slot
          +CreateH("Обо мне",false,false) 
    aboutSkills.public_margin
</template>

<script>
import homeAboutPreview from '@/components/home-about-preview.vue';
import aboutSkills from '@/components/about-components/about-skills.vue';
export default {
  components:{
    homeAboutPreview,
    aboutSkills
  }
}



</script>


<style lang="scss" scoped>
P{
  text-align: left;
}
.homeAbouPreview{
  padding: 0;
}
</style>
