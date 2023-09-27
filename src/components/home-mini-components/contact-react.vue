<template lang="pug">
.contscts-item 
    h4 Мои  мессенджеры 
    p.telegram {{ telegram }}
    p.mail {{ mail }}

</template>

<script>

export default{
    name:"my-contacts",
    data(){
        return{
            telegram:"@tot_91",
            mail:"xouli@list.ru"
        }
    }
}
</script>
<style scoped lang="scss">
.contscts-item {
    border: 1px solid #ccc;
    padding: 16px;
    text-align: left;
    >h4{
        margin-bottom: 20px;
        font-family:"fira-code-SemiBold" ;
        font-weight: 600;
        color: #fff;
    }
}
p{
    display: flex;
    gap: 10px;
    line-height: 20px;
    margin-bottom: 5px;
    &::before{
        width: 20px;
        background-size: cover;
    }
}
p.telegram{
    
    &::before{
        content:"";
        background-image: url(../../static/icon/telegram.svg);
        color: grey;
    }
}

p.mail{
    &::before{
        content:"";
        background-image: url(../../static/icon/mail.svg);
    }
}
</style>