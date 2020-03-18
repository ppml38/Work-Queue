
function dontrefresh()
{
return "No No Noooooo !!\n\nIf you Refresh/Close this You will lose Work Queue.\nSo, Dont Refresh/Close this Dude, Please !!";
}

function ShowLocalDate()
{
var dNow = new Date();
var localdate= (dNow.getMonth()+1) + '/' + dNow.getDate() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
return localdate;
}
function addtaskentry()
{

if($.trim($("#task").val())!="")
$("#sheet").prepend(newtaskentry());
$("#task").val("");
}

function done(i)
{
$("#taskentry"+i).css("backgroundColor","green");
//$("#end"+i).html(""+ShowLocalDate()+"");
}
function pending(i)
{
$("#taskentry"+i).css("backgroundColor","skyblue");
//$("#end"+i).html("Not yet");
}
function rmv(i)
{
if(confirm("Are you sure to remove this ?"))
$("#taskentry"+i).remove();
}


function showctl(i)
{
$("#ctl"+i).css("visibility","visible");
}

function hidectl(i)
{
$("#ctl"+i).css("visibility","hidden");
}

function assignevents()
{

$("#add").click(
function()
{
addtaskentry();
}
);

$("#frm").submit(
function(e)
{
addtaskentry();
e.preventDefault(e);
}

);


}

