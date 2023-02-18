import express from 'express'
const router =express.Router()

import { homeController } from '../controllers/homeControllers.js'
import { serviceController } from '../controllers/servicesController.js'
import { skillController } from '../controllers/skillController.js'
import { contactController } from '../controllers/contactController.js'

router.get('/',homeController)
router.get('/services',serviceController)
router.get('/skill',skillController)
router.get('/contact',contactController)

export default router
