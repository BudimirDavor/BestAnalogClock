function set(id, deg, timeAnimation) {
  var el = document.getElementById(id)
  rotation = 'rotate(' + deg + 'deg)'
  el.querySelector("DIV").style.animation ="clock linear "+timeAnimation+"s infinite"
  el.style.transform = rotation;
  el.style.webkitTransform = rotation;
}

setTimeout(function()
{
    var now = (new Date)
    set('hour', 30*(now.getHours()+now.getMinutes()/60), 60*60*24)
    set('minute', 6*(now.getMinutes()+now.getSeconds()/60), 60* 60)
    set('second', 6*(now.getSeconds()+now.getMilliseconds()/1000), 60)
},20)