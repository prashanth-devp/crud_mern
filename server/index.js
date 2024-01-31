const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');

// require('dotenv').config();
// Load environment variables from .env file

const app = express();
app.use(cors(
    {
        origin: ["https://crud-mern-frontend-zeta.vercel.app"],
        methods: ["GET", "PUT", "POST", "DELETE"],
        credentials: true
    }
));
app.use(express.json());

mongoose.connect('mongodb+srv://ptc:ptc123@cluster0.ixm6hmy.mongodb.net/?retryWrites=true&w=majority');

// { useNewUrlParser: true, useUnifiedTopology: true }

app.get("/", (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        english: req.body.english,
        science: req.body.science,
        maths: req.body.maths,
        social: req.body.social
    })
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
        .then(result => {
            console.log(result);
            res.json({ message: 'User deleted successfully' });
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
