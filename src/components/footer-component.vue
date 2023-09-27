<template lang="pug">
footer.footer.public_margin 
    hr
    .container.footer__container 
        .footer__content
            .footer__text
                p.footer__logo 
                    span { 
                    span.header__name Vladislav
                    span :
                    span.header__nik Xarn0 
                    span } 
                p Telegram:
                p.footer__telegram. 
                    @tot_91
                p Web front-end developer
            .footer__media
                h3 media
                ul
                    li 
                        a(href="https://github.com/Xarn0",target="_blank")
                            img(src="@/static/icon/github.svg", alt="", srcset="") 
                    li 
                        a(href="mailto:madira_a@mail.ru",target="_blank")
                            img(src="@/static/icon/mail.svg", alt="", srcset="") 
                    li 
                        a(href="http://t.me/tot_91",target="_blank")
                            img(src="@/static/icon/telegram.svg", alt="", srcset="") 
        p.footer__footer. 
            © Copyright 2023. Made by Xarn0



</template>

<script>

export default{
    name:"footer-Component",
    data(){
        return{

        }
    }
}

</script>

<style scoped lang="scss">

.footer{
    p{
        margin-bottom: 10px;
    }
    padding-top: 20px;
    &__container{
      padding-top: 40px;  
    }
    
    &__content{
        display: flex;
        justify-content: space-between;
    }
    &__media{
        >h3{
            margin-bottom: 13px;
            text-transform: capitalize;
            font-size: 24px;
            font-weight: 500;
            color: #fff;
        }
        >ul{
            display: flex;
            list-style-type: none;
            gap: 15px;
            justify-content: center;
        }
    }
    &__telegram{
        font-size: 27px;
        &::first-letter{
            font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            margin-right: 2px;
        }
    }
    &__logo{
        font-size: 27px;
        
    }
    &__footer{
        padding-top: 30px;
        margin-bottom: 0 !important;
        padding-bottom: 5px;
    }
}
</style>