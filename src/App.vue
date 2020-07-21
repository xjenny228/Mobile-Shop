<template>
  <div id="app">
    <!-- 头部，固定在顶部不动 -->
    <div class="header">
      <mt-header fixed title="移动商城"></mt-header>
    </div>
    <!-- 主体部分放置不同的组件 -->
    <div class="main">
      <h1>主体部分</h1>
    </div>
    <!-- 底部路由，用于切换不同的组件 -->
    <div class="tabbar">
      <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item mui-active" href="#tabbar">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-chat">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">9</span>
          </span>
          <span class="mui-tab-label">消息</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-contact">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">通讯录</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-map">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">设置</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 40px;
}
</style>
