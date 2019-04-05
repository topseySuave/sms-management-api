import express from 'express';
import ContactController from '../../controllers/v1/Contact';

const router = express.Router();

router.post('/contacts', ContactController.addContactToPhone);
router.get('/contacts', ContactController.getContacts);
router.delete('/contacts/:id', ContactController.removeContactFromPhone);

export default router;
