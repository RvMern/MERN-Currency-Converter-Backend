const errorHandler = (err,req,res,next) => {
    const errorMessage = err?.message;
    const errorStack = err?.stack;
    const errorCode = err?.statusCode;

    res.status(errorCode).json({
        success:false,
        errorMessage,
        errorStack
    });
};



module.exports = errorHandler