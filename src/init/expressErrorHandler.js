const ERRORS = {
    400: { type: 'Invalid request', msg: 'Please check inputs.' },
    404: { type: 'Not found', msg: 'Not found.' },
    500: { type: 'Server error', msg: 'An unexpected error occurred. Please try again.' },
    503: { type: 'Server error', msg: 'Temporarily unable to respond. Please try later' },
};

export default ({ code = 500, msg = '', errors = [] }, req, res, next) => {
    const errorResponse = {
        code,
        error: ERRORS[code].type,
        msg: msg || ERRORS[code].msg,
    };

    return res.status(code).json(
        (errors && errors.length)
            ? { ...errorResponse, errors }
            : errorResponse,
    );
};
