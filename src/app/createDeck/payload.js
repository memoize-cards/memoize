import User from './user'

const payload = {
  create (data) {
    return {
      name: data.name,
      description: data.description,
      user_id: User.id
    }
  }
}

export default payload
