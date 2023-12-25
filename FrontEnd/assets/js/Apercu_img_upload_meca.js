/*Dev loc bernard 
*/


/*Form Apercu image avant upload>>
*/

		let mx_File = function(event) {      
		let mx_image   =  document.querySelector('.mx-img-lien');		
		let mx_elem_1  =  document.querySelector('.mx-icon-1');
		let mx_elem_2  =  document.querySelector('.mx-bt_1');
		let mx_elem_3  =  document.querySelector('.mx-container-10');	
		//console.log(event);		
		//creation lien chaine 
        mx_image.src = URL.createObjectURL(event.target.files[0]);			
		//cache apres even onchange
		mx_elem_1.style.display="none";
		mx_elem_2.style.display="none";
		mx_elem_3.style.display="none";		
		  };