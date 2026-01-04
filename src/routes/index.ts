import { Router } from 'express';

import contactRoutes from './contact.routes.js';

const router = Router();

router.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Nexio Agency Backend is Operational' });
});

router.use('/contact', contactRoutes);

export default router;
