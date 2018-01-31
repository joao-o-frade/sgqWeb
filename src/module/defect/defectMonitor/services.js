import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  fbyQueueStatusTrafficLightProject (parameter) {
    let resource = Resource.resource(paths.api + '/defect/defectMonitor/fbyQueueStatusTrafficLightProject')
    return resource.save(parameter)
  }
}
