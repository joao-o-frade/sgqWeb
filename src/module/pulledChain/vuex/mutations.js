import * as types from './mutationsTypes'

export default {
  [types.pulledChainProjects] (state, value) {
    state.pulledChainProjects = value
  },
  [types.pulledChainProjectsFilteredByText] (state, value) {
    state.pulledChainProjectsFilteredByText = value
  },
  [types.pulledChainFilterTerm] (state, value) {
    state.pulledChainFilterTerm = value
  },
  [types.pulledChainProjectSelected] (state, value) {
    state.pulledChainProjectSelected = value
  },
  [types.updatePulledChainProjectSelected] (state, value) {
    state.pulledChainProjectSelected.statusStrategyTestingAndContracting = value.statusStrategyTestingAndContracting
    state.pulledChainProjectSelected.dtUpdateStrategyTestingAndContracting = value.dtUpdateStrategyTestingAndContracting
    state.pulledChainProjectSelected.statusTimeline = value.statusTimeline
    state.pulledChainProjectSelected.dtUpdateTimeLine = value.dtUpdateTimeLine
    state.pulledChainProjectSelected.statusTestPlan = value.statusTestPlan
    state.pulledChainProjectSelected.dtUpdateTestPlan = value.dtUpdateTestPlan
    state.pulledChainProjectSelected.dtDeliveryTestPlan = value.dtDeliveryTestPlan
    state.pulledChainProjectSelected.readyTestPlan = value.readyTestPlan
    state.pulledChainProjectSelected.dtStartTestPlan = value.dtStartTestPlan

    // let index = state.pulledChainProjects.findIndex(o => o.id === value.id)
    // if (index !== -1) {
    //   state.pulledChainProjects[index] = value
    // }
    // state.pulledChainProjectSelected = value
  }
}
