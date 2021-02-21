const db = require('./');

module.exports = {
  get: (callback) => {
    db.query('SELECT pokemon.id,  pokemon.name, types.type, images.img FROM images INNER JOIN pokemon ON pokemon.imageNum = images.id INNER JOIN types ON pokemon.typeNum = types.id' , (err, results) => {
      callback(err, results)
    })
  },
  post: (body, callback) => {

  },
  update: (id, body, callback) => {
    db.query(`UPDATE pokemon SET name = "${body.name}" WHERE id = ${id}`, (err, results) => {
      callback(err, results)
    })
  },
  delete: (id, callback) => {
    db.query(`DELETE FROM pokemon WHERE id = ${id}`, (err, results) => {
      callback(err, results)
    })
  },
  getType: (callback) => {
    db.query('SELECT * FROM types', (err, results) => {
      callback(err, results)
    })
  }
}