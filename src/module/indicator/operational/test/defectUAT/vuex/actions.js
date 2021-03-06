import * as types from './mutationsTypes'
import services from '../services'

export const load = ({ commit, state, rootState }) => {
  if (rootState.indicatorTest.selectedTestManufs.length === 0 || rootState.indicatorTest.selectedSystem.length === 0 || rootState.indicatorTest.selectedProject.length === 0) {
    return
  }

  commit(types.loading, true)

  return new Promise((resolve, reject) => {
    services.load({
      selectedTestManufs: rootState.indicatorTest.selectedTestManufs.map(i => i.id),
      selectedSystem: rootState.indicatorTest.selectedSystem.map(i => i.id),
      selectedProject: rootState.indicatorTest.selectedProject.map(i => i.subproject + i.delivery)
    })
    .then(
      r => {
        commit(types.data, r.data)
        commit(types.loading, false)
        resolve()
      },
      e => {
        console.log(e)
        commit(types.loading, false)
        reject(e)
      }
    )
  })
}

export const setChartFilter = ({ state, commit }, item) => {
  if (item === '') {
    commit(types.testManufSelected, '')
    commit(types.systemSelected, '')
  } else {
    if (state.testManufSelected === '') {
      commit(types.testManufSelected, item)
    } else {
      commit(types.systemSelected, item)
    }
  }
}
