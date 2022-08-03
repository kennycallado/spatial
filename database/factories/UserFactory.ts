import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(User, ({ faker }) => {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    token: faker.random.alphaNumeric(20),
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    password: faker.internet.password(),
  }
}).build()
