const Sequelize=require("sequelize");
const sequelize = new Sequelize('testdb', 'root', 'root', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

const Product=sequelize.define("products", {
      Product_id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          
          },
      Product_Name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      Product_Price: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      Purchase_Quantity:{
        type: Sequelize.INTEGER,
        allowNull: true
      },
      Purchase_Amount:{
        type: Sequelize.INTEGER,
        allowNull: true
      },
    }
    , {
      timestamps: false
    });
  
module.exports=Product;