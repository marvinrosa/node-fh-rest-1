const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
    res.json({
        msg:'GET API METHOD'
    });
});

router.put('/', (req, res) => {
    res.status(400).json({
        msg:'PUT API METHOD'
    });
});

router.post('/', (req, res) => {
    res.status(201).json({
        msg:'POST API METHOD'
    });
});

router.delete('/', (req, res) => {
    res.status(500).json({
        msg:'DELETE API METHOD'
    });
});

router.patch('/', (req, res) => {
    res.json({
        msg:'PATCH API METHOD'
    });
});






module.exports = router;

