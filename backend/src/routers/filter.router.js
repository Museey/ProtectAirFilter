import { Router } from "express";
import { FilterModel } from "../models/filter.model.js";
import handler from 'express-async-handler';
//import admin from "../middleware/admin.mid.js";


const router = Router();

// router.get(
//     '/all', 
//     handler(async (req, res) => {
//         const filters = await FilterModel.find({});
//     res.send(filters);
// }));

router.get(
  '/', 
  handler(async (req, res) => {
      const latestFilter = await FilterModel.find().sort({ createdAt: -1 }).limit(1);
      res.send(latestFilter);
  })
);

router.post(
  "/",
  //admin,
  handler(async (req, res) => {
    const { p_name, p_code, imageUrl } = req.body;

    const filter = new FilterModel({
      p_name,
      p_code,
      imageUrl,
    });

    await filter.save();

    res.send(filter);
  })
);

router.put(
  "/",
  //admin,
  handler(async (req, res) => {
    const { id, p_name, p_code, imageUrl } = req.body;

    await FilterModel.updateOne(
      { _id: id },
      {
        p_name,
        p_code,
        imageUrl,
      }
    );

    res.send();
  })
);

router.delete(
  '/:filterID', 
  // admin, 
  handler(async (req, res) => {
    const { filterID } = req.params;
    await FilterModel.deleteOne({ _id: filterID });
    res.send();
}));


router.get('/search/:searchTerm', handler(async (req, res) => {
    const { searchTerm } = req.params;
    const searchRegex = new RegExp(searchTerm, 'i');

    const filters = await FilterModel.find({
      $or: [
          { p_name: { $regex: searchRegex } },
          { p_code: { $regex: searchRegex } }
      ]
  });
    res.send(filters);
}));

router.get('/:filterID', handler(async (req, res) => {
    const { filterID } = req.params;
    const filter = await FilterModel.findById(filterID);
    res.send(filter)
}))
export default router;