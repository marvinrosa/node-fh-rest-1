const { Router } = require('express');

const { getUsuarios, 
        postUsuarios, 
        putUsuarios,
        deleteUsuarios, 
        patchUsuarios } = require('../controllers/usuarios.controller');

const router = new Router();
router.get('/', getUsuarios );

router.post('/:id', postUsuarios );

router.put('/:id', putUsuarios );

router.delete('/:id', deleteUsuarios );

router.patch('/',  patchUsuarios );


module.exports = router;

