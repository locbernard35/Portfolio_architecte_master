/*Dev loc bernard 
*/


/*Code-Admin
*/

/*Meca :Connection 
Activé :Admin via Token ,Stokage local navigateur 
*/

/*Connection Debut>>
*/
		
/*Getters: 
*/

	//Elem Dom:
	const elem_7  = document.querySelector('#menu-text3');	           //Txt:(login)
	const elem_8  = document.querySelector('.mode-edition-espace');    //Top->Blocks (Mode édition html)
	const elem_9  = document.querySelector('.mode-edition-g');         //Top->Blocks (Mode édition html)
	const elem_10 = document.querySelector('.js-mode-edition-1');      //Txt ->(icone:modifier)
	const elem_11 = document.querySelector('.edition-corp-1');         //Corp-A
	const elem_12 = document.querySelector('.close-1');
	const elem_14 = document.querySelector('.container-bt-edition-1');
	const elem_15 = document.querySelector('.edition-corp-2');         //Corp-B
	const elem_16 = document.querySelector('.close-2-d');
	const elem_17 = document.querySelector('.close-2-g');              //Return (flech) ajout photo	

	//Récup Token dans Stockage local>>
	let token  = window.localStorage.getItem("token");	

/*Setters:
*/

    //Controle:Token>> 
	if(token== null){
		console.log("Déconnecté");		
	}else{
        console.log("Connecté");
		console.log("Clé Token-->"+token);					
		//Modif Dom:	
        elem_7.innerHTML="";//remove		
		elem_7.innerHTML='<span class="menu-text3">logout</span>';//change text en -->logout			
		elem_8.style.display="block"; //Affich:
		elem_9.style.display="flex";  //Affich:
		elem_10.style.display="block";//Affich:	
		}	
		
/*Even-All:Click	 
*/ 
 
		elem_7.addEventListener("click", function() {//Click ->pour Déconnection 
		
			console.log("click->logout");		
			//remove:Token dans Stockage local
			window.localStorage.removeItem("token");

			console.log("Apres click-logout->localstorage-->" + token);
			document.location.href="http://127.0.0.1:5500/Homepage.html";//reload location:

        });
		
/*Connection Fin:
*/	
	

/*Modal->Mode edition>>
*/	
	 	elem_10.addEventListener("click", function() {//Active    ->.edition-corp-1 ->Mes Projets (modifier)-> Galerie photo  

			console.log("click->.js-mode-edition-1");	
		    elem_11.style.display="block"; 			
			
			/*galerie photo> 
			*/         
			
			//NodeList():Tab[0]->Récup Tous elems  (icone) 			
            const elem_18 = document.querySelectorAll('.mode-edition-gallery_container-icone');
			const n = elem_18.length;
			
	       //debug console.log(elem_18);
		   //debug console.log("length:"+elem_18.length);
		   
		  		  
			for (let i = 0; i < n; i = i + 1) {		
				//debug console.log("Index:" + i);
				//ecoute
				elem_18[i].addEventListener("click",delete_boucl_1);//call>						
			}				
				
            function delete_boucl_1(){
				//debug console.log("Ta click");				
				//debug console.log(this);
				
				//stock id: elem>
				let id = this.id;				
				//console.log("id:"+id);	
				
				//Cache html via display:none; le bock html (parent)
			    //debug console.log(this.offsetParent.style.display="none");
				this.offsetParent.style.display="none";				
				
				//lié avec hompage delete img   :ok			
				//va chercher elem id dom cache :ok
				let elem_19 = document.querySelector("#gallery_figure_id_"+id);				
				elem_19.style.display="none";				
				
				delete_img_bd_js(id);//Call>//deactive nas pour debug				
				
			                         }
			
		
	  async function delete_img_bd_js(id){
	
			 //Req suprimé dans bd>>
			let  req_1 = await fetch("http://localhost:5678/api/works/"+id, {
               method: "DELETE",
               headers: {
               Authorization: "Bearer " + token,
               },
           
                 });
				 
	           console.log("Serveur-status:"+req_1.status);
			 
			if(req_1.status==204){//attente retour serveur: nas+++ 
			   console.log("MESSAGE:Delete bd_js ->True");
			
			  }else{
			   console.log("MESSAGE:Delete bd_js ->Flase");
			  
			  }
			} 
		
           	/*galerie photo>	 
			*/	 
			
			
        });
		
	 	elem_12.addEventListener("click", function() {//Déactivé  ->.edition-corp-1
			console.log("click->.close-1");	
		    elem_11.style.display="none"; 
			window.location.href = "http://127.0.0.1:5500/Homepage.html";
        });
 	 
	 	elem_14.addEventListener("click", function() {//Active    ->(Ajouter une photo)
			console.log("click->.container-bt-edition-1");	
		    elem_11.style.display="none";//cache
			elem_15.style.display="block";//Affich
        });
 			 
	 	elem_16.addEventListener("click", function() {//Déactivé  ->.edition-corp-2
			console.log("click->.close-2-d");	
		    elem_15.style.display="none";//cache
			document.location.href = "http://127.0.0.1:5500/Homepage.html";
        });	
		
	 	elem_17.addEventListener("click", function() {//Déactivé  ->.edition-corp-2
			console.log("click->.close-2-g");				
		    elem_15.style.display="none";//cache	
			elem_11.style.display="block";//affich
        });	
	 		
/*Modal->Mode edition:	
*/	



/*Controller Formulaire Post>>
*/

/*Getters: 
*/


    const elem_25 = document.querySelector(".bt-edition-2");//form
	const elem_23 = document.querySelector(".form-");//form
	const elem_22 = document.querySelector(".js-mx-file");//input File
	const elem_24 = document.querySelector(".titre1");//input Titre

