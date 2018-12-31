<template>
    <div ref="dom"></div>
</template>

<script>
import echarts from 'echarts'
import { on, off } from '@/libs/tools'
export default {
  name: 'serviceRequests',
  data () {
    return {
      dom: null
    }
  },
  methods: {
    resize () {
      this.dom.resize()
    }
  },

  mounted () {
    const option = {
      title: {
        text: '学生各知识点掌握情况'
      },
      tooltip: {},
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [
          { name: '化学实验基础', max: 100 },
          { name: '化学计算', max: 100 },
          { name: '化学的基本概念', max: 100 },
          { name: '物质的结构与性质', max: 100 },
          { name: '重要的无机物', max: 100 },
          { name: '常见有机物及其应用', max: 100 },
          { name: '化学与生活和技术', max: 100 },
          { name: '有机化学基础', max: 100 }
        ]
      },
      series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
          {
            value: [68, 70, 80, 67, 90, 80, 77, 88],
            name: '预算分配（Allocated Budget）'
          }
        ]
      }]
    }

    this.$nextTick(() => {
      this.dom = echarts.init(this.$refs.dom)
      this.dom.setOption(option)
      on(window, 'resize', this.resize)
    })
  },
  beforeDestroy () {
    off(window, 'resize', this.resize)
  }
}
</script>
