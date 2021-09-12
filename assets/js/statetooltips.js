var example = document.getElementById('map'); 

example.onmousemove = function(e) { 
    var x = e.pageX - this.offsetLeft; 
    var y = e.pageY - this.offsetTop; 
//    console.log(x+" "+y);
}