const { response, request } = require('express');



const getUsuarios = ( req, res = response ) => {
    res.json({
        msg:'GET API METHOD CONTROLLER'
    });
}

const postUsuarios =  ( req, res = response ) => {
    
    const { nombre, edad } = req.body;

    res.status(201).json({
        msg:'POST API METHOD CONTROLLER',
        nombre,
        edad
    });
}

const putUsuarios = ( req, res = response ) => {
    res.status(400).json({
        msg:'PUT API METHOD CONTROLLER'
    });
}

const deleteUsuarios =  ( req, res = response ) => {
    res.status(500).json({
        msg:'DELETE API METHOD CONTROLLER'
    });
}

const patchUsuarios =  ( req, res = response ) => {
    res.status(500).json({
        msg:'PATCH API METHOD CONTROLLER'
    });
}

module.exports ={
    getUsuarios,
    putUsuarios,
    postUsuarios, 
    deleteUsuarios, 
    patchUsuarios
}