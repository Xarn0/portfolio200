<template lang="pug">
include ../assets/pugmix/mixin.pug
section.homeSkills.container
    .homeSkills__item 
        +CreateH("skills")
    .homeSkills__item.homeSkills__item-list
        .homeSkills__icon
            .homeSkills__icon-react
                .homeSkills__icon-react-container
                    span.homeSkills__icon-span
        .homeSkills__skills
            h3 Языки и фреймворки
            p Инструменты и ПО
            ul
                li
                    +CreateSkill("74","Javascript","../static/icon/javascript.svg")
                li
                    +CreateSkill("60","Python","../static/icon/python.svg")
                li
                    +CreateSkill("50","PHP", "../static/icon/php.svg")
                li
                    +CreateSkill("60","Django", "../static/icon/django.svg")
                li
                    +CreateSkill("70","Vue", "../static/icon/vue.svg")
                
                
            
           
</template>

<script>

export default{
    name:"home-Skills",
    data(){
        return{

        }
    }
}


</script>

<style lang="scss" scoped>
ul{
    display: flex;
    flex-direction: column;
    gap: 7px;
    list-style-type: none;

}

.homeSkills{
    // display: flex;
    padding: 70px 0;
    &__item{
        &-list{
            display: flex;
            gap: 5px;
            justify-content: space-between;
           
        }
    
    }
    &__skills{
        width: 50%;
        >h3{
            text-align: left;
            font-size: 27px;
            color: white;
            margin-bottom: 7px;
        }
        >p{
            text-align: left;
            font-size: 22px;
            color: white;
            margin-bottom: 20px;
            font-weight: 500;
        }
    }
    &__icon{
        width: 600px;
        margin-top: 31px;
        &-react{
            position: relative;
            margin: 0 auto;
            
            
            width: 340px;
            height: 70%;
            &::before{
                content: "";
                background: url(../static/image/homeaboutafter.png);
                background-size: contain;
                position: absolute;
                top:-10px;
                width: 63px;
                height: 63px;
                left: -20px;
            }
            &::after{
                content: "";
                position: absolute;
                border:1px solid #ccc;
                width: 52px;
                height: 52px;
                right: -20px;
                bottom: -20px;
            }

        }
        &-react-container{
            position: relative;
            inset: 5px ;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            &::before{
                content: "";
                position: absolute;
                top: -30px;
                right:-10px;
                width: 86px;
                border:1px solid #ccc;
                height: 86px;
            }
            &::after{
                content:'' ;
                position: absolute;
                background: url(../static/image/homeaboutbefore.svg);
                background-size: contain;
                bottom: -27px;
                width: 113px;
                height: 113px;
                left: -31px;
            }
        }
        &-span{
                position: absolute;
                margin-left: 20px;
                margin-top: -20px;
               
                display: block;
                
                width: 63px;
                height: 63px;
                background: url(../static/image/homeaboutafter.png);
                background-size: contain;
        }
    }

}
</style>
