<script>
  import { mapGetters, mapState } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/genComp/chart/types/timeline2'

  export default {
    name: 'ShowChartGroupTimeline',

    computed: {
      ...mapGetters('indicatorTestDefectAverangeRetestTime', ['groupTimeline']),
      ...mapState('indicatorTestDefectAverangeRetestTime', ['limitMaxQtyHours']),

      chartParam () {
        let param = chartStandParam

        param.title.text = 'Temporal'
        param.yAxis.title.text = 'Média Horas'

        param.tooltip.headerFormat = ''
        param.tooltip.pointFormat = `
          <b>{point.monthYear}</b><br>
          Tempo Médio (h): {point.defectAverangeRetestTime:.2f}<br>
          Defeito: {point.qtyDefect:.0f}<br>
          Horas Reteste: {point.qtyRetestHours:.2f}<br>
          Limite Máximo (h): {point.limitMaxQtyHours:.0f}<br>
          Tempo Médio Acum (h): {point.qtyAccdefectAverangeRetestTime:.2f}<br>
          Defeito Acum: {point.qtyAccDefect:.0f}<br>
          Horas Reteste Acum: {point.qtyAccRetestHours:.2f}
          `
        param.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        param.xAxis.categories = this.groupTimeline.map(i => i.monthYear)

        param.colors = ['#FF3300', '#89A54E', '#4572A7']

        param.series = [
          {
            name: 'Limite Máx',
            data: this.groupTimeline.map(i => (
              {
                name: i.monthYear,
                y: i.limitMaxQtyHours,
                monthYear: i.monthYear,
                qtyDefect: i.qtyDefect,
                qtyRetestHours: i.qtyRetestHours,
                defectAverangeRetestTime: i.defectAverangeRetestTime,
                qtyAccDefect: i.qtyAccDefect,
                qtyAccRetestHours: i.qtyAccRetestHours,
                qtyAccdefectAverangeRetestTime: i.qtyAccdefectAverangeRetestTime,
                limitMaxQtyHours: this.limitMaxQtyHours
              }
            ))
          }, {
            name: 'Mês',
            data: this.groupTimeline.map(i => (
              {
                name: i.monthYear,
                y: i.defectAverangeRetestTime,
                monthYear: i.monthYear,
                qtyDefect: i.qtyDefect,
                qtyRetestHours: i.qtyRetestHours,
                defectAverangeRetestTime: i.defectAverangeRetestTime,
                qtyAccDefect: i.qtyAccDefect,
                qtyAccRetestHours: i.qtyAccRetestHours,
                qtyAccdefectAverangeRetestTime: i.qtyAccdefectAverangeRetestTime,
                limitMaxQtyHours: this.limitMaxQtyHours
              }
            ))
          }, {
            name: 'Acumulado',
            data: this.groupTimeline.map(i => (
              {
                name: i.monthYear,
                y: i.qtyAccdefectAverangeRetestTime,
                monthYear: i.monthYear,
                qtyDefect: i.qtyDefect,
                qtyRetestHours: i.qtyRetestHours,
                defectAverangeRetestTime: i.defectAverangeRetestTime,
                qtyAccDefect: i.qtyAccDefect,
                qtyAccRetestHours: i.qtyAccRetestHours,
                qtyAccdefectAverangeRetestTime: i.qtyAccdefectAverangeRetestTime,
                limitMaxQtyHours: this.limitMaxQtyHours
              }
            ))
          }
        ]
        return param
      }
    },

    methods: {
      drawChart () {
        Highcharts.chart(this.$el, this.chartParam)
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
  <div style="width:300px; height:250px; margin:0 auto">
    {{groupTimeline}}
  </div>
</template>

