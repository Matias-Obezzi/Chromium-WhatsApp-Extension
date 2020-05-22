const id_button = "sidebarToggler";
const abierto = '<svg class="svg-icon" viewBox="0 0 20 20"><path fill="none" d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08 c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469 c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304 c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"></path></svg>';
const cerrado = '<svg class="svg-icon" viewBox="0 0 20 20"><path fill="none" d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314 c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743 s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314 c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path></svg>';



var hide = false;
var firstClick = false;

var newButton = document.createElement("button");
newButton.setAttribute("id",id_button);
newButton.setAttribute("class","menu-toggler btn");
if(!hide){
    newButton.innerHTML = abierto;
}else{
    newButton.innerHTML = cerrado;
}
document.querySelector("#app").appendChild(newButton)
    
var button = $("#"+id_button)

button.click(function(){
    actionOnMenu();
})

document.addEventListener("keyup", function(event){
    if(event.target.classList.value == "_2S1VP copyable-text selectable-text" && event.keyCode > 64 && event.keyCode < 91){
        // event.target.innerText = event.target.innerText.replace(/^\w/, (c) => c.toUpperCase())
        event.target.innerText = event.target.innerText[0].toUpperCase() + event.target.innerText.slice(1)
        setEndOfContenteditable(event.target)
    }
    if (event.ctrlKey && event.keyCode == 77) {
        // call your function to do the thing
        actionOnMenu();
    }
})

$(document).click(function(el){
    if(contactClick(el.target)){
        actionOnMenu();
    }
})

function contactClick(element){
    var web = false;
    var contactClass = false;
    if(element != null){
        var classList = element.classList.value.split(" ");
        if(classList.indexOf("web")!=-1 || classList.indexOf("_1RQfk")!=-1 || (classList.indexOf("_2EXPL")!=-1 && classList.indexOf("hover _2EXPL")!=-1) || element.innerHTML=='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21"><path fill="currentColor" d="M4.8 6.1l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"></path></svg>'){
            // console.log(false)
            return false
        // }else if(classList.indexOf("_2EXPL")!=-1 || (classList.indexOf("_2S1VP")!=-1 && classList.indexOf("copyable-text")!=-1 && classList.indexOf("selectable-text")!=-1)){
        }else if(classList.indexOf("_2EXPL")!=-1){
            // console.log(true)
            return true;
        }else{
            // console.log("Recursividad")
            return contactClick(element.parentElement);
        }
    }
    console.log(false)
    return false
    
}

function actionOnMenu(){
    if(!firstClick){
        button.css("display","block");
        firstClick = true;
    }
    hide = !hide;
    if(!hide){
        $("#app > div > div > div._1-iDe._1xXdX").css('display',"block");
        $("#side > header > div._2umId").css('padding-left', '30px');
        $("#main > header").css('padding-left', '10px');
        button[0].innerHTML = abierto
    }else{
        $("#app > div > div > div._1-iDe._1xXdX").css('display',"none");
        $("#side > header > div._2umId").css('padding-left', '10px');
        $("#main > header").css('padding-left', '50px');
        button[0].innerHTML = cerrado;
    }
}

function setEndOfContenteditable(contentEditableElement){
    var range,selection;
    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    else if(document.selection)//IE 8 and lower
    { 
        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        range.select();//Select the range (make it the visible selection
    }
}