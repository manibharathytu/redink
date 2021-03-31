var mysql = require('mysql-await');
var connection = mysql.createConnection({
    host: 'database-1.c9u40yy69v8q.eu-west-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Pl8PAbUlGiR3VquYIr5U',
    database: 'testDB'
});


connection.connect();

const db =

{
    addPost: async function (author, title, description) {
        query = 'INSERT INTO Posts (author, title, descriptio) VALUES ( "' + author + '"  ,  "' + title + '","' + description + '"  );'
        const result = await executeQuery(query);
        return result
    },

    deletePost: async function (id) {
        query = "DELETE FROM Posts WHERE id=" + id
        const result = await executeQuery(query);
        return result

    },
    getAllPosts: async function (res) {
        query = 'SELECT * from Posts;'
        const result = await executeQuery(query);
        return result

    },

    getAllPostsByAuthor: async function (author) {
        query = 'SELECT * from Posts WHERE author="' + author + '";'
        const result = await executeQuery(query);
        return result
    },

    updatePost: async function (id, author, title, description) {

        query = 'UPDATE Posts SET author="' + author + '", title="' + title + '", descriptio="' + description + '"  WHERE id=' + id + ';'
        const result = await executeQuery(query);
        return result

    },
    getAuthors: async function () {
        query = "SELECT DISTINCT author FROM Posts";
        const result = await executeQuery(query);
        return result
    }
}


async function executeQuery(query) {
    const result = await connection.awaitQuery(query);
    return result;
}


module.exports = db


