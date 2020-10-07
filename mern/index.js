const express = require ('express');
const mongoose = require ('mongoose');
const userRouter = require ('./userRouter');
const morgan = require ('morgan');
const app = express();
const cors = require ('cors');
const path = require ('path');

app.use(express.json());
app.use(morgan('dev'));

app.use(cors());

app.use('*',(req,res,next) =>{
    console.log('testing',req.url);
    next();
})
app.use('/api',userRouter);

app.use('/',(req,res) => {
    res.send("hello");
})

app.listen(5000,() =>{
    console.log("listening");
})

if (process.env.NODE_ENV === "production"){
    app.use(express.static('mern2/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.join(_dirname, 'mern2', 'build', 'index.html'));
    });
}

mongoose.connect('mongodb://localhost/userauth',{ useNewUrlParser: true, useUnifiedTopology: true },() =>{
    console.log("server connected");
})