/*Even: Click	
*/

/*Setters:
*/

	elem_25.addEventListener("click", function() {//Bouton add img
		console.log("Ta Click-->");
		//Check-all	
		
		//Controle:input files>		
		let st0         = document.forms[0][0].files.length;		
		if(st0==0){	
		    console.log("File-->Erreur_File");
			elem_23.classList.add("Erreur_File");			
		}else{
			elem_23.classList.remove("Erreur_File");		
		}	
	
		//Controle:input Titre>    	
		let input_titre = document.forms[0][1].value; 
		
		if(input_titre==""){
		
		    console.log("Titre-->Erreur_Titre");
			elem_23.classList.add("Erreur_Titre");
		
		}else{
			elem_23.classList.remove("Erreur_Titre");
		}		
				
		//Rechercher class return :booléen    
		let  rech_class             =  elem_23.classList;//DOMTokenList 
  		let  result_1               =  rech_class.contains("Erreur_File"); 
		let  result_2               =  rech_class.contains("Erreur_Titre");  
		
		//Multi Condition:ok          
		if(result_1==true || result_2==true){
		   console.log("***Erreur***");
		   
		   let  messag1         =  document.querySelector(".edition-corp-2-message-envoiy-1"); //flase
		   let  messag2         =  document.querySelector(".edition-corp-2-message-envoiy-2"); //true		   
		        messag2.style.display="none";//reset
		        messag1.style.display="block";//Affich
		   
		}else{
		   console.log("***Formulaire ok***");
		   let  messag1              =  document.querySelector(".edition-corp-2-message-envoiy-1"); //flase
		   let  messag2              =  document.querySelector(".edition-corp-2-message-envoiy-2"); //true
		        messag1.style.display="none";//reset
		     // messag2.style.display="block";//Affich
        
		//------------------------------------R	           
	    req_post_1();//Call> 
	
async	function req_post_1(){
		//Récup Token dans Stockage local
	    let token10  = window.localStorage.getItem("token");		
		let cle = token10; //ok
		
		let input_titre       = document.forms[0][1].value; 
	    let input_image       = document.forms[0][0].files[0]; 
        let input_categorie   = document.forms[0][2].value;
	    const  messag2        =  document.querySelector(".edition-corp-2-message-envoiy-2"); 
		
	    const title        = input_titre;
        const categoryId   = input_categorie;
        const image        = input_image;
	
	
	    const formData = new FormData(); //encode Content-Type: multipart/form-data
        formData.append("title", title);
        formData.append("category", categoryId);
        formData.append("image", image);
	
	   //console.log(formData);
	
       let  req_2 = await fetch("http://localhost:5678/api/works", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + cle,
            },
            body: formData,
        });	
	
	  console.log("serveur node.js Status->Add-true:"+req_2.status);	  
	  if(req_2.status==201){  	  
		  messag1.style.display="none";//erreur
	     //messag2.style.display="block";
		 //messag2.innerHTML="Formulaire correctement rempli,Api status:201";
	      //update
		  //----------------------------------------------
		 
		     //Remove-All 
		  	//Hompage:
			let  remove_1   = document.querySelector('#gallery');			
		     remove_1.innerHTML="";
				
			//mode-edition:ok
			let  remove_2   = document.querySelector('#mode-edition-gallery');				
			remove_2.innerHTML="";
	  
			update_after_add_img();//Call>
			
		async	function update_after_add_img(){//apres add img
				//Récuperation Bd_json Api:
				const st0_1     =   await fetch("http://localhost:5678/api/works");	
				let bd_json     =   await st0_1.json();
				let numbreElem  =   bd_json.length;			
				let n = bd_json.length;
			
				for (let i = 0; i < n; i = i + 1) {
		
				//console.log("Index:" + i);  				
				//Creat_Block(index){} clone:
				//-----------------------------A
				let parent1    = document.querySelector("#gallery");
				let figure     = document.createElement("figure");
				let img        = document.createElement("img");
				let figcaption = document.createElement("figcaption");

				//Add Dom apendChild() dans elem parent dom
				parent1.appendChild(figure);
				figure.appendChild(img);
				figure.appendChild(figcaption);

				//Add attribut elem =>dyn
				figure.id = "gallery_figure_id_"+bd_json[i].id;
				figure.className="gallery_figure";
				img.id    = bd_json[i].id;
				img.src   = bd_json[i].imageUrl;
				img.alt   = bd_json[i].title;

				//Add contenant
				figcaption.innerHTML = bd_json[i].title;
				//-----------------------------A
				
				//Creat_Block_mode_edition(index){} clone:
				//-----------------------------B
				let parent1_x     = document.querySelector("#mode-edition-gallery");
				let figure_x      = document.createElement("figure");
				let img_x         = document.createElement("img");
				let div_x         = document.createElement("div");
				//Add Dom apendChild() dans elem parent dom
				parent1_x.appendChild(figure_x );
				figure_x.appendChild(img_x );
				figure_x.appendChild(div_x );
				//Add attribut elem =>dyn
				figure_x.id       = bd_json[i].id;
				figure_x.className="mode-edition-gallery_figure";	
				img_x.id          = bd_json[i].id;
				img_x.src         = bd_json[i].imageUrl;
				img_x.alt         = bd_json[i].title;
				img_x.className   ="mode-edition-gallery_img";
				//Add contenant
				div_x.innerHTML = '<i class="fa-regular fa-trash-can mode-edition-gallery_icone"></i>';
				div_x.className="mode-edition-gallery_container-icone";
				div_x.id=bd_json[i].id;
				//-----------------------------B		
							}				  
		   
						location.href = "http://127.0.0.1:5500/Homepage.html";				
						}
															
					}
				//------------------------------R					
				}	
			} 			
    });

  