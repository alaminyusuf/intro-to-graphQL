const mongoose = require('mongoose')

const connetToDB = async () => {
  try {
    mongoose.connect('mongodb://localhost:27017/react-grql', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
      console.log('mongoodb is connected...')
  } catch (error) {
    console.log(error)
  }
}

module.exports = connetToDB
