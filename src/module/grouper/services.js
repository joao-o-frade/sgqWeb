import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  // Create
  create (item) {
    let resource = Resource.resource(paths.api + '/grouper/create')
    // item['student_id'] = currentProfile.student.id
    return resource.update(item)
  },

  // Read
  loadData () {
    let resource = Resource.resource(paths.api + '/grouper/loadData')
    return resource.get()
  },

  loadById (id) {
    let resource = Resource.resource(paths.api + '/grouper/loadById/{id}')
    return resource.get({id: id})
  },

  // Update
  update (item) {
    let resource = Resource.resource(paths.api + '/grouper/update/{id}')
    return resource.update({id: item.id}, item)
  },

  // Delete
  delete (id) {
    let resource = Resource.resource(paths.api + '/grouper/{id}')
    return resource.delete({id: id})
  }
}
