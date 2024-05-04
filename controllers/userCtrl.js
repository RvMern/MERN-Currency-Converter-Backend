const passError = require("../utils/passError");

const registerUserCtrl = async(req,res,next) => {};

const loginUserCtrl = async(req,res,next) => {};

const profileCtrl = async(req,res,next) => {
    try{

    }
    catch(err){
        next(passError(400,err.message));
    }
};


module.exports = {
    registerUserCtrl,
    loginUserCtrl,
    profileCtrl
}