import { Router } from 'express';
import {
  getContactByIdController,
  getContactController,
} from '../controllers/contacts.js';

const router = Router();

router.get('/contacts', getContactController);

router.get('/contacts/:contactId', getContactByIdController);

export default router;
