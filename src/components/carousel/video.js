import { paint } from '@standard/h'
import Card from './card'

@paint(Card)
class Video {
  #avatar
  #discipline
  #id
  #professor

  get avatar () {
    return this.#avatar
  }

  get discipline () {
    return this.#discipline
  }

  get professor () {
    return this.#professor
  }

  constructor (id, avatar, discipline, professor) {
    this.#id = id
    this.#avatar = avatar
    this.#discipline = discipline
    this.#professor = professor
  }

  redirect () {
    // TODO: redirect to link
    return this
  }

  static create (data) {
    return new Video(
      data.id,
      data.avatar_url,
      data.name,
      data.professor_name
    )
  }
}

export default Video
