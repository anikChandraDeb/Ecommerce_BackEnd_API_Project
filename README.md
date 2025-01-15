# **ShopEase Backend**  

Backend API for a feature-rich e-commerce platform designed to manage brands, categories, products, customer profiles, shopping carts, wishlists, invoices, and secure payment processing.

## **Project Overview**  
The ShopEase Backend API provides the necessary services to build and maintain a scalable e-commerce platform. This backend handles product management, user interactions, order processing, and integrates SSLCommerz for secure payment processing. Designed with modularity and extensibility in mind, it ensures that administrators and users have a smooth experience managing products and transactions.

---

## **Features**  

### **1. Brands Management**  
- Users can browse products by brand.  
- Each brand has a name, logo, and description.  
- Brands are displayed alongside products to help users identify items from specific manufacturers.

### **2. Categories Management**  
- A structured category system is provided to organize products efficiently.  
- Products are assigned to specific categories.  
- Users can browse and filter products based on categories.

### **3. Product Management**  
- Products have attributes such as name, description, price, and stock status.  
- Advanced search, filter, and sort options available for users.  
- Special sections for popular, new, top, special, trending, and regular products.  
- A dynamic slider section for featured products.  
- Product detail pages include comprehensive information, images, and user reviews.  
- Similar products are listed below the product detail page.

### **4. Product Reviews**  
- Users can leave reviews and ratings for products.  
- Reviews display user names, ratings, and comments.

### **5. Product Sliders**  
- Dynamic sliders to showcase featured products.  
- Administrators can customize and select products to be displayed in sliders.  
- Sliders are customizable in terms of layout and appearance.

### **6. Customer Profiles**  
- Users can create and manage profiles with personal information, order history, and saved addresses.  
- Easy 2-step OTP-based login system for secure authentication.

### **7. Shopping Cart**  
- Users can add and remove products from their shopping carts.  
- Carts display product details, quantities, prices, and total amounts.  
- Option to save carts for later or proceed to checkout.

### **8. Wishlist Management**  
- Users can create and manage wishlists.  
- Wishlists are linked to user profiles for easy access.  
- Users can move items from their wishlists to the shopping cart.

### **9. Invoices**  
- An invoice is generated for each successful transaction.  
- Invoices include order number, date, total amount, and billing information.  
- Users can view and download invoices from their profiles.

### **10. Invoice Products**  
- Each invoice lists the purchased products with names, quantities, prices, and subtotals.  
- Totals include subtotals, VAT, and other charges.

### **11. Payment Gateway Integration**  
- Integrated with SSLCommerz for secure payment processing.  
- Users can link their SSLCommerz accounts for seamless transactions.  
- All payment processing is encrypted and compliant with security standards.

---

## **Technology Stack**  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT and OTP-based login  
- **Payment Gateway**: SSLCommerz Integration  
- **Others**: RESTful API, API Documentation

---

## **Installation**  

1. Clone the repository:  
   ```bash
   git clone https://github.com/anikChandraDeb/ShopEase_Backend
   cd shopease_backend

2. Install dependencies:
   ```bash
   npm install  
3. Configure environment variables(Create a .env file and add the following): 
   ```bash
   
   DB_CONNECTION=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret_key>
   OTP_API_KEY=<otp_service_api_key>
   SSL_COMMERZ_API_KEY=<sslcommerz_api_key>
   PORT=3000
4. Run the application:
   ```bash
   npm start
  
   

