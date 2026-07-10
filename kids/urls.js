import express from 'express';
import { addKid, confirmKid, getKidsOf } from './kids.js';
import { validateAddingKid, validateConfirmKid, validateGetKidsOf } from './validators.js';

export const router = express.Router();

router.post('/', validateAddingKid, addKid);

router.patch('/:id/confirm', validateConfirmKid, confirmKid);

router.get('/:id', validateGetKidsOf, getKidsOf);
