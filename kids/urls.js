import express from 'express';
import { addKid, callKid, getKidsOf } from './kids.js';
import { validateAddingKid, validateCallKid, validateGetKidsOf } from './validators.js';

export const router = express.Router();

router.post('/', validateAddingKid, addKid);

router.post('/:id/call', validateCallKid, callKid);

router.get('/:id', validateGetKidsOf, getKidsOf);
