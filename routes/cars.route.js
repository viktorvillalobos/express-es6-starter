import express from 'express'
import carController from '../controllers/cars.controller'

const router = express.Router()

router.get('/all', (req, res) => {
  carController.getAll(req, res)
})

router.post('/add', (req, res) => {
  carController.addCar(req, res)
})

router.delete('/delete', (req, res) => {
  carController.deleteCar(req, res)
})

export default router
