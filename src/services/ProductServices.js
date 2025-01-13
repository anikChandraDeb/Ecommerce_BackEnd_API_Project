const BrandModel=require('../models/BrandModel');
const CategoryModel=require('../models/CategoryModel');
const ProductSliderModel=require('../models/ProductSliderModel');
const ProductModel=require('../models/ProductModel');
const ProductDetailModel=require('../models/ProductDetailModel');
const ReviewModel=require('../models/ReviewModel');
const mongoose=require('mongoose');
const ObjectID=mongoose.Types.ObjectId;



const BrandListService=async()=>{
    try{
        let data= await BrandModel.find();
        return {"Status":"Success",data:data};
    }catch(e){
        return {"Status":"Failed",data:e.toString()};
    }
}

const CategoryListService=async()=>{
    try{
        let data= await CategoryModel.find();
        return {"Status":"Success",data:data};
    }catch(e){
        return {"Status":"Failed",data:e.toString()};
    }
}

const SliderListService=async()=>{
    try{
        let data= await ProductSliderModel.find();
        return {"Status":"Success",data:data};
    }catch(e){
        return {"Status":"Failed",data:e.toString()};
    }
}



const ListByBrandService=async(req)=>{
    try{
        let BrandId=new ObjectID(req.params.BrandID);
        let MatchStage={$match:{brandID:BrandId}};
        let JoinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
         //convert categories property as an object because it's a array
        let UnwindBrandStage={$unwind:"$brand"};
        let UnwindCategoriesStage={$unwind:"$category"};
        let ProjectionStage={
            $project:{
                'brand._id':0,'category._id':0,'categoryID':0,'brandID':0
            }
        }
        
        let data=await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoriesStage,
            ProjectionStage
        ]);
        return {"Status":"Success",data:data};
    }catch(e){
        return {"Status":"Failed",data:e.toString()};
    }
}

const ListByCategoryService=async(req)=>{
    try{
        let CategoryId=new ObjectID(req.params.CategoryID);
        let MatchStage={$match:{categoryID:CategoryId}};
        let JoinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
         //convert categories property as an object because it's a array
        let UnwindBrandStage={$unwind:"$brand"};
        let UnwindCategoriesStage={$unwind:"$category"};
        let ProjectionStage={
            $project:{
                'brand._id':0,'category._id':0,'categoryID':0,'brandID':0
            }
        }
        
        let data=await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoriesStage,
            ProjectionStage
        ]);
        return {"Status":"Success",data:data};
    }catch(e){
        return {"Status":"Failed",data:e.toString()};
    }
}

const ListByRemarkService=async(req)=>{
    try{
        let Remark=req.params.Remark;

        let MatchStage={$match:{remark:Remark}};
        let JoinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
         //convert categories property as an object because it's a array
        let UnwindBrandStage={$unwind:"$brand"};
        let UnwindCategoriesStage={$unwind:"$category"};
        let ProjectionStage={
            $project:{
                'brand._id':0,'category._id':0,'categoryID':0,'brandID':0
            }
        }
        
        let data=await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoriesStage,
            ProjectionStage
        ]);
        return {"Status":"Success",data:data};
    }catch(e){
        return {"Status":"Failed",data:e.toString()};
    }
}




const ListBySimilerService=async()=>{
    
}

const ListByKeywordService=async()=>{
    
}



const DetailsService=async()=>{
    
}

const ReviewListService=async()=>{
    
}

module.exports={
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListByKeywordService,
    ListByRemarkService,
    ListBySimilerService,
    DetailsService,
    ReviewListService
}