const express=require('express');
const ProductController=require('../controllers/ProductController');
const UserController=require('../controllers/UserController');
const router=express.Router();

//Product
router.get('/BrandList',ProductController.BrandList);
router.get('/CategoryList',ProductController.CategoryList);
router.get('/ProductSliderList',ProductController.ProductSliderList);
router.get('/ProductListByBrand/:BrandID',ProductController.ProductListByBrand);
router.get('/ProductListByCategory/:CategoryID',ProductController.ProductListByCategory);
router.get('/ProductListBySimiler/:CategoryID',ProductController.ProductListBySimiler);
router.get('/ProductListByKeyword/:Keyword',ProductController.ProductListByKeyword);
router.get('/ProductListByRemark/:Remark',ProductController.ProductListByRemark);
router.get('/ProductDetails/:ProductID',ProductController.ProductDetails);
router.get('/ProductReviewList/:ProductID',ProductController.ProductReviewList);


//User
router.get('/UserOTP/:email',UserController.UserOTP);

module.exports=router;