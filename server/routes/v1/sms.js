import express from 'express';
import SmsController from '../../controllers/v1/Sms';

const router = express.Router();

// Send sms
router.post('/sms', SmsController.addSms);

// Get sms
router.get('/sms', SmsController.fetchSms);

// Get sms linked to Sender
router.get('/sms/sender/:id', SmsController.fetchSmsBySender);

// Get sms linked to Receiver
router.get('/sms/receiver/:id', SmsController.fetchSmsByReceiver);

export default router;
