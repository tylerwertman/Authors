const author = require("../models/authors.model");

module.exports.findAllAuthors = (req, res) => {
    author.find()
    .then(allAuthors => res.json({author: allAuthors}))
    .catch(err => res.status(400).json({message: "Something went worng", error: err}))
}
module.exports.findOneAuthor = (req, res) => {
    author.findById(req.params.id)
    .then(oneAuthor => res.json({author: oneAuthor}))
    .catch(err => res.status(400).json({message: "Something went worng", error: err}))
}
module.exports.createAuthor = (req, res) => {
    author.create(req.body)
    .then(newAuthor => res.json({author: newAuthor}))
    .catch(err => res.status(400).json({message: "Something went worng", error: err}))
}
module.exports.updateAuthor = (req, res) => {
    author.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
    .then(updatedAuthor => res.json({author: updatedAuthor}))
    .catch(err => res.status(400).json({message: "Something went worng", error: err}))
}
module.exports.deleteAuthor = (req, res) => {
    author.findByIdAndDelete(req.params.id)
    .then(result => res.json({result: result}))
    .catch(err => res.status(400).json({message: "Something went worng", error: err}))
}