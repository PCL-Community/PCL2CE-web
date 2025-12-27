<template>
  <div class="not-found-view">
    <div class="content">
      <h1>404</h1>
      <h2>页面未找到</h2>
      <p>抱歉，您访问的页面不存在。</p>
      <router-link to="/" class="btn">返回首页</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// 404 Not Found view component
</script>

<style scoped>
.not-found-view {
  min-height: calc(100vh - 12rem);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem 4rem;
  background: var(--gradient-dark);
}

.content {
  text-align: center;
  max-width: 600px;
  position: relative;
  z-index: 1;
}

h1 {
  font-size: 8rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1rem;
  line-height: 1;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

h2 {
  font-size: 2rem;
  color: var(--white);
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  background: var(--gradient-primary);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: var(--glass-shadow);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.6);
}

.btn:active {
  transform: translateY(0);
}
</style>
