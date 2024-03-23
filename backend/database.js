const mongoose = require('mongoose');
const connection = "mongodb+srv://minchle:PSzYnpN1c1CBAgq3@cluster0.7me8i1b.mongodb.net/exercise_db?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));