const mongoose = require("mongoose");

const uri = "mongodb+srv://ysahin:9Yakw87I8epF9G1Q@eticaretdb.qsngmsc.mongodb.net/?retryWrites=true&w=majority&appName=ETicaretDb";

const connection = () =>{
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log("MongoDb bağlantısı başarılı!"))
    .catch((err)=> console.log ("Bağlantı Hatası! Hata: " + err.message));
}

module.exports = connection;