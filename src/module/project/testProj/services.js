import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  // getData () {
  //   let resource = Resource.resource(paths.api + '/projects')
  //   return resource.get()
  // },

  // getOne (id) {
  //   let resource = Resource.resource(paths.api + '/projects{/id}')
  //   return resource.get({id: id})
  // },

  loadData () {
    let resource = Resource.resource(paths.api + '/project/testProj/loadData')
    return resource.get()
  },

  loadFbyDevManufsAndSystems (devManufsAndSystems) {
    let resource = Resource.resource(paths.api + '/project/testProj/fbyDevManufsAndSystems')
    return resource.save(devManufsAndSystems)
  },

  loadFromTestManufsAndSystems (testManufsAndSystems) {
    let resource = Resource.resource(paths.api + '/project/testProj/fromTestManufsAndSystems')
    return resource.save(testManufsAndSystems)
  },

  loadFromAgentFbyDevManufsAndSystems (testManufsAndSystems) {
    let resource = Resource.resource(paths.api + '/project/testProj/FromAgentFbyDevManufsAndSystems')
    return resource.save(testManufsAndSystems)
  },

  loadFbyproject (projects) {
    let resource = Resource.resource(paths.api + '/project/testProj/loadFbyproject')
    return resource.save(projects)
  },

  getProjects () {
    let resource = Resource.resource(paths.api + '/project/testProj/data')
    return resource.get()
  },

  getProjectsByIds (ids) {
    let resource = Resource.resource(paths.api + '/project/testProj/byIds/{ids}')
    return resource.get({ids: ids})
  },

  getProjectBySubEnt (subproject, delivery) {
    let resource = Resource.resource(paths.api + '/project/testProj/byproject{/subproject}{/delivery}')
    return resource.get({ subproject: subproject, delivery: delivery })
  },

  getProject (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/byproject{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDensityGroupMonthYear (project) {
    let resource = Resource.resource(paths.api + '/defectsDensity{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDensity (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsDensity{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getReopened (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsReopened{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getdefectOfTSInTI (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsdefectOfTSInTI{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  ctImpactedXDefects (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/CtImpactedXDefects{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  updateTestProj (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/update')
    return resource.update(project)
  },

  // ITERATIONS

  loadIterations (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/loadIterations')
    return resource.save({ subproject: project.subproject, delivery: project.delivery })
  },

  loadIterationsActive (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/loadIterationsActive')
    return resource.save({ subproject: project.subproject, delivery: project.delivery })
  },

  loadIterationsSelected (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/loadIterationsSelected')
    return resource.save({ subproject: project.subproject, delivery: project.delivery })
  },

  // updateIterationsActive (project, iterations) {
  //   let resource = Resource.resource(paths.api + '/project/testProj/updateIterationsActive')
  //   return resource.update({ subproject: project.subproject, delivery: project.delivery, iterations: iterations.map(i => i.id) })
  // },

  // updateIterationsSelected (project, iterations) {
  //   let resource = Resource.resource(paths.api + '/project/testProj/UpdateIterationsSelected')
  //   return resource.update({ subproject: project.subproject, delivery: project.delivery, iterations: iterations.map(i => i.id) })
  // },

  // ClearIterations (projectId) {
  //   let resource = Resource.resource(paths.api + '/project/testProj/ClearIterations{/id}')
  //   return resource.get({id: projectId})
  // },

  // --------

  getDensityByIterations (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsDensityByProjectIterations{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getReopenedIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsReopenedIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getdefectOfTSInTIIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsdefectOfTSInTIIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getCtImpactedXDefectsIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/CtImpactedXDefectsIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  loadTestStatus () {
    let resource = Resource.resource(paths.api + '/project/testProj/loadTestStatus')
    return resource.get()
  },

  loadReleasesLossReason () {
    let resource = Resource.resource(paths.api + '/project/testProj/loadReleasesLossReason')
    return resource.get()
  }

}
