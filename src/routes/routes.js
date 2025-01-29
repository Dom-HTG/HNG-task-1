import express from 'express';
import retrieveData from '../handlers/handler.js';

const router = express.Router();

router.get('/dummy', retrieveData);

export default router;