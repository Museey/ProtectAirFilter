import { Router } from "express";
import { sample_filters } from "../data.js";

const router = Router();

router.get('/', (req, res) => {
    res.send(sample_filters);
});

router.get('/search/:searchTerm', (req, res) => {
    const { searchTerm } = req.params;
    const filters = sample_filters.filter(item => 
        item.p_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    res.send(filters);
});

router.get('/:filterID', (req, res) => {
    const { filterID } = req.params;
    const filter = sample_filters.find(item => item.id === filterID);
    res.send(filter)
})
export default router;