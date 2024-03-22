<script lang="ts" setup>
import { ref, Ref } from 'vue';

interface ItemType {
  tier: 'title' | 'content';
  content: string;
  value: string;
}

const contentItems: Ref<ItemType[]> = ref([
  { tier: 'title', content: '目 录', value: 'catalogue' },
  { tier: 'content', content: '第一章 总则', value: 'catalogue-1' },
  { tier: 'content', content: '第二章 促进就业', value: 'catalogue-2' },
  { tier: 'content', content: '第三章 劳动合同和集体合同', value: 'catalogue-3' },
  { tier: 'content', content: '第四章 工作时间和休息休假', value: 'catalogue-4' },
  { tier: 'content', content: '第五章 工资', value: 'catalogue-5' },
  { tier: 'content', content: '第六章 劳动安全卫生', value: 'catalogue-6' },
  { tier: 'content', content: '第七章 女职工和未成年工特殊保护', value: 'catalogue-7' },
  { tier: 'content', content: '第八章 职业培训', value: 'catalogue-8' },
  { tier: 'content', content: '第九章 社会保险和福利', value: 'catalogue-9' },
  { tier: 'content', content: '第十章 劳动争议', value: 'catalogue-10' },
  { tier: 'content', content: '第十一章 监督检查', value: 'catalogue-11' },
  { tier: 'content', content: '第十二章 法律责任', value: 'catalogue-12' },
  { tier: 'content', content: '第十三章 附则', value: 'catalogue-13' },
  { tier: 'title', content: '第一章　总则', value: 'chapter-1' },
  { tier: 'content', content: '第一条　为了保护劳动者的合法权益，调整劳动关系，建立和维护适应社会主义市场经济的劳动制度，促进经济发展和社会进步，根据宪法，制定本法。', value: 'chapter1-1' },
  { tier: 'content', content: '第二条　在中华人民共和国境内的企业、个体经济组织（以下统称用人单位）和与之形成劳动关系的劳动者，适用本法。国家机关、事业组织、社会团体和与之建立劳动合同关系的劳动者，依照本法执行。', value: 'chapter1-2' },
  { tier: 'content', content: '第三条　劳动者享有平等就业和选择职业的权利、取得劳动报酬的权利、休息休假的权利、获得劳动安全卫生保护的权利、接受职业技能培训的权利、享受社会保险和福利的权利、提请劳动争议处理的权利以及法律规定的其他劳动权利。', value: 'chapter1-3-1' },
  { tier: 'content', content: '劳动者应当完成劳动任务，提高职业技能，执行劳动安全卫生规程，遵守劳动纪律和职业道德。', value: 'chapter1-3-2' },
  { tier: 'content', content: '第四条　用人单位应当依法建立和完善规章制度，保障劳动者享有劳动权利和履行劳动义务。', value: 'chapter1-4' },
  { tier: 'content', content: '第五条　国家采取各种措施，促进劳动就业，发展职业教育，制定劳动标准，调节社会收入，完善社会保险，协调劳动关系，逐步提高劳动者的生活水平。', value: 'chapter1-5' },
  { tier: 'content', content: '第六条　国家提倡劳动者参加社会义务劳动，开展劳动竞赛和合理化建议活动，鼓励和保护劳动者进行科学研究、技术革新和发明创造，表彰和奖励劳动模范和先进工作者。', value: 'chapter1-6' },
  { tier: 'content', content: '第七条　劳动者有权依法参加和组织工会。', value: 'chapter1-7-1' },
  { tier: 'content', content: '工会代表和维护劳动者的合法权益，依法独立自主地开展活动。', value: 'chapter1-7-2' },
  { tier: 'content', content: '第八条　劳动者依照法律规定，通过职工大会、职工代表大会或者其他形式，参与民主管理或者就保护劳动者合法权益与用人单位进行平等协商。', value: 'chapter1-8' },
  { tier: 'content', content: '第九条　国务院劳动行政部门主管全国劳动工作。', value: 'chapter1-9-1' },
  { tier: 'content', content: '县级以上地方人民政府劳动行政部门主管本行政区域内的劳动工作。', value: 'chapter1-9-2' },
  // { tier: 'content', content: '', value: '' }
])

const itemClick = (item: ItemType) => {
  console.log(item);
}
</script>

<template>
  <div class="layout">
    <div class="catalogue flex-column flex-align">
      <h2>中华人民共和国劳动法</h2>
      <p>
        （1994年7月5日第八届全国人民代表大会常务委员会第八次会议通过　根据2009年8月27日第十一届全国人民代表大会常务委员会第十次会议《关于修改部分法律的决定》第一次修正　根据2018年12月29日第十三届全国人民代表大会常务委员会第七次会议《关于修改〈中华人民共和国劳动法〉等七部法律的决定》第二次修正）
      </p>
      <div class="chapters flex-column">
        <div v-for="item in contentItems" :id="item.value" :key="item.value" @click="itemClick(item)">
          <h3 class="flex-c" v-if="item.tier === 'title'">{{ item.content }}</h3>
          <p v-if="item.tier === 'content'">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  width: 600px;
  padding: 4px 8px;
}

.chapters p:hover {
  cursor: pointer;
  color: skyblue;
}
</style>
