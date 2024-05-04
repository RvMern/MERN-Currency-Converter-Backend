const passError = (statusCode,message) => {
    const error = new Error(message || 'Internal Server Error');
    error.statusCode = statusCode || 500;
    error.stack = error.stack;
    return error;
};

module.exports = passError;