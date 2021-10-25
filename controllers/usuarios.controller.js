const { response, request } = require('express');




const getUsuarios = ( req = request , res = response ) => {

    //*Parametros enviados por URL
   const { q, db, apikey, page = 1, limit=10 } = req.query;

    res.json({
        msg:'GET API METHOD CONTROLLER',
        q,
        db,
        apikey,
        page,
        limit
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

    const { id } = req.params;

    res.status(400).json({
        msg:'PUT API METHOD CONTROLLER',
        id
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