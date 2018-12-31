<template>
  <div>
    <Row :gutter="20">
      <i-col :xs="12" :md="8" :lg="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;padding-bottom: 10px;">
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
          <count-to :end="infor.count" count-class="count-style"/>
          <p>{{ infor.title }}</p>
        </infor-card>
      </i-col>
    </Row>
    <Row :gutter="20" style="margin-top: 10px;">
      <i-col :md="24" :lg="8" style="margin-bottom: 20px;">
        <Card shadow>
          <chart-pie style="height: 300px;" :value="pieData" text="各分数段人数"></chart-pie>
        </Card>
      </i-col>
      <i-col :md="24" :lg="16" style="margin-bottom: 20px;">
        <Card shadow>
          <chart-bar style="height: 300px;" :value="barData" text="各考题正确率"/>
        </Card>
      </i-col>
    </Row>
    <Row>
      <Card shadow>
        <example style="height: 310px;"/>
      </Card>
    </Row>
  </div>
</template>

<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
import Example from './example.vue'
export default {
  name: 'home',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    Example
  },
  data () {
    return {
      inforCardData: [
        { title: '班级总人数', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
        { title: '参加考试人数', icon: 'md-locate', count: 232, color: '#19be6b' },
        { title: '及格人数', icon: 'md-help-circle', count: 142, color: '#ff9900' },
        { title: '>=90分', icon: 'md-share', count: 657, color: '#ed3f14' },
        { title: '80~89分', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
        { title: '70~79分', icon: 'md-map', count: 14, color: '#9A66E4' }
      ],
      pieData: [
        { value: 335, name: '90~100' },
        { value: 310, name: '80~89' },
        { value: 234, name: '70~79' },
        { value: 135, name: '60~69' },
        { value: 1548, name: '<60' }
      ],
      barData: {
        1: 20,
        2: 50,
        3: 60,
        4: 80,
        5: 90,
        6: 55,
        7: 78,
        8: 15,
        9: 66
      }
    }
  },
  mounted () {
    //
  }
}
</script>

<style lang="less">
.count-style{
  font-size: 50px;
}
</style>
