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




const ListBySimilerService=async(req)=>{
    try{
        let CategoryId=new ObjectID(req.params.CategoryID);
        let MatchStage={$match:{categoryID:CategoryId}};
        let limit={$limit:20};
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
            MatchStage,limit,
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



const ListByKeywordService=async(req)=>{
    try{
        //create search regex and option:i for case insensitive
        let SearchRegex={"$regex":req.params.Keyword,"$options":"i"};
        let SearchParams=[{title:SearchRegex},{shortDes:SearchRegex}];
        let SearchQuery={$or:SearchParams};


        let MatchStage={$match:SearchQuery};
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



const DetailsService=async(req)=>{
    try{
        let ProductID=new ObjectID(req.params.ProductID);
        let MatchStage={$match:{_id:ProductID}};
        let JoinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let JoinWithDetailsStage={$lookup:{from:"productdetails",localField:"_id",foreignField:"productID",as:"details"}};
        //convert categories property as an object because it's a array
        let UnwindBrandStage={$unwind:"$brand"};
        let UnwindCategoriesStage={$unwind:"$category"};
        let UnwindDetailsStage={$unwind:"$details"};
        let ProjectionStage={
            $project:{
                'brand._id':0,'category._id':0,'categoryID':0,'brandID':0
            }
        }
        
        let data=await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            JoinWithDetailsStage,
            UnwindBrandStage,
            UnwindCategoriesStage,
            UnwindDetailsStage,
            ProjectionStage
        ]);
        return {"Status":"Success",data:data};
    }catch(e){
        return {"Status":"Failed",data:e.toString()};
    }
}

const ReviewListService=async(req)=>{
    try{
        let ProductID=new ObjectID(req.params.ProductID);
        let MatchStage={$match:{productID:ProductID}};
        let JoinWithProfileStage={$lookup:{from:"profiles",localField:"userID",foreignField:"userID",as:"profile"}};
        let UnwindProfileStage={$unwind:"$profile"};
        let ProjectionStage={
            $project:{
                des:1,
                rating:1,
                'profile.cus_name':1
            }
        }


        let data=await ReviewModel.aggregate([
            MatchStage, JoinWithProfileStage,
            UnwindProfileStage,
            ProjectionStage
        ]);
        return {"Status":"Success",data:data};
    }catch(e){
        return {"Status":"Failed",data:e.toString()};
    }
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