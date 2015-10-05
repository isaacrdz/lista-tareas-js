(function(){
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");


		//Funciones 
		var agregarTarea = function(){
			var tarea = tareaInput.value,
				nuevaTarea = document.createElement("li"),
				enlace = document.createElement("a"),
				contenido = document.createTextNode(tarea);



		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agregar una tarea valida");
			tareaInput.className = "error";
			return false;
		}
			//Agregamos contenido al enlace
			enlace.appendChild(contenido);
			//Agregamos el atributo href 
			enlace.setAttribute("href", "#");
			//Agregamos el enlace a la nueva tarea
			nuevaTarea.appendChild(enlace);
			// Agregamos a la lista la nueva tarea
			lista .appendChild(nuevaTarea);
			//Limpiar input
			tareaInput.value = "";

			for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click" , function(){

				this.parentNode.removeChild(this);
			});
			
		}
		};

		var comprobarInput =  function(){
			
		};

		var eliminarTarea =  function(){
			
		};

		//Eventos

		//Agregar Tarea
		btnNuevaTarea.addEventListener("click", agregarTarea);

		//Comprobar Input
		tareaInput.addEventListener("click", comprobarInput);

		//Borrando Elementos de la lista
		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click" , eliminarTarea);
			
		}

}());