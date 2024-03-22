<script lang="ts" setup>
import { ref } from 'vue'
import { ItemType } from '../interface';
import { laborLawItems } from '../law/labor'

const contentItems = ref(laborLawItems)

const itemClick = (item: ItemType) => {
  let el
  if(item.value.includes('catalogue')) {
    el = document.querySelector(`#chapter-${item.value.split('-')[1]}`)
  }
  if (el === null || el === undefined) {
    el = document.querySelector('#labor-title')
  }
  el && el.scrollIntoView()
}

const keyWords = ref('')
const searchByKeyWords = (keyWords: string) => {
  const contents = laborLawItems.filter(item => item.content.includes(keyWords))
  console.log(contents)
}
</script>

<template>
  <div class="layout">
    <div class="catalogue flex-column flex-align">
      <h2 id="labor-title">中华人民共和国劳动法</h2>
      <p>
        （1994年7月5日第八届全国人民代表大会常务委员会第八次会议通过　根据2009年8月27日第十一届全国人民代表大会常务委员会第十次会议《关于修改部分法律的决定》第一次修正　根据2018年12月29日第十三届全国人民代表大会常务委员会第七次会议《关于修改〈中华人民共和国劳动法〉等七部法律的决定》第二次修正）
      </p>
      <div class="content-items flex-column">
        <div v-for="item in contentItems" :key="item.value" @click="itemClick(item)">
          <h3 v-if="item.tier === 'title'" :id="item.value" class="flex-c">{{ item.content }}</h3>
          <p v-if="item.tier === 'content'" :class="{ important: item.important}">{{ item.content }}</p>
          <br v-if="item.tier === 'br'" />
        </div>
      </div>
    </div>
    <div class="search-box flex flex-align">
      <input type="text" v-model="keyWords" />
      <button>⬆️</button>
      <button @click="searchByKeyWords(keyWords)">⬇️</button>
    </div>
  </div>
</template>

<style scoped>
.layout {
  width: 600px;
  padding: 4px 0;
  position: relative;
  z-index: 0;
}

.content-items h3,
.content-items p {
  padding: 8px;
}

.content-items h3:hover,
.content-items p:hover {
  cursor: pointer;
}

.important {
  font-weight: bold;
  color: red;
}

.search-box {
  position: fixed;
  bottom: 0;
  z-index: 1;
  background: #fff;
  width: 100%;
  height: 28px;
  padding-top: 8px;
  padding-bottom: 2px;
}

.search-box input  {
  margin: 0;
  padding: 0;
  margin-right: 4px;
  height: 28px;
  flex: 1;
}

.search-box button {
  margin: 0 4px;
  background: #fff;
  border: 1px solid #ccc;
  height: 32px;
  line-height: 32px;
  width: 32px;
}

.search-box button+button {
  margin-right: 0;
}
</style>
