<template lang="pug">
include ../assets/pugmix/mixin.pug
section.homeAbouPreview.container
    .homeAbouPreview__container
        .homeAbouPreview__header
            //- +CreateH("about-me")
            slot
        .homeAbouPreview__content.homeAbouPreview__content-list
            .homeAbouPreview__text
                h3 Привет, я Владислав(Xarn0) !
                p.
                   Я фронтенд-разработчик-самоучка, живу в Кемерово, Россия. Я могу разрабатывать адаптивные веб-сайты с нуля
                p.
                    Превращение моего творчества и знаний в веб-сайты было моей страстью уже больше года. Я помогал различным клиентам установить свое присутствие в Интернете. Я всегда стремлюсь узнавать о новейших технологиях и фреймворках.
            .homeAbouPreview__img
                img(src="../static/image/homeaboutpreview.png", alt="4", srcset="")   

</template>
<style scoped lang="scss">
.homeAbouPreview{
    padding-bottom: 20px;
    &__content{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      
    }
    &__text{
        width: 500px;
        text-align: left; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        >h3{
            margin-bottom: 30px;
        }
        >p{
            margin-bottom: 23px;
        }
    }
    &__img{
       width: 300px;
       margin-top: -80px;
       position: relative;
       &::before{
        content: "";
        width: 70px;
        height: 70px;
        top: 20px;
        left: -10px;
        background: url(../static/image/homeaboutafter.png);
        background-size: cover;
        position: absolute;
       }
       &::after{
        content: "";
        
        width: 76px;
        height: 40px;
        top: 50%;
        right: 0;
        background: url(../static/image/homeaboutafter.png);
        background-size: cover;
        position: absolute;
       }
       
        img{
            width:100%;
            object-fit: cover;
            display: block;
            
            
           
        }
      
    } 
}


</style>