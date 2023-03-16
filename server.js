const express = require('express')
const mongoose = require('mongoose')
const app = express()
const articleRouter = require('./routes/articles')

mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'One Piece',
        createdAt: new Date(),
        description: 'The One Piece is real!'
    },
    {
        title: 'Naruto',
        createdAt: new Date(),
        description: 'Look at me, I am Hokage now!'
    }
]
    res.render('articles/index', {articles: articles})
})

app.listen(6066)