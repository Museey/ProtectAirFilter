import { Router } from "express";
import { FilterModel } from "../models/filter.model.js";
import handler from 'express-async-handler';

const router = Router();

router.get(
    '/', 
    handler(async (req, res) => {
        const filters = await FilterModel.find({});
    res.send(filters);
}));

router.get(
    '/xxx', 
    handler(async (req, res) => {
        const filters = await FilterModel.findOne({}, { sort: { timestamp: -1 } }) // Sort by 'timestamp' in descending order
        .then(latestDoc => {
          console.log("Latest document:", latestDoc);
        })
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          client.close();
        });
    }));

router.get('/search/:searchTerm', handler(async (req, res) => {
    const { searchTerm } = req.params;
    const searchRegex = new RegExp(searchTerm, 'i');

    const filters = await FilterModel.find({ p_name: { $regex: searchRegex } });
    res.send(filters);
}));

router.get('/:filterID', handler(async (req, res) => {
    const { filterID } = req.params;
    const filter = await FilterModel.findById(filterID);
    res.send(filter)
}))
export default router;