import express from 'express';
import { addKid, getAllKids, getKidsOf } from './kids.js';
import { validateAddingKid, validateGetKidsOf } from './validators.js';

export const router = express.Router();

router.post('/', validateAddingKid, addKid);

router.get('/admin/all', getAllKids);

router.get('/:id', validateGetKidsOf, getKidsOf);

