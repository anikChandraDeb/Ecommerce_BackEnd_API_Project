const app=require('./app');
const {PORT}=require('./src/config/config');

app.listen(PORT,()=>{
    console.log(`Server run at port ${PORT}`);
})