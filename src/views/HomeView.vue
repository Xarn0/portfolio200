<template lang="pug">
include ../assets/pugmix/mixin.pug
div(class="home")
  section(class="")
    homeAbout
    homeProject
    homeSkills
    homeAboutPreview
      slot
        +CreateH("about-me")
    homeContact
      slot
        +CreateH("contacts")
    
</template>

<script>
// @ is an alias to /src
import homeAbout from '@/components/home-about.vue'
import homeProject from '@/components/home-project.vue'
import homeSkills from '@/components/home-skills.vue'
import homeAboutPreview from '@/components/home-about-preview.vue'
import homeContact from '@/components/home-contact.vue'

export default{
  components:{
    homeAbout,
    homeProject,
    homeSkills,
    homeAboutPreview,
    homeContact
    
  }
}

</script>
