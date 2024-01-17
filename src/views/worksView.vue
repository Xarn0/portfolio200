<template lang="pug">
include ../assets/pugmix/mixin.pug
.container
    div.public_margin      
        +CreatBread("Проекты","Список моих проектов")
    div.btn__actions
        button(@click="nameComponent='worksSmall'", :class="{'active': (nameComponent=='worksSmall'? true : false )}") Тестовые задание
        button(@click="nameComponent='worksAppsBig'", :class="{'active': (nameComponent=='worksAppsBig'? true : false )}") Прочие работы
    Transition(name="animate" , mode="out-in")
        component(:is="nameComponent")
    //- worksAppsBig
    //- worksSmall
</template>
<script>
import worksAppsBig from '@/components/works-components/works-apps-big.vue';
import worksSmall from '@/components/works-components/works-small.vue';
export default{
    data(){
        return{
            nameComponent:'worksAppsBig'
        }
    },
    components:{
        worksAppsBig,worksSmall
    }
}



</script>
<style scoped lang="scss">
.container{
    text-align: left;
}
.breadCrouh{

}
.animate-enter,.animate-leave-to{
  opacity: 0;
}

.animate-enter-active,.animate-leave-active{
  transition: opacity .7s cubic-bezier(0.25, 0.46, 0.45, 0.54);
}
.btn__actions{
    margin-top: 20px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    button{
        padding: 20px;
        outline: none;
        opacity: .5;
        border: 1px solid #ccc;
        background:transparent;
        border-radius: 15px;
        font-size: 18px;
        cursor: pointer;
    }
    button.active{
        color: #fff;
        opacity: 1;
        border: 1px solid #C778DD;
    }
}
</style>
