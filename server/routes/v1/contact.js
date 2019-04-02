import express from 'express';
import ContactController from '../../controllers/v1/Contact';

const router = express.Router();

router.post('/contacts', ContactController.addContactToPhone);
router.delete('/contacts/:id', ContactController.removeContactFromPhone);

export default router;
