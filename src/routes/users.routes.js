const express=require('express');
const {USersControllers}=require('../controllers/users.controller.js');

const objectUsers=new USersControllers();

const usersRouter=express.Router();

usersRouter.get('/',objectUsers.getUSers);
usersRouter.get('/:id',objectUsers.getUser);
usersRouter.post('/',objectUsers.postUsers);
usersRouter.delete('/:id',objectUsers.deleteUsers);

module.exports.usersRouter=usersRouter;