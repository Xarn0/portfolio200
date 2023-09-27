<template lang="pug">
include ../assets/pugmix/mixin.pug
.container
    div.public_margin      
        +CreatBread("projects","Список моих проектов")
    worksAppsBig
    worksSmall
</template>
<script>
import worksAppsBig from '@/components/works-components/works-apps-big.vue';
import worksSmall from '@/components/works-components/works-small.vue';
export default{
    components:{
        worksAppsBig,worksSmall
    }
}



</script>
<style scoped>
.container{
    text-align: left;
}
.breadCrouh{

}

</style>
