/*global $*/
/*eslint-env browser*/
/*eslint "no-console": "off" */

$(document).ready(function(){

    showTable();
    activateMenu();

    function activateMenu(){
        $("#buttonContainer").click(function(e) {//this gets the clicking event!
                console.log(e);
                var id = e.target.id // this stores the id of the target of the clicking action
                console.log(id)
                    $("#" + id +"_menu").toggle(1000);
                })
    }
            
            
//                var menu = $("#buttonContainer .menu").map(function(){
//                    return $(this).attr("id")
//                            })
//                var menu =
////                    $("#buttonContainer").children("div").attr("id");
//                    $("#buttonContainer > div").attr("id");
//                console.log(menu)
//                var menuIds =[];
//                $(function(){
//                    $("div").each(function(){
//                        menuIds[menuIds.length] = $(this).attr('id');
//                    });
//                console.log(menuIds)
//});
//                menu.forEach(function(){
//                   for some reason it's not a function
//                })
//                if(menu.attr("id") === id + "_menu" ) {
//                   menu.toggle(1000);
//                }
//            
//                if($("div", this).attr("id") ==  id + "_menu"){
//                        $("#" + id + "_menu").toggle(1000)
//                    }
            
    
        
//        });
//        
//
//            
//    }

    function showTable(){
        $(".radio_input").on("click", function(){
            $(".menu").hide(1000);
            $("#indexContainer").hide();
            $("#tableContainer").show();
        })
    }

})