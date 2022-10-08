
function hobbiesResponse(){


    var extrainfo = document.getElementsByClassName("aboutHobby");

    for(var i=0; i<extrainfo.length; i+=1){  //Hiding if extra info about hobbies already visible.
        extrainfo[i].style.display = "none";
    }

    var elems = document.getElementsByClassName("hobby");

    var text = "You want to know more about:\n";
    for (var i=0; i<elems.length; i+=1){
        if(elems[i].checked == true){       //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_display_checkbox_text
            text += elems[i].name + "\n";
        }
    }

    window.alert(text);


    for(var i=0; i<extrainfo.length; i+=1){     // Displaying relevant info.
        if(elems[i].checked == true){
            extrainfo[i].style.display = "block";
        }
    }


}

