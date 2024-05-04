const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_ATLAS_URI)
    .then((data) => {console.log(`Database is connected successfully ${data?.connection?.host}:${data?.connection?.port}`);})
    .catch((err) => {console.log(err?.message)});
};



module.exports = dbConnect;