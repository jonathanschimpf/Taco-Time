var orm = require("../config/orm.js");



var taco = {


all: function() {

    orm.selectAll({});

},

create: function () {

    orm.insertOne({});

},

update: function () {

    orm.updateOne({});

}


};



module.exports =taco;