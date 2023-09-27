<template lang="pug">
include ../assets/pugmix/mixin.pug
section.homeAbout.container 
    .homeAbout__item
        .homeAbout__block
            .homeAbout__data
                h3 Xarn0  <span>front-end</span>  и не большой  <span>back-end developer</span> 
                p Он создает адаптивные веб-сайты
                router-link(:to="{name:'contact'}").link-header-click-me 
                    +CreateBtn("Контакт со мной!")
        .homeAbout__block
            div.block__items
                div
                    img(src="../static/image/homeaboutimage.png")
            div
                p.prof В настоящее время работает над <span> Portfolio </span>
    .homeAbout__text 
        .homeAbout__content 
            p.
                {{"С большой мощностью, приходит большой счет за электричество"}}
            p - Dr. Who
           
            

</template>

<script>
export default{
    name:"home-Abot",
    data(){
        return{
            item:'lorrnnd'
        }
    },
    methods:{
        
    },
    filters:{
        fo(item){
            // let content = item.length;
            // console.log(content)
            return item[0]
        }
    }
}

</script>
<style scoped lang="scss">
@import "@/assets/scss/style";


.link-header-click-me{
    cursor: pointer !important;
}

.link-header-click-me:hover button{
    color:red !important;
}


.homeAbout{
    
    &__item{
      display: flex;
    
    }
   
    &__block{
        &:nth-child(1){
          display: flex;
          flex-direction: column;
          justify-content: center;
         
        }
        &:nth-child(2){
            >div{
                 
                img{
                    width: 100%;
                    object-fit: cover;
                }
           
                
                >p{
                    margin-left: 15px;
                    text-align-last: left;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 5px;
                    justify-content: left;
                    font-family:"fira-code-medium" ;
                    align-items: center;
                    @media(max-width:1054px) {

                        
                    }
                    &::before{
                        content: "";
                        display: inline-block;
                        width: 16px;
                        display: block;
                        margin-right: 5px;
                        height: 16px;
                        background-color: $color-header-link-icon;
                    }
                    span{
                        color: #fff;
                        font-family:"fira-code-SemiBold" ;
                        margin-left: 5px;
                    }
                }
            }
        }
        .block__items{
            position: relative;
         
            div{
                z-index: 4;
                position: relative;
            }
            &::before{
                content:url('@/static/image/homeaboutbefore.svg');
                position: absolute;
                top: 0;
                left: 0;
                z-index: 3;
            }
            &::after{
                content:url('@/static/image/homeaboutafter.png');
                position: absolute;
                bottom: 20px;
                right: 40px;
                z-index: 5;
            }
        }
       
    }
    &__data{
        
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 20px;
       
        p{
            text-align: left;
            
        }
        h3{
            
            max-width: 700px;
            text-align: left;
            letter-spacing: 4px;
            color:#fff;
            line-height: 42px;
            font-size: 2rem;
            span{
                color:$color-header-link-icon ;
            }
        }
    }
    &__text{
       padding-top: 70px; 
       padding-bottom: 70px;
       display: block;
    }
    &__content {
        width: 720px;
        
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        >p{
            border: 1px solid #fff;
            font-size: 24px;
            font-family:"fira-code-medium" ;
            &:first-child{
                text-align:right;
                padding: 32px;
                position: relative;
                box-sizing: border-box;
                &:before{
                    content: url("@/static/image/caw.svg");
                    position: absolute;
                    top:-17px;
                    width: 50px;
                    height: 50px;
                    background: inherit;
                    text-align: center;
                    left:10px;
                }
                &:after{
                    content: url("@/static/image/caw.svg");
                    position: absolute;
                    right: 7px;
                    bottom: -29px;
                    width: 50px;
                    height: 50px;
                    background: inherit;
                    text-align: center;
                }
            }
            &:last-child{
                text-align: right;
                padding: 16px;
               
                align-self: end;
                border-top: none;
            }
        }
    }
}
</style>