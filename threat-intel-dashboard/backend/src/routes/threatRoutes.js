// backend/src/routes/threatRoutes.js
import { Router } from 'express';
import { getThreats, getThreatById, getStats } from '../controllers/threatController.js';

const router = Router();
router.get('/threats', getThreats);
router.get('/threats/stats', getStats);
router.get('/threats/:id', getThreatById);

export default router;
