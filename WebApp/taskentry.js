var i=1;
function newtaskentry()
{
var a="\
<div class='redder' id='taskentry"+(i++)+"' onmouseover='showctl("+(i-1)+")' onmouseleave='hidectl("+(i-1)+")'>\
<table width='100%'>\
<tr>\
<td class='wt' contentEditable='true'>"+$("#task").val()+"</td>\
<td align='center' rowspan='3' width='10%' class='ctl' id='ctl"+(i-1)+"'>\
<button onclick='pending("+(i-1)+")'>Processing</button><br>\
<button onclick='done("+(i-1)+")'>Finished</button>\
<button onclick='rmv("+(i-1)+")'>Remove</button>\
</td>\
</tr>\
<tr><td contentEditable='true' class='lower'>Notes</td></tr>\
</table>\
</div>";

return a;
}


/*
<tr>\
<td align='right'>\
<table class='lower'>\
<tr><td><b>Entered:</b></td><td contentEditable='true'>"+ShowLocalDate()+"</td><td><b>Finished:</b></td><td contentEditable='true' id='end"+(i-1)+"'>Not yet</td></tr>\
</table>\
</td>\
</tr>\
*/