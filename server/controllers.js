//require model methods from db
const models = require('../server/db/models.js')

const controller = {
  get: (req, res) => {
    models.get((err, results) => {
      if(err) {
        res.status(400).send(err)
      } else {
        res.status(200).json(results)
      }
    })
  },
  getType: (req, res) => {
    models.getType((err, results) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(200).json(results)
      }
    })
  },
  post: (req, res) => {
    models.post(req.body, (err, results) => {
      if(err) {
        res.status(400).send(err)
      } else {
        res.status(200).send('Posted')
      }
    })
  },
  update: (req, res) => {
    models.update(req.params.id, req.body, (err, results) => {
      if(err) {
        res.status(400).send(err)
      } else {
        res.status(200).send('Updated')
      }
    })
  },
  delete: (req, res) => {
    models.delete(req.params.id, (err, results) => {
      if(err) {
        res.status(400).send(err)
      } else {
        res.status(200).send('Deleted')
      }
    })
  }
}

module.exports = controller