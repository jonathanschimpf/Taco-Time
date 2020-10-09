// import the ORM tcreates functions that will interact with the database.

var orm = require("../config/orm.js");



// calls on the orm functions..

var taco = {


    // returns RowDataPacket array results 
    //from tacos table to router

    all: function (cb) {

        orm.all("tacos", res => cb(res));

    },

    // the variables cols and vals are arrays.

    create: function (cols, vals, cb) {

        orm.create("tacos", cols, vals, res => cb(res));

    },


    update: function (objColVals, condition, cb) {

        orm.update("tacos", objColVals, condition, res => cb(res));

    },


    remove: function (val, cb) {

        orm.remove("tacos", "id", val, res => cb(res));
        

    }

};




module.exports = taco;