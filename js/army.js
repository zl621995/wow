window.onload=function(){
	var rightBottom=$('.right-bottom')[0];
	var offsetTop=getOffset(rightBottom);
	var scrollTop=0;
	var spaceWidth=0;
	window.onscroll=function(){
		// alert(window.innerWidth);
		scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		spaceWidth=(window.innerWidth-1120)/2;		
		if(scrollTop>=offsetTop){
			rightBottom.style.position='fixed';			
			rightBottom.style.top='0px';			
			rightBottom.style.left=(spaceWidth+800)+'px';			
		}else{
			rightBottom.style.position='';			
		}
	}
}