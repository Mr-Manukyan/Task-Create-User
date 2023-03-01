const errorHandler = require('../utils/errorHandler')

let inintialState = [
  {
    id: "1",
    firstName: "Karen",
    lastName: "Manukyan",
    age: 34,
    email: 'arm.karen.manukyan88@gmail.com',
    address: 'Davitashen 30',
    date: 1676903725177
  },

  {
    id: "2",
    firstName: "Arman",
    lastName: "Petrosyan",
    age: 30,
    email: 'Arman@mail.ru',
    address: 'Davitashen 10',
    date: 1676903725177
  },

  {
    id: "3",
    firstName: "Poxos",
    lastName: "Poxosyan",
    age: 40,
    email: 'Poxosyan@mail.ru',
    address: 'Armavir 13',
    date: 1676903725177
  },

  {
    id: "4",
    firstName: "Arsem",
    lastName: "Kirakosyan",
    age: 36,
    email: 'kirakosyan@mail.ru',
    address: 'Ararat 20',
    date: 1676903725177
  },
]

module.exports.getAllUsers = async (req, res) => {

  try {
    res.status(200).json({
      users: inintialState,
      usersTotalCount: inintialState.length,
      resultCode: 200
    })

  } catch (error) {
    errorHandler(res, error)
  }
}

module.exports.getUserByName = async (req, res) => {

  try {
    const userName = req.query.name.toLowerCase()
    const searchedUsers = inintialState.filter((user) => {
      return userName.toLowerCase() === ''
        ? user
        : user.firstName.toLowerCase().includes(userName)
    })

    res.status(200).json({
      users: searchedUsers,
      usersTotalCount: inintialState.length,
      resultCode: 200
    })

  } catch (error) {
    errorHandler(res, error)
  }
}



module.exports.createUser = async (req, res) => {

  try {
    const newUser = req.body

    inintialState.push(newUser)

    res.status(201).json({
      user: newUser,
      message: 'created',
      resultCode: 201
    })

  } catch (error) {
    errorHandler(res, error)
  }
}



module.exports.deleteOneUser = async (req, res) => {

  try {

    const userID = req.params.id
    inintialState = inintialState.filter(user => user.id !== userID)

    res.status(200).json({
      message: 'delete',
      resultCode: 200,
      users: inintialState
    })

  } catch (error) {
    errorHandler(res, error)
  }
}


module.exports.updateOneUserData = async (req, res) => {
  const updatedUserData = req.body

  try {

    inintialState = inintialState.map((user) => {
      if (user.id === updatedUserData.id) {
        return {
          ...updatedUserData,
        }
      }
      return user
    })

    res.status(200).json({
      message: 'updated',
      resultCode: 200,
      users: inintialState
    })

  } catch (error) {
    errorHandler(res, error)
  }
}


