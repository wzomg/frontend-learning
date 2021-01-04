<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!-- router-link 是一个 vue-router 中已经内置的组件，它会被渲染成一个 a 标签 -->
    <!-- 打上一个 tag 标签后，该元素会变成tag指定的标签
     当 router-link 对应的路由匹配成功时，会自动给当前元素设置一个 router-link-active 的 class，设置 active-class 可以修改默认的名称
     -->
    <!--<router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
    <!--<router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
    <!--<router-link to="/home" tag="button" replace>首页</router-link>-->
    <!--<router-link to="/about" tag="button" replace>关于</router-link>-->
    <!--<button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!--<router-link :to="'/user/'+userId">用户</router-link>-->
    <!--<router-link to="/profile">档案</router-link>-->
    <!--<router-link :to="{path: '/profile', query: {name: 'why', age: 18, height: 1.88}}"></router-link>-->
    <!--档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!-- router-view 会根据当前的路径，动态渲染出不同的组件 -->
    <!-- keep-alive 是vue 内置的一个组件，可使被包含的组件保留状态，或避免重新被渲染 -->
    <!-- router-view 也是一个组件，若直接被包含在 keep-alive 里，则所有路径匹配到的视图组件都会被缓存 -->
    <!-- 排除多个组件不被缓存 -->
    <keep-alive exclude="Profile,User">
      <!-- 单标签 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'zhangsan',
      }
    },
    methods: {
      homeClick() {
        // 通过代码的方式修改路由 vue-router
        // push => pushState ×
        // this.$router.push('/home')
        this.$router.replace('/home').catch(err => err)
        console.log('homeClick');
      },
      aboutClick() {
        // this.$router.push('/about')
        this.$router.replace('/about').catch(err => err)
        console.log('aboutClick');
      },
      userClick() {
        this.$router.push('/user/' + this.userId).catch(err => err)
      },
      profileClick() {
        this.$router.push({
          path: '/profile',
          query: {
            name: 'kobe',
            age: 19,
            height: 1.87
          }
        }).catch(err => err)
      }
    }
  }
</script>

<style>
  /*.router-link-active {*/
  /*color: #f00;*/
  /*}*/

  .active {
    color: #f00;
  }
</style>
