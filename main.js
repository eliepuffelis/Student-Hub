var toolBarOpen = false;

function toggleToolBar(){
    var toolBar = document.getElementById("toolBar")
    if(toolBarOpen){
        toolBar.style.left = '-8.45%'
        toolBarOpen = false;
    }
    else{
        toolBar.style.left = '0%'
        toolBarOpen = true;
    }
}