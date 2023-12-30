
	   const  	elem_1 = document.querySelector("#bt-connection");    
//Even-all:
	elem_1.addEventListener('click', (event) => connect(event)); 	

	   function connect(){
		console.log("Ta Click ->Bt:");			
		
		let  	elem_2 = document.querySelector("#mail");
		let  	elem_3 = document.querySelector("#mot-pass");		
		const  	elem_4 = document.querySelector(".message-erreur");			
	
		//const  	elem_5 = "sophie.bluel@test.tld";
		//const  	elem_6 = "S0phie";		
		
		console.log("Input-value->#mail->"     + elem_2.value);
		console.log("Input-value->#mot-pass->" + elem_3.value);	

         //Récuperation value des inputs
         let value2 = elem_2.value;
		 let value3 = elem_3.value;

        req_http(elem_2,elem_3);//Call>	
                        }


 async function req_http(elem_2,elem_3){
	 
		let st1 = { 	
			email:    elem_2.value,
			password: elem_3.value
                     };	
			
		//Création format JSON::
        let st2 = JSON.stringify(st1);
			
		const req_1 =  await fetch("http://localhost:5678/api/users/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: st2//Content-Type onglet reseaux debug=>Réponse
                                                                 });		       
	         
		let status = req_1.status; 	
			
	    //status req:
		if(status==401){//erreur			
				console.log("Status-erreur->401");
				
		const  	elem_4 = document.querySelector(".message-erreur");	
		//Affich-erreur-Dom::
		elem_4.style.display="block";
		elem_4.innerHTML='<span class="message-erreur-txt">Utilisateur / mot de passe ne sont pas correctes !</span>';
				
		//Remove Token::
		window.localStorage.removeItem("token");
			}
			
		if(status==404){//erreur
		console.log("Status-erreur->404");				
				
		const  	elem_4 = document.querySelector(".message-erreur");					
				//Affich-erreur-Dom::
			    elem_4.style.display="block";
				elem_4.innerHTML='<span class="message-erreur-txt">Utilisateur / mot de passe ne sont pas correctes !</span>';
				
				//Remove Token::
		window.localStorage.removeItem("token");
			}
			
		if(status==200){//Validé
			
			    //Debug:
				//console.log("Status-Validé->200");				
								
				
				//Debug:
				//Modif-Affich--Dom:				
				//const  	elem_4 = document.querySelector(".message-erreur");					
				//elem_4.style.display="block";
				//console.log(elem_4.innerHTML='<span class="message-valid">Validé</span>');	
				
				
				//Gestion return serveur node.js:	
				let  reponse = await req_1.json(); //Réponse =>  Content-type=>body   return serveur node.js                                                      		
				
				//Accedez:
				//console.log("id:"+reponse["userId"]);//Accedez aux Tableaux  associative cle : valeur ok
				//console.log("Token-->"+reponse["token"]);		
								
				let cle_token = reponse["token"];
				
				//Debug:
				//console.log("Cle-Token-->"+cle_token); 
			   
				//Stockage des informations dans le localStorage:
		   
				window.localStorage.removeItem("token");//suprimé 

				window.localStorage.setItem("token", cle_token);
			
				RedirectionHomepage();	
			}		
		
	   }
	   
	   function RedirectionHomepage(){
        document.location.href="http://127.0.0.1:5500/Homepage.html";
      }