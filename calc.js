display = document.getElementById("out")

buffer = 0
IsPointed = false
action = ""
firstSym = true
otherSym = false

function NumberClick(num) {
    
    if (String(num) == ".") {
        if (IsPointed) {
            return 
        }
        IsPointed = true
    }
    
    if (display.textContent.length == 13) {
        return
    }
    if (display.textContent[0] == "0") {
        if (display.textContent[1] !== "."){
            display.textContent = String(num)
        }
        else{
            display.textContent += String(num)
        }
        
    } else {
        display.textContent += String(num)
        
    }
    if (display.textContent == "."){
        display.textContent = "0."
    }
}
function Clear(){
    display.textContent = "0"
    buffer = 0
    firstSym = true
    otherSym = false
    IsPointed = false
}
function BackSpace(){
    if (display.textContent[display.textContent.length - 1] == ","){
        IsPointed = false
    }
    display.textContent = display.textContent.slice(0,-1)
    if (display.textContent == ""){
        display.textContent = "0"
    }
}
function doAction(act){
    buffer = parseFloat(display.textContent)
    display.textContent = "0"
    action = act
    IsPointed = false
}
function equal(){
    
    switch (action) {
        case "sum":
            display.textContent = String(buffer + parseFloat(display.textContent))
            break;
        case "dif":
            display.textContent = String(buffer - parseFloat(display.textContent))
            break;
        case "div":
            display.textContent = String(buffer / parseFloat(display.textContent))
            break;
        case "mult":
            display.textContent = String(buffer * parseFloat(display.textContent))
            break;
       
        default:
            break;
    }
    while (display.textContent.length > 14) {
        display.textContent = display.textContent.slice(0,-1)
    }
}

