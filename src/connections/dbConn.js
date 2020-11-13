const dbConnect = (conn) => {
    conn.connect('mongodb://localhost:27017/rs-api',
        {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('Database Connected'))
        .catch(err => console.log(err.message))

    return conn;
}

module.exports = dbConnect;