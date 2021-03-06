export const dataFilteredByTerm = ({ data, filterTerm, filterProperties }) => {
  if (filterTerm !== '') {
    let words = filterTerm.split('+')

    return data.filter(item => {
      return words.every(word => {
        return filterProperties.some(filterProperty => {
          return item[filterProperty.name].toLowerCase().indexOf(word.toLowerCase()) > -1
        })
      })
    })
  } else {
    return data
  }
}

export const distinctState = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.state === el.state) === index
  ).map(m => ({ id: m.state, name: m.state })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctClassification = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.classification === el.classification) === index
  ).map(m => ({ id: m.classification, name: m.classification })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctUN = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.un === el.un) === index
  ).map(m => ({ id: m.un, name: m.un })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctReleaseSGQ = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.releaseSGQFormat === el.releaseSGQFormat) === index
  ).map(m => ({ id: m.releaseSGQFormat, name: m.releaseSGQFormat, order: m.releaseSGQ })).sort((a, b) => a.order > b.order ? 1 : -1)
}
export const distinctReleaseClarity = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.releaseClarityFormat === el.releaseClarityFormat) === index
  ).map(m => ({ id: m.releaseClarityFormat, name: m.releaseClarityFormat, order: m.releaseClarity })).sort((a, b) => a.order > b.order ? 1 : -1)
}
export const distinctCategory = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.category === el.category) === index
  ).map(m => ({ id: m.category, name: m.category })).sort((a, b) => a.name > b.name ? 1 : -1)
}

export const distinctGP = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.GP === el.GP) === index
  ).map(m => ({ id: m.GP, name: m.GP })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctGpN4 = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.GP_N4 === el.GP_N4) === index
  ).map(m => ({ id: m.GP_N4, name: m.GP_N4 })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctGpN3 = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.GP_N3 === el.GP_N3) === index
  ).map(m => ({ id: m.GP_N3, name: m.GP_N3 })).sort((a, b) => a.name > b.name ? 1 : -1)
}

export const distinctLT = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.LT === el.LT) === index
  ).map(m => ({ id: m.LT, name: m.LT })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctLtN4 = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.LT_N4 === el.LT_N4) === index
  ).map(m => ({ id: m.LT_N4, name: m.LT_N4 })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctLtN3 = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.LT_N4 === el.LT_N4) === index
  ).map(m => ({ id: m.LT_N4, name: m.LT_N4 })).sort((a, b) => a.name > b.name ? 1 : -1)
}

export const distinctPMO = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.PMO === el.PMO) === index
  ).map(m => ({ id: m.PMO, name: m.PMO })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctBusinessAnalyst = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.businessAnalyst === el.businessAnalyst) === index
  ).map(m => ({ id: m.businessAnalyst, name: m.businessAnalyst })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctTestLeader = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.testLeader === el.testLeader) === index
  ).map(m => ({ id: m.testLeader, name: m.testLeader })).sort((a, b) => a.name > b.name ? 1 : -1)
}
