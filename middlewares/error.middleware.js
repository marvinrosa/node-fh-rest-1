const errorMiddleware = (err, res, req, next) => {

    let { status=500, message, data } = err;

    message = status === 500 || !message ? 'Internal server error' : message;

    error = {
        type: 'error',
        status,
        message,
        ...(data) && data
    }

    res.status(status).send(error);

}


module.exports = errorMiddleware;
