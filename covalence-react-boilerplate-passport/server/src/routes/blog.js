import { Router } from 'express';
import Table from '../table';
import tagsRouter from './tags';
import { row , rows } from '../config/db'
let router = Router();
let blogs = new Table("Blogs");


router.use('/tags', tagsRouter)

router.get('/:id?', (req, res) => {
let id = req.params.id;
if(id) {
    blogs.getOne(id).then(results => {
        res.json(results);
    })
} else {
    blogs.getAll().then(results => {
        rows(spGetTagsForBLogs, [id])
        res.json(results);
    })
}

});

router.post('/', (req, res) => {
    console.log(req.body)
    // blogs.insert(req.body).then(results => {
    //     res.json(results);
    // })
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    blogs.update(id, req.body).then(results => {
        res.json(results);
    })
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    blogs.delete(id).then(results => {
        res.json(results);
    })
});

export default router;