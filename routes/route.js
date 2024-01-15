import {Router} from 'express';
const router = Router();
import *as controller from '../controllers/appControllers.js';

router.route('/register').post(controller.register);








export default router;
