import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  data () {
    let resource = Resource.resource(paths.api + '/project/biti/data')
    return resource.get()
  }
}
