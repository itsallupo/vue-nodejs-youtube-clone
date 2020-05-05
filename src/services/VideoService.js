import Api from '@/services/Api'

export default {
  getAll(data) {
    return Api().get(`videos/${data}`)
  },
  getById(id) {
    return Api().get(`videos/${id}`)
  },
  uploadVideo(data, optional) {
    return Api().post('videos', data, optional)
  },
  updateVideo(id, data) {
    return Api().put(`videos/${id}`, data)
  },
  uploadThumbnail(id, data) {
    return Api().put(`videos/${id}/thumbnails`, data)
  },
  deleteById(id) {
    return Api().delete(`videos/${id}`)
  }
}