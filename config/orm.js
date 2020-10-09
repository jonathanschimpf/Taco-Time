
// import MySQL connection from connection.js

var connection = require("../config/connection.js");


// this function loops through and creates an array of..
//.. question marks - ["?", "?", "?"] - and turns it into a string.

// ["?", "?", "?"].toString() => "?,?,?";

const printQuestionMarks = num => {

    let arr = [];

    for (let i = 0; i < num; i++) {

        arr.push("?");

    }

    return arr.toString();

}


// this function helps to convert object key/value pairs to SQL syntax

function objToSql(ob) {

    var arr = [];

    // loop through the keys and push the key/value as a string int arr

    for (var key in ob) {

        var value = ob[key];

        // check to skip hidden properties

        if (Object.hasOwnProperty.call(ob, key)) {

            // if string with spaces, add quotations (Tacos Al Pastor => 'Tacos Al Pastor')

            if (typeof value === "string" && value.indexOf(" ") >= 0) {

                value = "'" + value + "'";

            }

            // e.g. {name: 'Tacos Al Pastor'} => ["name='Tacos Al Pastor'"]

            // e.g. {devoured: true} => ["devoured=true"]

            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string

    return arr.toString();
}


//object for all of the SQL statement functions..

var orm = {


    all: function () {

    },


    create: function() {


    },


    update: function() {


    },

    delete: function() {


    }


};


module.exports = orm;