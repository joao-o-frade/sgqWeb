export default {
  chart: {
    type: 'spline',
    zoomType: 'xy',
    backgroundColor: 'transparent',
    style: { fontFamily: 'arial' }
  },

  title: {
    text: 'title',
    margin: 0,
    style: { fontSize: 13, fontWeight: 'bold', color: '#6b6b47' }
  },

  credits: { enabled: false },
  exporting: { enabled: false },
  lang: { noData: 'Sem dados!' },
  xAxis: { type: 'category', labels: { style: { fontSize: '10px', padding: '[0px 0px 0px 0px]' } } },
  yAxis: { title: { text: '' }, plotLines: [ { value: 0, width: 1, color: '#FF8080' } ] },
  tooltip: { pointFormat: '' },
  plotOptions: {
    bar: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 35,
      dataLabels: { allowOverlap: false, enabled: true, format: '' }
    }
  },
  legend: {
    layout: 'horizontal',
    itemDistance: 1,
    align: 'center',
    verticalAlign: 'bottom',
    borderWidth: 0,
    x: 0,
    y: 0,
    margin: 0,
    itemStyle: {
      color: '#6b6b47',
      fontWeight: 'normal',
      fontSize: '12px'
    }
  },
  series: []
}
