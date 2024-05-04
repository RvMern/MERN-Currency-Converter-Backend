const passError = require("../utils/passError");
const axios = require('axios');

const currencyConverterCtrl = async(req,res,next) => {
    try{
        const {curr1, curr2, amount} = req.body;
        const response = await axios.get(`${process.env.EXCHANGE_RATE_API_URL}/${process.env.EXCHANGE_RATE_API_KEY}/pair/${curr1}/${curr2}/${amount}`,{
            headers:{
                'Content-Type':'application/json'
            }
        });

        res.status(200).json({
            status:response.data.result,
            from:response.data.base_code,
            to:response.data.target_code,
            conversion_rate:response.data.conversion_rate,
            conversion_result: `The ${amount} ${curr1} in ${curr2} is ${response.data.conversion_result}`
        });
    }
    catch(err){
        next(passError(500,err.message));
    }
};



module.exports = {
    currencyConverterCtrl
};