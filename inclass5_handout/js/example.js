// ADD NEW ITEM TO END OF LIST
var node, textnode;
node = document.createElement("li");
var list = document.getElementsByTagName("ul")[0];
textnode = document.createTextNode("cream");
node.appendChild(textnode);
list.appendChild(node);

// ADD NEW ITEM START OF LIST
node = document.createElement("li");
textnode = document.createTextNode("kale");
node.appendChild(textnode);
list.insertBefore(node, list.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var elementList = document.getElementsByTagName("li");
for(var i = 0; i < elementList.length; i++)
{
    elementList[i].classList.add('cool');
}
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var header_count = document.getElementsByTagName("h2")[0];
var listItem = list.getElementsByTagName("li");
node = document.createElement("span");
textnode = document.createTextNode(listItem.length);
node.appendChild(textnode);
header_count.appendChild(node);
