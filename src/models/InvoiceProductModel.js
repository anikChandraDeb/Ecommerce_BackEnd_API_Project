const mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId,required:true},
    productID:{type:mongoose.Schema.Types.ObjectId,required:true},
    invoiceID:{type:mongoose.Schema.Types.ObjectId,required:true},
    qty:{type:String,require:true},
    price:{type:String,require:true},
    color:{type:String,require:true},
    size:{type:String,require:true}
},
{timestamps:true,versionKey:false}
);

const InvoiceProductModel=mongoose.model('invoiceproducts',DataSchema);

module.exports=InvoiceProductModel;