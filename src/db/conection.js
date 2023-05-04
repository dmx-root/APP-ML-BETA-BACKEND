const {createPool}=require('mysql2/promise');
const {config} =require('../db/config.js')

const db=createPool(config);

module.exports.db=db;