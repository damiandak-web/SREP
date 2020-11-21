
	let menu = document.querySelector("#menu");
	let toggleIicon = document.querySelector("#toggle-icon");

	toggleIicon.addEventListener("click", function(){
		menu.classList.toggle("menu-on");
	});


	function validar(){ console.log('ingreso');
		usuario=document.getElementById('txtusuario').value;
		contrasena=document.getElementById('txtcontrasena').value;
		if(usuario==="admin@gmail.com" && contrasena==="12345"){
			swal({
				title: "Welcome!",
  				text: "Administator!",
  				icon: "success",		
  				});
				window.location="graficos.html"
		}
		if (usuario==="usuario@gmail.com" && contrasena==="12345"){
			swal({
				title: "Bienvenido!",
  				text: "User!",
  				icon: "success",		
  				});
				window.location="tienda_usuario.html"
		}
		else{
			swal({
				title: "Error!",
  				text: "incorrect username and / or password",
  				icon: "error",
		
  				});
		}

	}
