
//program to get json array from a parent tag(div)

var div_array= document.getElementsByTagName("div");
///1st div tag of html page
var parent_tag=div_array[0];
/*overall json object retreival*/
var overall_dom = createDom(parent_tag);
console.log(overall_dom);


function createDom(tag_parent)
{
	/*gets the tagname */
	var inner_tag = tag_parent.localName;/*when used tag_parent only issues in src and attribute*/
	tag_parent.style.marginBottom="5px";
	/*gets the classname*/
	var inner_class = tag_parent.className;
	var inner_id=tag_parent.id;
	/*counts the child no of the tag*/
	var child_no = tag_parent.childElementCount;
	var inner_children = [];
	var i=0;
	/*constructing dom object*/
	while(i<child_no)
	{
		
		child = tag_parent.children[i];/*child of the parent tag*/
		var child_dom = createDom(child);/*recursive function to get children from the parent tag*/
		inner_children[i]=child_dom;
		i++;
	}
	//creating a dom object
	var a="img";
	var b="button";
	var content_dom;
	if(a==inner_tag)
	{
		var inner_src=tag_parent.getAttribute("src");
		var inner_attribute=tag_parent.getAttribute("attribute");
		content_dom = {tag:inner_tag, 
						class:inner_class, 
						src:inner_src, 
						id:inner_id,
						attribute:inner_attribute,
						children:inner_children};
	}
	else if(b==inner_tag)
	{
		var inner_name=tag_parent.getAttribute("name");
		var inner_onclick=tag_parent.getAttribute("id");
		content_dom={tag:inner_tag, 
						class:inner_class,	
						content:tag_parent.innerText,
						name:inner_name,
						id:inner_id,
						onclick:inner_onclick
						};
	}
	
	else{	
		content_dom = {tag:inner_tag,
						id:inner_id,
						class:inner_class,
						content:tag_parent.innerText,
						children:inner_children};
	}
	return content_dom;
	
}


//extra addon
function Resize_img(){
	var i=document.getElementById("img-aa");
	i.setAttribute("src",'image/mountain.jpg');
	var p_bat=document.getElementById("batman");
	var p_mount=document.getElementById("mountain");
	p_bat.innerText=p_mount.innerText;
}




