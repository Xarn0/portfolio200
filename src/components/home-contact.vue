<template lang="pug">
include ../assets/pugmix/mixin.pug
section.homeContacts.container
    .homeContacts__container
        .homeContacts__header 
                slot 
        .homeContacts__content.public_margin
            .homeContacts__text. 
                Меня интересует все ваши предложения. Однако, если у вас есть другая просьба или вопрос, не стесняйтесь обращаться ко мне.
            .homeContacts__contacts
                .homeContacts__ItemContact
                    contacts
</template>

<script>

import contacts from "@/components/home-mini-components/contact-react.vue"

export default{
    components:{
        contacts
    }


}

</script>




<style lang="scss" scoped>
.homeContacts{
    margin-top: 20px;
    &__content{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__text{
        width: 505px;
        text-align: left;
        font-weight: 500;
    }
}



</style>