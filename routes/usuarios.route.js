const { Router } = require('express');

const { getUsuarios, 
        postUsuarios, 
        putUsuarios,
        deleteUsuarios, 
        patchUsuarios } = require('../controllers/usuarios.controller');

const router = new Router();

router.get('/', getUsuarios );

router.post('/', postUsuarios );

router.put('/', putUsuarios );

router.delete('/', deleteUsuarios );

router.patch('/',  patchUsuarios );


module.exports = router;

