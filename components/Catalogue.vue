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
  <div class="layout">
    <h2>中华人民共和国劳动法</h2>
    <p v-for="chapter in chapters" :key="chapter">
      {{ chapter }}
    </p>
  </div>
</template>

<style scoped>
.layout {
  width: 320px;
}
</style>
