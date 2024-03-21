<script lang="ts" setup>
import { ref } from 'vue';

const chapters = ref([
  '第一章　总则',
  '第二章　促进就业',
  '第三章　劳动合同和集体合同',
  '第四章　工作时间和休息休假',
  '第五章　工资',
  '第六章　劳动安全卫生',
  '第七章　女职工和未成年工特殊保护',
  '第八章　职业培训',
  '第九章　社会保险和福利',
  '第十章　劳动争议',
  '第十一章　监督检查',
  '第十二章　法律责任',
  '第十三章　附则'
])
</script>

<template>
  <div class="layout flex-column flex-align">
    <h2>中华人民共和国劳动法</h2>
    <p>
      （1994年7月5日第八届全国人民代表大会常务委员会第八次会议通过　根据2009年8月27日第十一届全国人民代表大会常务委员会第十次会议《关于修改部分法律的决定》第一次修正　根据2018年12月29日第十三届全国人民代表大会常务委员会第七次会议《关于修改〈中华人民共和国劳动法〉等七部法律的决定》第二次修正）
    </p>
    <h3>目 录</h3>
    <div class="chapters flex-column">
      <p v-for="chapter in chapters" :key="chapter">
        {{ chapter }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.layout {
  width: 600px;
}

.chapters p:hover {
  cursor: pointer;
  color: skyblue;
}
</style>
