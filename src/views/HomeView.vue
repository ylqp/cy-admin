<script setup></script>

<template>
  <div class="container">
    <main>
      <aside></aside>
      <div class="content">
        <header>
          <h1 class="fb">welcome to ...</h1>
        </header>
        <section class="data-section">
          <div class="left"></div>
          <div class="right"></div>
        </section>
        <section>
          <router-link class="user-link" to="/zxh">张小辉</router-link>
          <router-link class="user-link" to="/cmm">程苗苗</router-link>
          <router-link class="user-link" to="/dyx">董云肖</router-link>
          <router-link class="user-link" to="/lxz">刘晓真</router-link>
          <router-link class="user-link" to="/nxf">牛晓芳</router-link>
          <router-link class="user-link" to="/zyz">赵一竹</router-link>
          <router-link class="user-link" to="/xf">熊丰</router-link>
          <router-link class="user-link" to="/zjb">张金保</router-link>
        </section>
      </div>
    </main>
    <!-- <aside class="right-aside">
      <section class="items">
        <div class="pink"></div>
        <div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section class="calendar"></section>
    </aside> -->
  </div>
</template>
<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  background-color: #fbf4ef;
  main {
    width: 75%;
    height: 100%;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.02);
    aside {
      height: 100%;
      width: 20%;
      border-right: 1px solid #eef0f4;
    }
    .content {
      flex: 1;
      padding: 20px;
    }
  }
}
.data-section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left {
    width: 40%;
    height: 150px;
    background: RGBA(241, 245, 255, 1);
    border-radius: 8px;
  }
  .right {
    margin-left: 20px;
    width: 40%;
    flex: 1;
    height: 150px;
    background: RGBA(241, 245, 255, 1);
    border-radius: 8px;
  }
}

.right-aside {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .items {
    width: 300px;
    margin: auto;
    display: flex;
    .pink {
      width: 40%;
      border-radius: 8px;
      height: 400px;
      background-color: RGBA(255, 219, 207, 1);
    }
  }
  .calendar {
    margin: auto;
    width: 300px;
    height: 300px;
    background-color: #fff;
    border-radius: 8px;
  }
}

.user-link {
  display: block;
  height: 56px;
  line-height: 56px;
  border-radius: 4px;
  border: 1px solid #efefef;
  margin-top: 20px;
  padding-left: 20px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.02);
}
</style>
