<template lang="pug">
header.header.container
    .header__line 
        span.header__icon 
        span.header__icon 
        span.header__icon 
    nav.header__navigator 
        ul.header__list
            li.header__item 
                span { 
                span.header__name Vladislav
                span :
                span.header__nik Xarn0 
                span }
               
            li.header__item
                router-link(:to="{name:'home'}").
                    {{ burgerMenu.home }}
            li.header__item
                router-link(:to="{name:'works'}").
                    {{ burgerMenu.works }} 
                
            li.header__item
                router-link(:to="{name:'about'}").
                      {{ burgerMenu.about }} 
               
            li.header__item
                router-link(:to="{name:'contact'}").
                       {{ burgerMenu.contact }} 
                
            li.header__item
                select.header__select
                    option(value="ru") ru 
                    option(value="en") en
        
        div(@click="burgerContent = !burgerContent ").adaptive-hav
                .logo 
                    .header__item 
                            span { 
                            span.header__name Vladislav
                            span :
                            span.header__nik Xarn0 
                            span }       
                .burger
                    transition(name="burger-name")
                        ul(v-show="burgerContent").burger__content
                            ul.burger__list 
                                    router-link(:to="{name:'home'}").
                                                {{ burgerMenu.home }}
                                    
                                    router-link(:to="{name:'works'}").
                                                {{ burgerMenu.works }} 
                                            
                                
                                    router-link(:to="{name:'about'}").
                                                {{ burgerMenu.about }} 
                                        
                                    router-link(:to="{name:'contact'}").
                                                {{ burgerMenu.contact }} 
                                        
                                        
                                    
                            



</template>

<script>





export default {
    name: "my-header",
    data(){
        return{
            burger:false,
            burgerContent:false,
            burgerMenu:{
                home:"home",
                works:"works",
                about:"about-me",
                contact:"contacts"
            }
        }
    }
}
</script>

<style lang="scss" >
@import "@/assets/scss/style";
.header{

    &__line{
        position: absolute;
        top:0;
       
        height: 240px;
        left: 20px;
        display: flex;
        flex-direction: column;
        gap:7px;
        // align-items: flex-end;
        // justify-content: flex-end;
        &::before{
            content: "";
            height: 40%;
            width: 1.87px;
            display: block;
            margin: 0 auto;
            background: #ABB2BF
        }
       
    }
    &__icon{
        border-radius: 50%;
        width: 35px;
        height: 35px;
       
       
        &:nth-of-type(1){
           background: url("../static/icon/github.svg");
           background-repeat: no-repeat;
           background-size: cover;
           background-position: center;  
           
        }
        &:nth-of-type(2){
           background: url("../static/icon/internet.svg");
           background-repeat: no-repeat;
           background-size: cover;
           background-position: center;  
           
        }
    }

}
li.header__item+li.header__item {
    &::before {
        content: "#";
        font-weight: 400px;
        color: $color-header-link-icon;
    }
}

li.header__item:last-child {
    
    &::before {
        content: '' !important;
        
    }
}
.burger-name-enter,.burger-name-leave-to{
  opacity: 0;
}

.burger-name-enter-active,.burger-name-leave-active{
  transition: opacity 1.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>