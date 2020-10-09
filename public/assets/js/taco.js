
// makes sure we wait to attach our handlers until the DOM is fully loaded.

$(function () {

    // POST // this area creates a new taco via the taco form area.

    $(".create-form").on("submit", function(event) {

        event.preventDefault();

        let newTaco = {

            // taco_name column of db =  id="taco" within the form area

            taco_name: $("#taco").val().trim(),

            // default value for false boolean MySQL = 0

            devoured: 0

        };

        // send the POST request.

        $.ajax("/api/tacos", {

            type: "POST",
            data: newTaco

        }).then(

            function() {

                console.log("DUUUDE! Created a new Taco!");

                // reload the page to get the updated list

                location.reload();

            }

        );

    });



    // UPDATE // devoured button that lives next to taco item

    $(".changeto-devoured").on("click", function (event) {

        var id = $(this).data("id");

        console.log(id);

        let newTaco = $(this).data("devoured");

        console.log("Current taco state: ", newTaco);

        // change to devoured state

        let newTacoState = {

            devoured: newTaco

        };

        // send the PUT request.

        $.ajax("/api/tacos/" + id, {

            type: "PUT",
            data: newTacoState

        }).then(

            function () {

                console.log("Changed devoured to", newTacoState);

                // reload the page to get the updated list

                location.reload();
            }

        );

    });


    // REMOVE // remove button

    $(".remove-taco").on("click", function(event) {

        let id = $(this).data("id");
    
        // send the DELETE request.

        $.ajax("/api/tacos/" + id, {

          type: "DELETE"

        }).then(

          function() {

            console.log("Removed that dank taco!", id);

            // Reload the page to get the updated list

            location.reload();
          }

        );

    });
    
});