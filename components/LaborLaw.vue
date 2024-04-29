<script lang="ts" setup>
import { ref, watch } from 'vue'
import { ItemType } from '../interface';
import { laborLawItems } from '../law/labor'

const resetItems = () => {
  return JSON.parse(JSON.stringify(laborLawItems))
}

const contentItems = ref()
contentItems.value = resetItems()

const itemClick = (item: ItemType) => {
  let el
  if (item.value.includes('catalogue')) {
    el = document.querySelector(`#chapter-${item.value.split('-')[1]}`)
  }
  if (el === null || el === undefined) {
    el = document.querySelector('#labor-title')
  }
  el && el.scrollIntoView()
}

const keyWords = ref('')
const searchByKeyWords = (keyWords: string) => {
  contentItems.value = resetItems()
  const contents: ItemType[] = contentItems.value
    .filter((item: ItemType) => !item.value.includes('catalogue'))
    .filter((item: ItemType) => item.tier === 'content')
    .filter((item: ItemType) => item.content.includes(keyWords))
  contents.forEach((item: ItemType) => {
    item.content = item.content.replaceAll(keyWords, `<span style="background: yellow; font-weight: bold; padding: 0 2px">${keyWords}</span>`)
  })
  if(contents.length === 0) {
    contentItems.value = resetItems()
  } else {
    contentItems.value = contents
  }
}

watch(
  () => keyWords.value,
  (keyWords) => {
    if (keyWords && keyWords.trim().length > 0) {
      searchByKeyWords(keyWords)
    } else {
      contentItems.value = resetItems()
    }
  }
)
</script>

<template>
  <div class="layout">
    <div class="catalogue flex-column flex-align">
      <h2 id="labor-title">《中华人民共和国劳动法》</h2>
      <p style="padding: 0 8px;">
        （1994年7月5日第八届全国人民代表大会常务委员会第八次会议通过　根据2009年8月27日第十一届全国人民代表大会常务委员会第十次会议《关于修改部分法律的决定》第一次修正　根据2018年12月29日第十三届全国人民代表大会常务委员会第七次会议《关于修改〈中华人民共和国劳动法〉等七部法律的决定》第二次修正）
      </p>
      <div class="content-items flex-column">
        <div v-for="item in contentItems" :key="item.value" @click="itemClick(item)">
          <h3 v-if="item.tier === 'title'" :id="item.value" class="flex-c">{{ item.content }}</h3>
          <p v-if="item.tier === 'content'" :class="{ important: item.important }" v-html="item.content"></p>
          <br v-if="item.tier === 'br'" />
        </div>
      </div>
    </div>
    <div class="search-box flex flex-align">
      <input type="text" v-model="keyWords" style="text-align: center;" />
    </div>
  </div>
</template>

<style scoped>
.layout {
  width: 600px;
  padding: 4px 0;
  position: relative;
  z-index: 0;
  padding-bottom: 30px;
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
  padding-bottom: 1px;
}

.search-box input {
  width: 100%;
  margin: 0;
  padding: 0;
  height: 28px;
  border: 1px solid #ccc;
  border-radius: 0;
}

.search-box input:focus-visible {
  border: 1px solid #ccc;
  border-radius: 0!important;
  outline: none;
}
</style>
