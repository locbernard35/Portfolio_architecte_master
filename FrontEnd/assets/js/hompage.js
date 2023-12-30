/*
Dev: loc bernard Meca:

Pages dynamiques:

Récuperation Bd_json Api

Request URL: http://localhost:5678/api/categories
Récuperation categories-all Bd_json Api swagger->update 30.12.2023

Reset contenu elem  noeud Dom
Recuperation donnéé json
Http beginning ->Création noeud Dom
*/


	//Récuperation Bd_json Api:
	const st0       =   await fetch("http://localhost:5678/api/works");	
	let bd_json     =   await st0.json();
    let numbreElem  =   bd_json.length;
	
	//Récuperation categories-all Bd_json Api: Returns all categories swagger
	const st0_c                  =   await fetch("http://localhost:5678/api/categories");	
	let categories_bd_json_c     =   await st0_c.json();
    let numbreElem_c             =   categories_bd_json_c.length;
	
	
	no_filtre();//Call>//Http beginning

	const   parm              = "debug";
  //const   parm1             = "Objets";
  //const   parm2             = "Appartements";
  //const   parm3             = "Hotels & restaurants";
	
	const  	elem_1            = document.querySelector('#bt-filter-1');
	const  	elem_2            = document.querySelector('#bt-filter-2');
    const  	elem_3            = document.querySelector('#bt-filter-3');
	const  	elem_4            = document.querySelector('#bt-filter-4');
   
    const  	elem_5            = document.querySelectorAll('.filter_e1');     
    const 	elem_6            = document.querySelectorAll('.filter_e1_text');
	const 	elem_5_lists      = elem_5.length; 
 
//Even-all:

	elem_1.addEventListener('click', (event) => click_0(event)); 
	elem_2.addEventListener('click', (event) => click_1(event));
	elem_3.addEventListener('click', (event) => click_2(event)); 
	elem_4.addEventListener('click', (event) => click_3(event));
	
	
    
	function click_0(event){
	   console.log("Click->Bouton->Tous");	
	   
       update_class(elem_1);
	   no_filtre();
	}

	function click_1(event){//Update:30.12.2023	  
	 console.log("Click->Bouton->Objets");		 
	 
	 update_class(elem_2);	 	 
	 remove_gallery(); 
	
	categories_Tri_object_bd_json(numbreElem);//Call> 	
	}

	function click_2(event){//Update:30.12.2023	 	
     console.log("Click->Bouton->Appartements");
	 
	 update_class(elem_3);	 
	 remove_gallery();  
	
	categories_Tri_Appartements_bd_json(numbreElem);//Call> 	 
	}

	function click_3(event, parm3){//Update:30.12.2023	 
     console.log("Click->Bouton->Hotels & restaurants");
	 
	 update_class(elem_4);	 
	 remove_gallery(); 	
	
	categories_Tri_Hotels_restaurants_bd_json(numbreElem);//Call>	 
	}

	function update_class(elem){//Remove class ,Add class  Style Color filter
	 
		//remove class: 
		for (let i = 0; i < elem_5_lists; i = i + 1) {
		
			//console.log(i);  		
			elem_5[i].className="filter_e1";     //background-color
			elem_6[i].className="filter_e1_text";//color		
		} 
	 
	        
		//add:
		 elem.className="filter_e1 js-background-color-vert";         //add class background-color
		 elem.childNodes[0].className="filter_e1_text js-color-blanc";//add class color
		}


    function categories_Tri_object_bd_json(numbreElem){
	console.log("Categories->"+categories_bd_json_c[0].name);//Tab[]->"name": "Objets"		
	let categories_objets = categories_bd_json_c[0].name;
	
	//console.log(numbreElem);//length->x	
	//console.log(bd_json[1].category.name);	
	//----------------------------	
	for (let i = 0; i < numbreElem; i = i + 1) {// Boucle etc ...
	
	    //Condition: Catégory name =>bd_json
		let st1 = bd_json[i].category.name;//TAB[] -All
		
	
		
		if( categories_objets == st1){//Dyn		
			console.log("Index:" + bd_json[i].id); 

			  let index = i;
			 //call>
			Creat_Block(index); 			 
						           }  
        
		                                       }	   
	//----------------------------
		
	}
	
    function categories_Tri_Appartements_bd_json(numbreElem){
		
	console.log("Categories->"+categories_bd_json_c[1].name);//Tab[]->"name": "Appartements"		
	let categories_objets = categories_bd_json_c[1].name;	

	for (let i = 0; i < numbreElem; i = i + 1) {// Boucle etc ...
	
	    //Condition: Catégory name =>bd_json
		let st1 = bd_json[i].category.name;//TAB[] -All
		
	
		
		if( categories_objets == st1){//Dyn		
			console.log("Index:" + bd_json[i].id); 

			  let index = i;
			 //call>
			Creat_Block(index); 			 
						           }  
        
		                                       }	   
	
		
	}
	
    function categories_Tri_Hotels_restaurants_bd_json(numbreElem){
		
	console.log("Categories->"+categories_bd_json_c[2].name);//Tab[]->"name": "Hotels & restaurants"		
	let categories_objets = categories_bd_json_c[2].name;	

	for (let i = 0; i < numbreElem; i = i + 1) {// Boucle etc ...
	
	    //Condition: Catégory name =>bd_json
		let st1 = bd_json[i].category.name;//TAB[] -All
		
	
		
		if( categories_objets == st1){//Dyn		
			console.log("Index:" + bd_json[i].id); 

			  let index = i;
			 //call>
			Creat_Block(index); 			 
						           }  
        
		                                       }	   
	
		
	}	



