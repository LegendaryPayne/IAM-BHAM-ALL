import { Router } from 'express';
import Table from '../table';
import { row , rows } from '../config/db'
let router = Router();
let tags = new Table("Tags");



router.get('/:id', (req, res) => {
    console.log('got here')
let id = req.params.id;
rows('spGetTagsForBlogs', [id]).then(results => {
    res.json(results)
});
})

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

export default router;