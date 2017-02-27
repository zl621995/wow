window.onload=function(){
	var tpyyxw=$('#tpyyxw');
	var menulist=$('.menu-list')[0];

	var nbInfo=$('.nb-info')[0];
	var nbInfochild1=removeTextNode(nbInfo)[0];
	var nblogin=document.getElementsByClassName('nb-login')[0];

	// var nbInfo2=$('.nb-info')[0];
	var nbInfo2child2=removeTextNode(nbInfo)[2];
	// alert(nbInfo2child2.innerHTML);
	var nbLuntan=$('.nb-luntan')[0];

	addEvent(tpyyxw,'mouseover',function(){
		menulist.style.display='block';
	})
	addEvent(tpyyxw,'mouseout',function(){
		menulist.style.display='none';
	})
	addEvent(menulist,'mouseover',function(){
		menulist.style.display='block';
	})
	addEvent(menulist,'mouseout',function(){
		menulist.style.display='none';
	})

	addEvent(nbInfochild1,'mouseover',function(){
		changeDisplay(nblogin);
	})
	addEvent(nbInfochild1,'mouseout',function(){
		changeDisplay(nblogin);
	})
	addEvent(nblogin,'mouseover',function(){
		changeDisplay(nblogin);
	})
	addEvent(nblogin,'mouseout',function(){
		changeDisplay(nblogin);
	})
	addEvent(nbInfo2child2,'mouseover',function(){
		changeDisplay(nbLuntan);
	})
	addEvent(nbInfo2child2,'mouseout',function(){
		changeDisplay(nbLuntan);
	})
	addEvent(nbLuntan,'mouseover',function(){
		changeDisplay(nbLuntan);
	})
	addEvent(nbLuntan,'mouseout',function(){
		changeDisplay(nbLuntan);
	})

//main01 的图片切换
	var picsTitle=$('#pics-title');
	var picsChilds=removeTextNode(picsTitle);
	var num=1;
	var opa=0;
	var pics=$('#pics');
	var interId=setInterval(changeSelect,2000);
	for(var i = 0; i < picsChilds.length;i++){
		addEvent(picsChilds[i],'mouseover',function(evt){
			var target=getTarget(evt);
			clearInterval(interId);
			for(var j=0;j<picsChilds.length;j++){
				if(picsChilds[j].innerText==target.innerText){
					target.firstChild.typeName==1?target.firstChild.style.color="#d6d1ff":target.style.color="#d6d1ff";
					target.style.backgroundPosition='0 -54px';
					target.firstChild.style.color="#d6d1ff";
					pics.src='images/scroll'+(j+1)+'.jpg';
				}else{
					picsChilds[j].style.backgroundPosition='0 0';
					picsChilds[j].firstChild.style.color="#aba65d";
				}
			}
		})
		addEvent(picsChilds[i],'mouseout',function(evt){
			var target=getTarget(evt);
			for(var j=0;j<picsChilds[j];j++){
				if(target==picsChilds[j]){
					num=j+1;
				}
				
			}
			interId=setInterval(changeSelect,2000);
		})
	}

	function changeSelect(){
		for(var i=0;i<picsChilds.length;i++){
			if(i==(num-1)){
				picsChilds[i].style.backgroundPosition='0 -54px';
				picsChilds[i].firstChild.style.color='#d6d1ff';
				opa=0;
				pics.src='images/scroll'+num+'.jpg';				
				setTimeout(changeOpa,150);
			}else{
				picsChilds[i].style.backgroundPosition='0 0';
				picsChilds[i].firstChild.style.color='#aba65d';
			}		
		}
		num==4?num=1:num++;	
	}
	function changeOpa(){
		if(opa!=100){
			setTimeout(changeOpa,150);
		}
		pics.style.opacity=opa/100;
		opa+=10;
	}
	//main02的菜单
	var pagination=document.getElementById('pagination');
	var pagins=removeTextNode(pagination);
	var pagContent=document.getElementById('pagContent');
	var pagChilds=removeTextNode(pagContent);
	for(var i= 0;i<pagins.length;i++){
		addEvent(pagins[i],'mouseover',function(evt){
			var target=getTarget(evt);
			empty(pagContent);
			var str='';
			for(var i=0;i<15;i++){
			// 	var li=document.createElement('li');
			// 	li.appendChild(document.createTextNode(target.innerText));
			// 	pagContent.appendChild(li);
			str+='<li><i>01/26</i><a href="###">'+target.innerText+'</a></li>';
			}
			pagContent.innerHTML=str;
		})
	}
	//魔兽世界职业切换
	var main05Content=$('.main05Content')[0];
	var main05ContentChilds=removeTextNode(main05Content);
	var main05bottomcenter=$('.bottom-center')[0];
	var main05bottomcenterChild=removeTextNode(main05bottomcenter);
	for(var i=0; i<main05ContentChilds.length;i++){
		addEvent(main05ContentChilds[i],'mouseover',function(evt){
			empty(main05bottomcenter);
			var target=getTarget(evt);
			var str='';
			for(var i=0;i<15;i++){
				str+='<p><i>01/26</i><a href="###">'+target.innerText+'</a></p>';


				var target=getTarget(evt);			
				if(main05bottomcenterChild[i]==target){
					target.style.borderWidth="1px 0 1px 1px ";
					main05bottomcenterChild[i].style.backgroundImage='images/cs02.jpg';
				}else{
					main05bottomcenterChild[i].style.borderWidth="1px 1px 1px 0";
					main05bottomcenterChild[i].style.backgroundImage='images/cs01.jpg';
				}		
			}

			main05bottomcenter.innerHTML=str;
		})
	}
}

function changeDisplay(obj){
	obj.style.display=='block'?obj.style.display='none':obj.style.display='block';
}

