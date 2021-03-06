import vueResource from '@/http/vueResource'
// import { paths } from '@/environment'
import { paths } from '@/environment'

const resource = vueResource.resource(paths.api + '/iterations/{subproject}/{delivery}')

// const currentProfile = JSON.parse(window.localStorage.getItem('current-profile'))

export default {
  // Create
  createOne (item) {
    // item['student_id'] = currentProfile.student.id
    return resource.save({}, item)
  },

  // Read
  getAll (item) {
    return resource.get({subproject: item.subproject, delivery: item.delivery})
  },
  getOne (id) {
    return resource.get({id: id})
  },

  // Update
  updateOne (item) {
    return resource.update({id: item.id}, item)
  },

  // Delete
  deleteOne (id) {
    return resource.delete({id: id})
  }
}
