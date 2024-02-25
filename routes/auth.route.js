import express from 'express';
import {signup,signin,google,test} from '../controllers/auth.controller.js';


const router=express.Router();

router.get('/test',test);

router.post('/signup',signup);
router.post('/signin',signin);
router.post('/google',google);

export default router;