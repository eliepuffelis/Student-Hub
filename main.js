
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

function openToolPage(index){
    //alert(index);
    closeToolPage()
    document.getElementsByClassName("toolPage")[index].style.visibility = 'visible'
    document.getElementsByClassName("toolPage")[index].style.opacity = '1'
}

function closeToolPage(){
    var toolPages = document.getElementsByClassName("toolPage");
    for (var i = 0; i < toolPages.length; i++) {
        toolPages[i].style.visibility = 'hidden'
        toolPages[i].style.opacity = '0'
    }
}