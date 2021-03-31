const db = require('./db.js')
const { sendMail } = require('./mailer.js')


var express = require('express');
var app = express();

app.get('/getAllPosts', async function (req, res) {
    const result = await db.getAllPosts()
    res.send(result)
})

app.post('/addPost', async function (req, res) {
    const result = await db.addPost(req.query.author, req.query.title, req.query.description)
    res.send(result)
    notify()
})

app.post('/updatePost', async function (req, res) {
    const result = await db.updatePost(req.query.id, req.query.author, req.query.title, req.query.description)
    res.send(result)
})

app.post('/deletePost', async function (req, res) {
    const result = await db.deletePost(req.query.id)
    res.send(result)
})

app.get('/getAllPostsByAuthor', async function (req, res) {
    const result = await db.getAllPostsByAuthor(req.query.author)
    res.send(result)
})

var server = app.listen(8080)



async function notify(){
    let result = await db.getAuthors()
    const authors = result.map(x=> x.author).join() 

    mailParams = {
        from: '"Mani B" <bharathy@gmail.com>', // sender address
        to: authors, // list of receivers
        subject: "New Post", // Subject line
        text: "Checkout the new post", // plain text body
        html: "<b>Checkout the new post</b>", // html body
      }

    sendMail(mailParams)
}









