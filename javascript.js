check("A1","a");

check("A2","b");

check("A3","c");

check("A4","d");

check("A5","e");

check("A6","f");

check("A7","g");

check("A8","h");

check("A9","i");

check("A10","j");

check("A11","k");

check("A12","l");

check("A13","m");

check("A14","n");

check("A15","o");

check("A16","p");

check("A17","q");

check("A18","r");

check("A19","s");

check("A20","t");

check("A21","u");

check("A22","v");

check("A23","w");

check("A24","x");

check("A25","y");

check("A26","z");

check("A27","a1");

check("A28","b1");

check("A29","c1");

check("A30","d1");

check("A31","e1");

check("A32","f1");

check("A33","g1");

check("A34","h1");

check("A35","i1");

check("A36","j1");

function check(A1, a){

    $("#"+A1).change(function(){

        if(this.checked){
    
            $("#"+a).css("pointer-events","auto");
            
            $("#"+a).val("1");
            
            $("#"+a).on("input", function() {

                if (!$("#"+a).val()){

                    $("#"+a).val("1");
    
                }

             });
            

        }else if(!this.checked){

            $("#"+a).css("pointer-events","none");
            
            $("#"+a).val("");

        }
    
    })

}

$("#confirmBets").click(function(){

    var money;

    var array = [];

    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (var i = 0; i < checkboxes.length; i++) {
                    
        array.push(checkboxes[i].value)

        $("#yourNumbers").html("<p>"+ array +"</p>");

    }

    var valArr = []

    var amount = document.querySelectorAll('input[type=number]')
    
    for (var x = 0; x < amount.length; x++) {
    
       valArr.push(amount[x].value) 

    }
    
    let arr = valArr;
    
    arr = arr.filter(item => item);
    
    $("#yourMoney").html("<br>"+arr);

    $("#run").click(function(){

        var firstOdds = 5.3;

        var mssg = "";

        var number = Math.floor(Math.random()*30) + 1;


        for( y = 0 ; y < array.length; y++){

          if(number == array[y]){

            if(number == 1){

              var money = $("#a").val() * firstOdds;

              mssg += "You won R"+ money + "!";
              winner();

            }else if(number == 2){

                var money = $("#b").val() * firstOdds;

                mssg += "You won R"+ money + "!";
                winner();
            }else if(number == 3){

                var money = $("#c").val() * firstOdds;

                mssg += "You won R"+ money + "!";
                winner();
            }else if(number == 4){

            var money = $("#d").val() * firstOdds;

            mssg += "You won R"+ money + "!";
            winner();
            }else if(number == 5){

              var money = $("#e").val() * firstOdds;

              mssg += "You won R"+ money + "!";
              winner();
              }else if(number == 6){

              var money = $("#f").val() * firstOdds;

              mssg += "You won R"+ money + "!";
              winner();
              }else if(number == 7){

                var money = $("#g").val() * firstOdds;

                mssg += "You won R"+ money + "!";
                winner();
                }else if(number == 8){

                var money = $("#h").val() * firstOdds;

                mssg += "You won R"+ money + "!";
                winner();
                }else if(number == 9){

                var money = $("#i").val() * firstOdds;

                mssg += "You won R"+ money + "!";
                winner();
                }else if(number == 10){

              var money = $("#j").val() * firstOdds;

              mssg += "You won R"+ money + "!";
              winner();
              }else if(number == 11){

              var money = $("#k").val() * firstOdds;

              mssg += "You won R"+ money + "!";
              winner();
              }else if(number == 12){

              var money = $("#l").val() * firstOdds;

              mssg += "You won R"+ money + "!";
              winner();
              }else if(number == 13){

              var money = $("#m").val() * firstOdds;

              mssg += "You won R"+ money + "!";
              winner();
              }else if(number == 14){

              var money = $("#n").val() * firstOdds;

              mssg += "You won R"+ money + "!";
              winner();
              }else if(number == 15){

              var money = $("#o").val() * firstOdds;

              mssg += "You won R"+ money + "!";
              winner();
              }else if(number == 16){

              var money = $("#p").val() * firstOdds;

              mssg += "You won R"+ money + "!";
              winner();
              }else if(number == 17){

              var money = $("#q").val() * firstOdds;

              mssg += "You won R"+ money + "!";
              winner();
              }else if(number == 18){

              var money = $("#r").val() * firstOdds;

              mssg += "You won R"+ money + "!";
              winner();
              }else if(number == 19){

              var money = $("#s").val() * firstOdds;

              mssg += "You won R"+ money + "!";
              winner();
              }else if(number == 20){

            var money = $("#t").val() * firstOdds;

            mssg += "You won R"+ money + "!";
            winner();
            }else if(number == 21){

            var money = $("#u").val() * firstOdds;

            mssg += "You won R"+ money + "!";
            winner();
            }else if(number == 22){

              var money = $("#v").val() * firstOdds;

              mssg += "You won R"+ money + "!";
              winner();
              }else if(number == 23){

                var money = $("#w").val() * firstOdds;

                mssg += "You won R"+ money + "!";
                winner();
                }else if(number == 24){

              var money = $("#x").val() * firstOdds;

              mssg += "You won R"+ money + "!";
              winner();
              }else if(number == 25){

              var money = $("#y").val() * firstOdds;

              mssg += "You won R"+ money + "!";
              winner();
              }else if(number == 26){

                var money = $("#z").val() * firstOdds;

                mssg += "You won R"+ money + "!";
                winner();
                }else if(number == 27){

                var money = $("#a1").val() * firstOdds;

                mssg += "You won R"+ money + "!";
                winner();
                }else if(number == 28){

                var money = $("#b1").val() * firstOdds;

                mssg += "You won R"+ money + "!";
                winner();
                }else if(number == 29){

                var money = $("#c1").val() * firstOdds;

                mssg += "You won R"+ money + "!";
                winner();
                }else if(number == 30){

                var money = $("#d1").val() * firstOdds;

                mssg += "You won R"+ money + "!";
                winner();
                }else if(number == 31){

                    var money = $("#e1").val() * firstOdds;
    
                    mssg += "You won R"+ money + "!";
                    winner();
                }else if(number == 32){

                    var money = $("#f1").val() * firstOdds;
    
                    mssg += "You won R"+ money + "!";
                    winner();
                }else if(number == 33){

                var money = $("#g1").val() * firstOdds;
        
                mssg += "You won R"+ money + "!";
                winner();
                }else if(number == 34){

                var money = $("#h1").val() * firstOdds;
    
                mssg += "You won R"+ money + "!";
                winner();
                }else if(number == 35){

                var money = $("#i1").val() * firstOdds;
    
                mssg += "You won R"+ money + "!";
                winner();
                }else if(number == 30){

                var money = $("#j1").val() * firstOdds;
    
                mssg += "You won R"+ money + "!";
                winner();
                }




          }

          if(mssg == ""){
                 var money = 0;
                }

        }

        money1= money;

        var mssg2 = "";

        var secondOdds = 4.11;

        var number2 = Math.floor(Math.random()*29) + 1;                    

        if (number2 == number) {
                      
            while (number2 == number) {

                    number2 = Math.floor(Math.random()*29) + 1;

                }
        }

        for( y = 0 ; y < array.length; y++){

            if(number2 == array[y]){

                if(number2 == 1){

                    var money = $("#a").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                    winner();

                }else if(number2 == 2){

                    var money = $("#b").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                    winner();
                }else if(number2 == 3){

                    var money = $("#c").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                    winner();
                }else if(number2 == 4){

                    var money = $("#d").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                    winner();
                }else if(number2 == 5){

                    var money = $("#e").val() * secondOdds;
                                
                    mssg2 += "You won R"+ money + "!";
                    winner();
                }else if(number2 == 6){

                    var money = $("#f").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                    winner();
                }else if(number2 == 7){

                    var money = $("#g").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                    winner();
                }else if(number2 == 8){

                    var money = $("#h").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                    winner();
                }else if(number2 == 9){

                    var money = $("#i").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                     winner();
                }else if(number2 == 10){

                    var money = $("#j").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                    winner();
                }else if(number2 == 11){

                    var money = $("#k").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                    winner();
                }else if(number2 == 12){

                    var money = $("#l").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                    winner();
                }else if(number2 == 13){

                    var money = $("#m").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                    winner();
                 }else if(number2 == 14){

                    var money = $("#n").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                    winner();
                }else if(number2 == 15){

                    var money = $("#o").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                    winner();
                }else if(number2 == 16){

                    var money = $("#p").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                    winner();
                }else if(number2 == 17){

                    var money = $("#q").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                    winner();
                }else if(number2 == 18){

                    var money = $("#r").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                    winner();
                }else if(number2 == 19){

                    var money = $("#s").val() * secondOdds;

                    mssg2 += "You won R"+ money + "!";
                                
                    winner();
                    
                }else if(number2 == 20){

                            
                    var money = $("#t").val() * secondOdds;

                    
                    mssg2 += "You won R"+ money + "!";
                    
                    winner();
                    
                }else if(number2 == 21){

                
                    var money = $("#u").val() * secondOdds;

                
                    mssg2 += "You won R"+ money + "!";
                
                    winner();
                
                }else if(number2 == 22){

                
                    var money = $("#v").val() * secondOdds;

                
                    mssg2 += "You won R"+ money + "!";
                
                    winner();
                
                }else if(number2 == 23){

                
                    var money = $("#w").val() * secondOdds;

                
                    mssg2 += "You won R"+ money + "!";
                
                    winner();
                
                }else if(number2 == 24){

                
                    var money = $("#x").val() * secondOdds;

                
                    mssg2 += "You won R"+ money + "!";
                
                    winner();
                
                }else if(number2 == 25){

                
                    var money = $("#y").val() * secondOdds;

                
                    mssg2 += "You won R"+ money + "!";
                
                    winner();
                
                }else if(number2 == 26){

                
                    var money = $("#z").val() * secondOdds;

                
                    mssg2 += "You won R"+ money + "!";
                
                    winner();
                
                }else if(number2 == 27){

                
                    var money = $("#a1").val() * secondOdds;

                
                    mssg2 += "You won R"+ money + "!";
                
                    winner();
                
                }else if(number2 == 28){

                
                    var money = $("#b1").val() * secondOdds;

                
                    mssg2 += "You won R"+ money + "!";
                
                    winner();
                
                }else if(number2 == 29){

                
                    var money = $("#c1").val() * secondOdds;

                
                    mssg2 += "You won R"+ money + "!";
                
                    winner();
                
                }else if(number2 == 30){

                
                    var money = $("#d1").val() * secondOdds;

                
                    mssg2 += "You won R"+ money + "!";
                
                    winner();
                
                }else if(number2 == 31){

                
                    var money = $("#e1").val() * secondOdds;

                
                    mssg2 += "You won R"+ money + "!";
                
                    winner();
                
                }else if(number2 == 32){

                
                    var money = $("#f1").val() * secondOdds;

                
                    mssg2 += "You won R"+ money + "!";
                
                    winner();
                
                }else if(number2 == 33){

                
                    var money = $("#g1").val() * secondOdds;

                
                    mssg2 += "You won R"+ money + "!";
                
                    winner();
                
                }else if(number2 == 34){

                
                    var money = $("#h1").val() * secondOdds;

                
                    mssg2 += "You won R"+ money + "!";
                
                    winner();
                
                }else if(number2 == 35){

                
                    var money = $("#i1").val() * secondOdds;

                
                    mssg2 += "You won R"+ money + "!";
                
                    winner();
                
                }else if(number2 == 36){

                
                    var money = $("#j1").val() * secondOdds;

                
                    mssg2 += "You won R"+ money + "!";
                
                    winner();
                
                }
                
            }

                 
            if(mssg2 == ""){
            
                var money = 0;
            
            }
            
        }
        
        money2= money;

        var mssg3 = "";

    var thirdOdds = 2.81;


   var number3 = Math.floor(Math.random()*28) + 1;

    if (number3 == number || number3 == number2) {
      
    while (number2 == number || number3 == number2) {

        number3 = Math.floor(Math.random()*28) + 1;

    }
    
}

    
    for( y = 0 ; y < array.length; y++){

        if(number3 == array[y]){

        if(number3 == 1){

            var money = $("#a").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();

        }else if(number3 == 2){

            var money = $("#b").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
        }else if(number3 == 3){

            var money = $("#c").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
        }else if(number3 == 4){

        var money = $("#d").val() * thirdOdds;

        mssg3 += "You won R"+ money + "!";
        winner();
        }else if(number3 == 5){

            var money = $("#e").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 6){

            var money = $("#f").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 7){

            var money = $("#g").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 8){

            var money = $("#h").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 9){

            var money = $("#i").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 10){

            var money = $("#j").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 11){

            var money = $("#k").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 12){

            var money = $("#l").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 13){

            var money = $("#m").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 14){

            var money = $("#n").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 15){

            var money = $("#o").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 16){

            var money = $("#p").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 17){

            var money = $("#q").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 18){

            var money = $("#r").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 19){

            var money = $("#s").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 20){

        var money = $("#t").val() * thirdOdds;

        mssg3 += "You won R"+ money + "!";
        winner();
        }else if(number3 == 21){

        var money = $("#u").val() * thirdOdds;

        mssg3 += "You won R"+ money + "!";
        winner();
        }else if(number3 == 22){

            var money = $("#v").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 23){

            var money = $("#w").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 24){

            var money = $("#x").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 25){

            var money = $("#y").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 26){

            var money = $("#z").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 27){

            var money = $("#a1").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 28){

            var money = $("#b1").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 29){

            var money = $("#c1").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 30){

            var money = $("#d1").val() * thirdOdds;

            mssg3 += "You won R"+ money + "!";
            winner();
            }else if(number3 == 31){

                var money = $("#e1").val() * thirdOdds;
    
                mssg3 += "You won R"+ money + "!";
                
                winner();
                
            }else if(number3 == 32){

                var money = $("#f1").val() * thirdOdds;
    
                mssg3 += "You won R"+ money + "!";
                
                winner();
                
            }else if(number3 == 33){

                var money = $("#g1").val() * thirdOdds;
    
                mssg3 += "You won R"+ money + "!";
                
                winner();
                
            }else if(number3 == 34){

                var money = $("#h1").val() * thirdOdds;
    
                mssg3 += "You won R"+ money + "!";
                
                winner();
                
            }else if(number3 == 35){

                var money = $("#i1").val() * thirdOdds;
    
                mssg3 += "You won R"+ money + "!";
                
                winner();
                
            }else if(number3 == 36){

                var money = $("#j1").val() * thirdOdds;
    
                mssg3 += "You won R"+ money + "!";
                
                winner();
                
            }

        }

        if(mssg3 == ""){
           var money = 0;
          }

        }
       
        money3 = money;

       
        var mssg4 = "";

       
        var fourthOdds = 2.00;

       
        var number4 = Math.floor(Math.random()*27) + 1;

       
        if (number4 == number || number4 == number2 || number4 == number3) {
                            
       
            while (number4 == number || number4 == number2 || number4 == number3) {

       
                number4 = Math.floor(Math.random()*27) + 1;

       
            }
       
        }



       
        for( y = 0 ; y < array.length; y++){

       
            if(number4 == array[y]){

       
                if(number4 == 1){

       
                    var money = $("#a").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();

       
                }else if(number4 == 2){

       
                    var money = $("#b").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 3){

       
                    var money = $("#c").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 4){

       
                    var money = $("#d").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 5){

       
                    var money = $("#e").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 6){

       
                    var money = $("#f").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 7){

       
                    var money = $("#g").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 8){

       
                    var money = $("#h").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 9){

       
                    var money = $("#i").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 10){

       
                    var money = $("#j").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 11){

       
                    var money = $("#k").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 12){

       
                    var money = $("#l").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 13){

       
                    var money = $("#m").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 14){

       
                    var money = $("#n").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 15){

       
                    var money = $("#o").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 16){

       
                    var money = $("#p").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 17){

       
                    var money = $("#q").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 18){

       
                    var money = $("#r").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 19){

       
                    var money = $("#s").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 20){

       
                    var money = $("#t").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 21){

       
                    var money = $("#u").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 22){

       
                    var money = $("#v").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 23){

       
                    var money = $("#w").val() * fourthOdds;

       
                    mssg4 += "You won R"+ money + "!";
       
                    winner();
       
                }else if(number4 == 24){


                    var money = $("#x").val() * fourthOdds;


                    mssg4 += "You won R"+ money + "!";

                    winner();

                }else if(number4 == 25){


                    var money = $("#y").val() * fourthOdds;


                    mssg4 += "You won R"+ money + "!";

                    winner();

                }else if(number4 == 26){


                    var money = $("#z").val() * fourthOdds;


                    mssg4 += "You won R"+ money + "!";

                    winner();

                }else if(number4 == 27){


                    var money = $("#a1").val() * fourthOdds;


                    mssg4 += "You won R"+ money + "!";

                    winner();

                }else if(number4 == 28){


                    var money = $("#b1").val() * fourthOdds;


                    mssg4 += "You won R"+ money + "!";

                    winner();

                }else if(number4 == 29){


                    var money = $("#c1").val() * fourthOdds;


                    mssg4 += "You won R"+ money + "!";

                    winner();

                }else if(number4 == 30){


                    var money = $("#d1").val() * fourthOdds;


                    mssg4 += "You won R"+ money + "!";

                    winner();

                }else if(number4 == 31){


                    var money = $("#e1").val() * fourthOdds;


                    mssg4 += "You won R"+ money + "!";

                    winner();

                }else if(number4 == 32){


                    var money = $("#f1").val() * fourthOdds;


                    mssg4 += "You won R"+ money + "!";

                    winner();

                }else if(number4 == 33){


                    var money = $("#g1").val() * fourthOdds;


                    mssg4 += "You won R"+ money + "!";

                    winner();

                }else if(number4 == 34){


                    var money = $("#h1").val() * fourthOdds;


                    mssg4 += "You won R"+ money + "!";

                    winner();

                }else if(number4 == 35){


                    var money = $("#i1").val() * fourthOdds;


                    mssg4 += "You won R"+ money + "!";

                    winner();

                }else if(number4 == 36){

                    var money = $("#j1").val() * fourthOdds;

                    mssg4 += "You won R"+ money + "!";

                    winner();

                }

            }


            if(mssg4 == ""){

                var money = 0;

            }


        }

        money4 = money;

        var mssg5 = "";

           var fifthOdds = 1.06;

           var number5 = Math.floor(Math.random()*26) + 1;

           if (number5 == number || number5 == number2 || number5 == number3 || number5 == number4) {


           while (number5 == number || number5 == number2 || number5 == number3 || number5 == number4) {

               number5 = Math.floor(Math.random()*26) + 1;

           }
       }


       for( y = 0 ; y < array.length; y++){

           if(number5 == array[y]){

           if(number5 == 1){

               var money = $("#a").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();

           }else if(number5 == 2){

               var money = $("#b").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
           }else if(number5 == 3){

               var money = $("#c").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
           }else if(number5 == 4){

           var money = $("#d").val() * fifthOdds;

           mssg5 += "You won R"+ money + "!";
           winner();
           }else if(number5 == 5){

               var money = $("#e").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 6){

               var money = $("#f").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 7){

               var money = $("#g").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 8){

               var money = $("#h").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 9){

               var money = $("#i").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 10){

               var money = $("#j").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 11){

               var money = $("#k").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 12){

               var money = $("#l").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 13){

               var money = $("#m").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 14){

               var money = $("#n").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 15){

               var money = $("#o").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 16){

               var money = $("#p").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 17){

               var money = $("#q").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 18){

               var money = $("#r").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 19){

               var money = $("#s").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 20){

           var money = $("#t").val() * fifthOdds;

           mssg5 += "You won R"+ money + "!";
           winner();
           }else if(number5 == 21){

           var money = $("#u").val() * fifthOdds;

           mssg5 += "You won R"+ money + "!";
           winner();
           }else if(number5 == 22){

               var money = $("#v").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 23){

               var money = $("#w").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 24){

               var money = $("#x").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 25){

               var money = $("#y").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 26){

               var money = $("#z").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 27){

               var money = $("#a1").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 28){

               var money = $("#b1").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
               }else if(number5 == 29){

               var money = $("#c1").val() * fifthOdds;

               mssg5 += "You won R"+ money + "!";
               winner();
            }else if(number5 == 30){

                var money = $("#d1").val() * fifthOdds;

                mssg5 += "You won R"+ money + "!";
                
                winner();
            
            }else if(number5 == 31){

                var money = $("#e1").val() * fifthOdds;

                mssg5 += "You won R"+ money + "!";
                
                winner();
            
            }else if(number5 == 32){

                var money = $("#f1").val() * fifthOdds;

                mssg5 += "You won R"+ money + "!";
                
                winner();
            
            }else if(number5 == 33){

                var money = $("#g1").val() * fifthOdds;

                mssg5 += "You won R"+ money + "!";
                
                winner();
            
            }else if(number5 == 34){

                var money = $("#h1").val() * fifthOdds;

                mssg5 += "You won R"+ money + "!";
                
                winner();
            
            }else if(number5 == 35){

                var money = $("#i1").val() * fifthOdds;

                mssg5 += "You won R"+ money + "!";
                
                winner();
            
            }else if(number5 == 36){

                var money = $("#j1").val() * fifthOdds;

                mssg5 += "You won R"+ money + "!";
                
                winner();
            
            }

          
        }

           
        if(mssg5 == ""){
      
            var money = 0;
     
        }
         
    }
      
    money5 = money;

    var totalWinnings = money1 + money2 + money3 + money4 + money5;

    $("#totalWinnings").html(totalWinnings);

    var z = 0;

        if(array.length == 5){

      for ( i = 0; i < array.length; i++) {

        if(number == array[i]){

          z += 1;

        }

        if(number2 == array[i]){

          z += 1;

        }

        if(number3 == array[i]){

          z += 1;

        }

        if(number4 == array[i]){

          z += 1;

        }

        if(number5 == array[i]){

          z += 1;

        }

        if(z == 5){

          var ultimateBonus = 20000; 

          $("#Bonus").html("You won the R20 000  numbers Bonus!!");

        } 

      }

      }



      var y = 0;

        if(array.length == 4){

      for ( i = 0; i < array.length; i++) {

        if(number == array[i]){

          y += 1;

        }

        if(number2 == array[i]){

          y += 1;

        }

        if(number3 == array[i]){

          y += 1;

        }

        if(number4 == array[i]){

          y += 1;

        }

        if(number5 == array[i]){

          y += 1;

        }

        if(y == 4){

          var superBonus = 5000;

          $("#Bonus").html("You won R5 000 Bonus!!");

        } 

      }

    }

    var v = 0;

if(array.length > 5){

for ( i = 0; i < array.length; i++) {

  if(number == array[i]){

    v += 1;

  }

  if(number2 == array[i]){

    v += 1;

  }

  if(number3 == array[i]){

    v += 1;

  }

  if(number4 == array[i]){

    v += 1;

  }

  if(number5 == array[i]){

    v += 1;

  }

  if(v == 5){

    var Bonus = (10/array.length) * totalWinnings; 

    $("#Bonus").html("You won R"+Bonus+" Bonus!!");

  }

  if(v == 4){

    var Bonus = (5/array.length) * totalWinnings; 

    $("#Bonus").html("You won R"+Bonus+" Bonus!!");

  }  

  if(v == 3){

  var Bonus = (2.5/array.length) * totalWinnings; 

  $("#Bonus").html("You won R"+Bonus+" Bonus!!");

  }  

}

}

function winner() {

    $("#fisrtDraw").html(mssg);
    $("#secondDraw").html(mssg2);
    $("#thirdDraw").html(mssg3);
    $("#fourthDraw").html(mssg4);
    $("#fifthDraw").html(mssg5);

  }

  if(mssg == ""){

    $("#fisrtDraw").html("you lost!");

  }

  if(mssg2 == ""){

    $("#secondDraw").html("you lost!");

  }

  if(mssg3 == ""){

    $("#thirdDraw").html("you lost!");

  }

  if(mssg4 == ""){

    $("#fourthDraw").html("you lost!");

  }

  if(mssg5 == ""){

    $("#fifthDraw").html("you lost!");

  }


$("#number").html(number);
$("#number2").html(number2);
$("#number3").html(number3);
$("#number4").html(number4);
$("#number5").html(number5);


    });

});



