import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  load () {
    let resource = Resource.resource(paths.api + '/testManuf/all')
    return resource.get()
  }
}
