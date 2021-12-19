<template>
    <div id="app">
        <TodoHeader></TodoHeader>
        <router-view></router-view>
        <TodoFooter ></TodoFooter>
    </div>
</template>
<script>
   
    import TodoHeader from './components/TodoHeader.vue'
    import TodoFooter from './components/TodoFooter.vue'

    export default{
       
    components:{
        'TodoHeader' : TodoHeader,
        'TodoFooter' : TodoFooter
    }
}
</script>
<style>
  /* 전체 영역을 통틀어서 스타일 정의*/
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');

* {font-family: 'Nanum Gothic', sans-serif;}


</style>    