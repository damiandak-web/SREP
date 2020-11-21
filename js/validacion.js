function validar1(){ console.log('ingreso');
		usuario=document.getElementById('txtnombre').value;
		apellido=document.getElementById('txtapellido').value;
		correo=document.getElementById('txtcorreo').value;
		telefono=document.getElementById('txttelefono').value;
		dirección=document.getElementById('txtdireccion').value;
		contrasena=document.getElementById('txtcontrasena').value;
		if(usuario==="damian" && apellido==="riaño" && correo==="admin@gmail.com" 
		&& telefono==="123456" && dirección==="calle115B" && contrasena==="12345"){
			swal({
				title: "Bienvenido!",
  				text: "Usuario creado!",
  				icon: "success",		
  				});
			
		}else{
			swal({
				title: "Error!",
  				text: "Confirmar datos",
  				icon: "error",
		
  				});
		}

	}




