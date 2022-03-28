export default (req, res, next) => {
    res.set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Accept, Content-Type, Content-Length',
    });

    return next();
};
