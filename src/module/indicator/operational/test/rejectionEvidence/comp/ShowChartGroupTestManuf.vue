<script>
  import { mapGetters, mapActions } from 'vuex'
  import Highcharts from 'highcharts'
  import HighchartsDrilldown from 'highcharts-drilldown'
  import chartStandParam from '@/genComp/chart/types/drillDown'

  if (!Highcharts.Chart.prototype.addSeriesAsDrilldown) {
    HighchartsDrilldown(Highcharts)
  }

  export default {
    name: 'ShowChartGroupTestManufRejectionEvidence',

    data () {
      return {
        chartParam: chartStandParam(),
        chart: null
      }
    },

    computed: {
      ...mapGetters('indicatorRejectionEvidence', ['groupTestManuf', 'byTestManufGroupSystem', 'chartTitle'])
    },

    methods: {
      ...mapActions('indicatorRejectionEvidence', ['setChartFilter']),

      setChartParam () {
        this.chartParam.title.text = 'Fáb.Teste / Sistema'
        this.chartParam.yAxis.title.text = 'Qte Rej.'

        this.chartParam.tooltip.headerFormat = ''
        this.chartParam.tooltip.pointFormat = `
          <b>{point.name}</b><br>
          Rejeições: {point.rejections:.0f} ({point.rejectionsPerc:.2f}%{point.rejectionsPercTotal})<br>
          Evidências: {point.evidences:.0f}{point.evidencesPercTotal}<br>
          Total Rejeições: {point.totalRejections:.0f}<br>
          Total Evidências: {point.totalEvidences:.0f}
        `
        this.chartParam.series.name = 'Taxa Rejeição'
        this.chartParam.plotOptions.bar.dataLabels.format = '{point.y:.0f}'

        this.chartParam.series = [
          {
            name: 'Taxa Rejeição',
            colorByPoint: true,
            data: this.groupTestManuf.map(i => ({
              name: i.testManuf ? i.testManuf.charAt(0).toUpperCase() + i.testManuf.slice(1).toLowerCase() : '',
              y: i.rejections,
              rejections: i.rejections,
              rejectionsPerc: i.rejectionsPerc,
              rejectionsPercTotal: i.rejectionsPercTotal !== 100 ? ', ' + i.rejectionsPercTotal + '% total' : '',
              evidences: i.evidences,
              evidencesPercTotal: i.evidencesPercTotal !== 100 ? ' (' + i.evidencesPercTotal + '% total)' : '',
              totalRejections: i.totalRejections,
              totalEvidences: i.totalEvidences,
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
              y: s.rejections,
              rejections: s.rejections,
              rejectionsPerc: s.rejectionsPerc,
              rejectionsPercTotal: s.rejectionsPercTotal !== 100 ? ', ' + s.rejectionsPercTotal + '% total' : '',
              evidences: s.evidences,
              evidencesPercTotal: s.evidencesPercTotal !== 100 ? ' (' + s.evidencesPercTotal + '% total)' : '',
              totalRejections: s.totalRejections,
              totalEvidences: s.totalEvidences
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

