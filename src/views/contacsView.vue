<template lang="pug">
include ../assets/pugmix/mixin.pug
section.public_margin
    homeContact
        slot
            +CreateH("contacts",false,false)
</template>

<script>
import homeContact from '@/components/home-contact.vue';

export default{
    components:{
        homeContact
    }
}



</script>

<style lang="scss" scoped>
html{
    height: 100vh;
}
.homeContacts {
    height: 50.7vh;
    display: flex;
    flex-direction: column;
    justify-content: center
}
</style>
