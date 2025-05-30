// src/controllers/lostReportController.js
// const db = require('../config/db')

exports.index = async (req, res, next) => {
  try {
    res.json([]) // lista reports
  } catch (err) { next(err) }
}

exports.show = async (req, res, next) => {
  try {
    res.json({ id: req.params.id })
  } catch (err) { next(err) }
}

exports.create = async (req, res, next) => {
  try {
    res.status(201).json({ message: 'Lost report criado (stub)' })
  } catch (err) { next(err) }
}

exports.update = async (req, res, next) => {
  try {
    res.json({ message: 'Lost report atualizado (stub)' })
  } catch (err) { next(err) }
}

exports.remove = async (req, res, next) => {
  try {
    res.status(204).end()
  } catch (err) { next(err) }
}
