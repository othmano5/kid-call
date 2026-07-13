import express from 'express';
import { addKid, callKid, confirmKid, getKidsOf } from './kids.js';
import { validateAddingKid, validateCallKid, validateConfirmKid, validateGetKidsOf } from './validators.js';

export const router = express.Router();

router.post('/', validateAddingKid, addKid);

router.post('/:id/call', validateCallKid, callKid);

router.patch('/:id/confirm', validateConfirmKid, confirmKid);

router.get('/:id', validateGetKidsOf, getKidsOf);
