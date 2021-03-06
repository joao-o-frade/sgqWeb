export const groupDevManuf = ({data}) => {
  let result = []
  data.forEach(d => {
    let index = result.findIndex(r => r.devManuf === d.devManuf)
    if (index > -1) {
      result[index].qtyHour += d.qtyHour
      result[index].qtyDefect += d.qtyDefect
    } else {
      result.push({
        devManuf: d.devManuf,

        qtyHour: d.qtyHour,
        qtyDefect: d.qtyDefect,
        averangeHour: 0
      })
    }
  })
  result.forEach(r => {
    r.averangeHour = parseFloat(parseFloat(r.qtyHour / (r.qtyDefect !== 0 ? r.qtyDefect : 1)).toFixed(2))
  })
  return result.filter(r => r.averangeHour > 0).sort((a, b) => a.averangeHour > b.averangeHour ? 1 : -1)
}

export const byDevManufGroupSystem = ({data}) => (devManuf) => {
  let byDevManuf = data.filter(p => p.devManuf === devManuf)

  let result = []
  byDevManuf.forEach(p => {
    let index = result.findIndex(r => r.system === p.system)
    if (index > -1) {
      result[index].qtyHour += p.qtyHour
      result[index].qtyDefect += p.qtyDefect
    } else {
      result.push({
        system: p.system,
        qtyHour: p.qtyHour,
        qtyDefect: p.qtyDefect,
        averangeHour: 0
      })
    }
  })
  result.forEach(r => {
    r.averangeHour = parseFloat(parseFloat(r.qtyHour / (r.qtyDefect !== 0 ? r.qtyDefect : 1)).toFixed(2))
  })
  return result.filter(r => r.averangeHour > 0).sort((a, b) => a.averangeHour > b.averangeHour ? 1 : -1)
}

export const filteredByChart = ({data, chartSelectedDevManuf, chartSelectedSystem}) => {
  if (chartSelectedDevManuf === '' && chartSelectedSystem === '') {
    return data
  } else if (chartSelectedSystem === '') {
    return data.filter(i => i.devManuf === chartSelectedDevManuf)
  } else {
    return data.filter(i => i.devManuf === chartSelectedDevManuf && i.system === chartSelectedSystem)
  }
}

export const groupTimeline = ({limitAcceptablePerc, limitModeratePerc, limitHigh}, {filteredByChart, total}) => {
  let result = []
  filteredByChart.filter(d => d.year !== '').forEach(d => {
    let index = result.findIndex(r => r.yearMonth === (d.year + d.month))
    if (index > -1) {
      result[index].qtyHour += d.qtyHour
      result[index].qtyDefect += d.qtyDefect
    } else {
      result.push({
        yearMonth: d.year + d.month,
        monthYear: d.month + '/' + d.year,
        qtyHour: d.qtyHour,
        qtyDefect: d.qtyDefect,
        averangeHour: 0,
        limitAcceptablePerc: limitAcceptablePerc,
        limitModeratePerc: limitModeratePerc,
        limitHigh: limitHigh
      })
    }
  })
  result.forEach(r => {
    r.averangeHour = parseFloat(parseFloat(r.qtyHour / (r.qtyDefect !== 0 ? r.qtyDefect : 1)).toFixed(2))
  })
  return result.sort((a, b) => a.yearMonth > b.yearMonth ? 1 : -1)
}

export const total = ({state}, {filteredByChart}) => {
  let qtyHour = parseFloat(filteredByChart.reduce((sum, e) => sum + e.qtyHour, 0).toFixed(2))
  let qtyDefect = filteredByChart.reduce((sum, e) => sum + e.qtyDefect, 0)
  let averangeHour = parseFloat((qtyHour / (qtyDefect !== 0 ? qtyDefect : 1)).toFixed(2))
  return { qtyHour, qtyDefect, averangeHour }
}

export const chartTitle = ({chartSelectedDevManuf, chartSelectedSystem}) => {
  if (chartSelectedDevManuf === '' && chartSelectedSystem === '') {
    return 'Fáb.Desenv. / Sistema'
  } else if (chartSelectedSystem === '') {
    return (chartSelectedDevManuf ? chartSelectedDevManuf.charAt(0).toUpperCase() + chartSelectedDevManuf.slice(1).toLowerCase() : 'Fáb.Desenv.') + ' / Sistema'
  } else {
    return (chartSelectedDevManuf ? chartSelectedDevManuf.charAt(0).toUpperCase() + chartSelectedDevManuf.slice(1).toLowerCase() : 'Fáb.Desenv.') + ' / ' + (chartSelectedSystem ? chartSelectedSystem.charAt(0).toUpperCase() + chartSelectedSystem.slice(1).toLowerCase() : '')
  }
}
