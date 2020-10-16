<template>
   <section>
       <header class="top_tips">
           <span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
           <span class="num_tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
       </header>

       <div v-if="fatherComponent == 'home'">
            <div class="home_logo item_container_style"></div>           
            <router-link to="/item" class="start button_style"></router-link>   
       </div>

       <div v-if="fatherComponent == 'item'">
           <h2>我是答题</h2>
           <span @click="submitAnswer">下一个</span>
       </div>
   </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'itemcontainer',
    props: ['fatherComponent'],
    computed: mapState([
        'itemNum', //第几题
        'level', //第几周
        'itemDetail', //题目详情
        'timer' //计时器
    ]),
    methods: {
        submitAnswer() {
           this.$router.push('score') 
        }
    },
}
</script>

<style lang="less">
    .top_tips {
        position: absolute;
        height: 7.35rem;
        width: 3.25rem;
        top: -1.3rem;
        right: 1.6rem;
        background: url(../images/WechatIMG2.png) no-repeat;
        background-size: 100% 100%;
        z-index: 10;
        .num_tip{
            position: absolute;
            left: 0.4rem;
            bottom: 1.1rem;
            height: 0.7rem;
            width: 2.5rem;
            font-size: 0.6rem;
            font-family: '黑体';
            font-weight: 600;
            color: #a57c50;
            text-align: center;
        }
    }
    .item_container_style {
        height: 11.625rem;
        width: 13.15rem;
        background-repeat: no-repeat;
        position: absolute;
        top: 4.1rem;
        left: 1rem;
    }
    .home_logo {
        background-image: url(../images/1-2.png);
        background-size: 13.142rem 100%;
        background-position: right center;
    }
    .button_style {
        display: block;
        height: 2.1rem;
        width: 4.35rem;
        background-size: 100% 100%;
        position: absolute;
        top: 16.5rem;
        left: 50%;
        transform: translateX(-50%);
        background-repeat: no-repeat;
    }
    .start {
        background-image: url(../images/1-4.png);
    }
</style>