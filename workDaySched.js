// variable for the current time and con

var now = moment();
// console.log(now.toString());

// this line of code places the current date on the page
$("#currentDay").text(now.format("MMMM Do YYYY, h:mm:ss a"));

// please note I had some help from a tutor with the code below from lines 11 to  line 15
// this is the code to color code the time blocks

$(".time").each(function(){
    var divTime = parseInt($(this).text().split(":")[0])

    if (divTime < 9) {
        divTime += 12
        }

        var currentHour = moment().hours()
        
        if (divTime > currentHour) {
            $(".time").addClass("past");
            console.log("this is in the past")


        } else if (divTime < currentHour) {
            $(".time").addClass("future")
        console.log("this is in the future")
    } else {
            $(".time").addClass("present")
        }

})



   $("#btnSave1").click(function(event){        
var enterText9am=$("#input1").val()
$("#input1").val(localStorage)
console.log(enterText9am) 
}); 
       
//    });

   $("#btnSave2").click(function(event){        
    var enterText10am=$("#input2").val() 
    console.log(enterText10am)     
           
       });

       $("#btnSave3").click(function(event){        
        var enterText11am=$("#input3").val() 
        console.log(enterText11am)     
               
           })

           $("#btnSave4").click(function(event){        
            var enterText12pm=$("#input4").val() 
            console.log(enterText12pm)     
                   
               })

               $("#btnSave5").click(function(event){        
                var enterText1pm=$("#input5").val() 
                console.log(enterText1pm)     
                       
                   })

                   $("#btnSave6").click(function(event){        
                    var enterText2pm=$("#input6").val() 
                    console.log(enterText2pm)     
                           
                       })

                       $("#btnSave7").click(function(event){        
                        var enterText3pm=$("#input7").val() 
                        console.log(enterText3pm)     
                               
                           })

                           $("#btnSave8").click(function(event){        
                            var enterText4pm=$("#input8").val() 
                            console.log(enterText4pm)     
                                   
                               })

                               $("#btnSave9").click(function(event){        
                                var enterText5pm=$("#input9").val() 
                                console.log(enterText5pm)     
                                       
                                   })




// $(".time").each(function() {
// var divTime= $(this).text()
// var divTimeFormatted = moment(divTime, "hh:mmA")
// // console.log(divTimeFormatted)
// var currentHour = moment().format("h A")
// // console.log(currentHour)
// if(moment().max(divTimeFormatted, currentHour) === currentHour)
// console.log(moment.max(divTimeFormatted, currentHour))
// })