/*Déactivé
	function Tri_bd_json(numbreElem,mots){//Parcourir-All Tableaux return Cle
    
		
		for (let i = 0; i < numbreElem; i = i + 1) {//Boucle*11 etc ...
	
	    //Condition: Catégory name =>bd_json
		let st1 = bd_json[i].category.name;//TAB[] -All
		
	
		
		if( mots == st1){//Dyn
			//console.log("Trouvé: True-->" + i);			
			//console.log(bd_json[i]);	//resul=> True Bd Json	
			//console.log(bd_json[i].id);//console.log("Index:" + bd_json[i].id);			 
	        //console.log(bd_json[i].title);
			//console.log(bd_json[i].categoryId);
			//console.log(bd_json[i].userId);
			//console.log(bd_json[i].category.id);
			//console.log(bd_json[i].category.name);
			  
			  let index = i;
			 //call>
			 Creat_Block(index); 
			 
						           }
    
        
		                                       }
	}
*/	

    function no_filtre(){//Http beginning	
			
	    remove_gallery(); 	 

		let n = bd_json.length;
		
		for (let i = 0; i < n; i = i + 1) {
		
		//console.log("Index:" + i);  
		
		Creat_Block(i);//call> 
		Creat_Block_mode_edition(i);//call> 
		
		}
	
	}
	
	function Creat_Block(index){//Création :1 Blocks de Noeuds DOM !


	let parent1    = document.querySelector("#gallery");
	let figure     = document.createElement("figure");
	let img        = document.createElement("img");
	let figcaption = document.createElement("figcaption");

	//Add Dom apendChild() dans elem parent dom
	parent1.appendChild(figure);
	figure.appendChild(img);
	figure.appendChild(figcaption);

	//Add attribut elem =>dyn
	figure.id = "gallery_figure_id_"+bd_json[index].id;
	figure.className="gallery_figure";
	img.id    = bd_json[index].id;
	img.src   = bd_json[index].imageUrl;
	img.alt   = bd_json[index].title;

	//Add contenant
	figcaption.innerHTML = bd_json[index].title;

	}

	function remove_gallery(){//reset contenu id="gallery"	//Hompage et Mode-edition
	
	    //Hompage:
		const  e   = document.querySelector('#gallery');	
		e.innerHTML="";
		
		//mode-edition:ok
		const  e1   = document.querySelector('#mode-edition-gallery');	
		e1.innerHTML="";
		
	
	}
	
	function Creat_Block_mode_edition(index){//Création :1 Blocks de Noeuds DOM Clone=> Mode-edition


	let parent1    = document.querySelector("#mode-edition-gallery");
	let figure     = document.createElement("figure");
	let img        = document.createElement("img");
	let div = document.createElement("div");
	
	

	//Add Dom apendChild() dans elem parent dom
	parent1.appendChild(figure);
	figure.appendChild(img);
	figure.appendChild(div);

	//Add attribut elem =>dyn
	figure.id       = bd_json[index].id;
	figure.className="mode-edition-gallery_figure";
	
	img.id          = bd_json[index].id;
	img.src         = bd_json[index].imageUrl;
	img.alt         = bd_json[index].title;
	img.className   ="mode-edition-gallery_img";

	//Add contenant
	div.innerHTML = '<i class="fa-regular fa-trash-can mode-edition-gallery_icone"></i>';
	div.className="mode-edition-gallery_container-icone";
    div.id=bd_json[index].id;
	}	
	
	
