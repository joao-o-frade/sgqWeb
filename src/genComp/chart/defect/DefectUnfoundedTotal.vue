<script>
  import chartParametersTotal from '@/genComp/chart/types/total'

  const Highcharts = require('highcharts')

  // const highchartsExporting = require('highcharts-exporting')
  // highchartsExporting(Highcharts)

  // const highchartsMore = require('highcharts-more')
  // highchartsMore(Highcharts)

  export default {
    name: 'chartDefectUnfoundedTotal',

    props: {
      value: { type: Object }
    },

    data () {
      return {
        parameters: chartParametersTotal()
      }
    },

    // updated () {
    //   this.loadParameters()
    //   this.chart = Highcharts.chart(this.$el, this.parameters)
    // },

    methods: {
      loadParameters () {
        let limitSupGreen = 5
        let limitSupRed = this.value.percUnfounded > 100 ? this.value.percUnfounded : 100

        this.parameters.title.text = 'Defeito Improcedente'
        this.parameters.yAxis.title.text = '%<br>Defeito'
        this.parameters.plotOptions.gauge.dataLabels.format = '{point.y:.0f}%'
        this.parameters.yAxis.max = (this.value.percUnfounded <= 100) ? 100 : this.value.percUnfounded
        this.parameters.yAxis.plotBands = [
          {from: 0, to: limitSupGreen, color: '#00CC00'},
          {from: limitSupGreen, to: limitSupRed, color: '#FF3300'}
        ]
        this.parameters.tooltip.pointFormat = 'Improcedente: ' + this.value.percUnfounded + '%<br>' +
          'Qte Improcedente: ' + this.value.qtyUnfounded + '<br>' +
          'Qte Defeito: ' + this.value.qtyDefect + '<br>' +
          'Limite Máximo: 5%'
          // 'Qte Referência: ' + this.value.qtyReference + ' def. (' + this.value.percentReference + '%)'

        this.parameters.series = [ { name: '% Def', colorByPoint: true, data: [ this.value.percUnfounded ] } ]
      },
      drawChart () {
        Highcharts.chart(this.$el, this.parameters)
      }
    },

    mounted () {
      this.loadParameters()
      this.drawChart()
    },

    updated () {
      this.loadParameters()
      this.drawChart()
    }
  }
</script>

<template>
  <div style="width:250px; height:250px; margin:0 auto">
    {{value}}
  </div>
</template>

<style>
</style>
