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
        text: '历史化学考试班级平均分'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      grid: {
        top: '10%',
        left: '1.2%',
        right: '1%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['2018年9月月考', '2018年10月月考', '2018年11月月考', '2018年12月月考', '2019年3月月考', '2019年4月月考', '2019年5月月考']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '运营商/网络服务',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {
            color: '#2d8cf0'
          } },
          data: [90, 80, 88, 66, 85, 90, 88]
        }
      ]
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
