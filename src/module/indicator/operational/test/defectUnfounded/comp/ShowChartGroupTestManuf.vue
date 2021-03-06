<script>
  import { mapGetters, mapActions } from 'vuex'
  import Highcharts from 'highcharts'
  import HighchartsDrilldown from 'highcharts-drilldown'
  import chartStandParam from '@/genComp/chart/types/drillDown'

  if (!Highcharts.Chart.prototype.addSeriesAsDrilldown) {
    HighchartsDrilldown(Highcharts)
  }

  export default {
    name: 'ShowChartGroupTestManufDefectUnfounded',

    data () {
      return {
        chartParam: chartStandParam(),
        chart: null
      }
    },

    computed: {
      ...mapGetters('indicatorDefectUnfounded', ['groupTestManuf', 'byTestManufGroupSystem', 'chartTitle'])
    },

    methods: {
      ...mapActions('indicatorDefectUnfounded', ['setChartFilter']),

      setChartParam () {
        this.chartParam.title.text = 'Fáb.Teste / Sistema'
        this.chartParam.yAxis.title.text = 'Qte Rej.'

        this.chartParam.tooltip.headerFormat = ''
        this.chartParam.tooltip.pointFormat = `
          <b>{point.name}</b><br>
          Improcedente: {point.qtyUnfounded:.0f} ({point.percUnfounded:.2f}%{point.percTotalUnfounded})<br>
          Defeito: {point.qtyDefect:.0f}{point.percTotalDefect}<br>
          Total Improcedente: {point.qtyTotalUnfounded:.0f}<br>
          Total Defeito: {point.qtyTotalDefect:.0f}
        `
        this.chartParam.series.name = 'Taxa Improcedente'
        this.chartParam.plotOptions.bar.dataLabels.format = '{point.y:.0f}'

        this.chartParam.series = [
          {
            name: 'Taxa Improcedente',
            colorByPoint: true,
            data: this.groupTestManuf.map(i => ({
              name: i.testManuf ? i.testManuf.charAt(0).toUpperCase() + i.testManuf.slice(1).toLowerCase() : '',
              y: i.qtyUnfounded,
              qtyUnfounded: i.qtyUnfounded,
              percUnfounded: i.percUnfounded,
              percTotalUnfounded: i.percTotalUnfounded !== 100 ? ', ' + i.percTotalUnfounded + '% total' : '',
              qtyDefect: i.qtyDefect,
              percTotalDefect: i.percTotalDefect !== 100 ? ' (' + i.percTotalDefect + '% total)' : '',
              qtyTotalUnfounded: i.qtyTotalUnfounded,
              qtyTotalDefect: i.qtyTotalDefect,
              drilldown: i.testManuf
            }))
          }
        ]

        this.chartParam.drilldown = {
          series: this.groupTestManuf.map(i => ({
            name: i.testManuf,
            id: i.testManuf,
            data: this.byTestManufGroupSystem(i.testManuf).map(s => ({
              name: s.system ? s.system.charAt(0).toUpperCase() + s.system.slice(1).toLowerCase() : '',
              y: s.qtyUnfounded,
              qtyUnfounded: s.qtyUnfounded,
              percUnfounded: s.percUnfounded,
              percTotalUnfounded: s.percTotalUnfounded !== 100 ? ', ' + s.percTotalUnfounded + '% total' : '',
              qtyDefect: s.qtyDefect,
              percTotalDefect: s.percTotalDefect !== 100 ? ' (' + s.percTotalDefect + '% total)' : '',
              qtyTotalUnfounded: s.qtyTotalUnfounded,
              qtyTotalDefect: s.qtyTotalDefect
            }))
          }))
        }

        let self = this

        this.chartParam.plotOptions.bar.events = {
          click: function (event) {
            self.setChartFilter(event.point.name.toUpperCase())
            self.chart.setTitle({text: self.chartTitle})
          }
        }

        this.chartParam.chart.events = {
          drillup: function (e) {
            self.setChartFilter('')
            self.chart.setTitle({text: self.chartTitle})
          }
        }
      },

      drawChart () {
        this.setChartParam()
        this.chart = Highcharts.chart(this.$el, this.chartParam)
      }
    },

    mounted () {
      this.drawChart()
    },

    updated () {
      this.drawChart()
    }
  }
</script>

<template> 
  <div style="width:250px; height:350px; margin:0 auto">
    {{groupTestManuf}}
  </div>
</template>

