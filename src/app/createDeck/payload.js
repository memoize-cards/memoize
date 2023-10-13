import User from '@app/user'

const payload = {
  async create (data) {
    return {
      name: data.name,
      description: data.description,
      user_id: await User.id
    }
  }
}

export default payload
