import bcrypt from 'bcryptjs'

const defaultPassword = bcrypt.hashSync('123456', 10)

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: defaultPassword,
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: defaultPassword,
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: defaultPassword,
  },
]

export default users
