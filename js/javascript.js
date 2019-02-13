
function cargarOyente()
            {
                document.getElementById("boton").onclick=hacerPeticion;
            }
function hacerPeticion()
            {
                var url="https://datahub.ckan.io/dataset/05a60bd1-6328-4a82-9fa8-7362859c26ea/resource/3dd2f540-e171-49c9-be98-99d3d3c49d1d/download/polxtica_nacional.json";
                var peticion=new XMLHttpRequest();
                peticion.onreadystatechange=function()
                {
                    if(this.readyState==4 && this.status==200)
                    {
                        console.log(this.responseText);
                        tratarJSON(this.responseText);
                    }
                };
                peticion.open("GET", url, true);
            peticion.send();
            }			
function tratarJSON(json)
 {
               
                var obj_jsonArray=JSON.parse(json);
                
				for(i=0; i<obj_jsonArray.length; i++)
				{
                var titulo = obj_jsonArray[i].Titulo;
				var palabras_clave = obj_jsonArray[i].Palabras_clave;
				var semilla = obj_jsonArray[i].Semilla;
                console.log(titulo+", "+palabras_clave);
								
				var titulo_tabla = document.createElement("td");
				var palabras_clave_tabla = document.createElement("td");
				var semilla_tabla = document.createElement("td");
					
				titulo_tabla.innerHTML = titulo;
				palabras_clave_tabla.innerHTML = palabras_clave;
				semilla_tabla.innerHTML = "<a href="+semilla+">"+semilla+"</a>";
				
				var fila = document.createElement("tr");
				
				fila.appendChild(titulo_tabla);
				fila.appendChild(palabras_clave_tabla);
				fila.appendChild(semilla_tabla);
				
				document.getElementById("tabla").appendChild(fila);
            }
 }
			
			/*
		     <!DOCTYPE html> ASÍ SE PARSEA EL JSON DE LOS TÍTULOS
					<html>
					<body>
					<h2>Create Object from JSON String</h2>

					<p id="demo"></p>

					<script>
					var txt = '[{"name":"John", "age":30, "city":"New York"}, {"name":"Pablo", "age":79, "city":"Galicia"}]'
					var obj = JSON.parse(txt);
					document.getElementById("demo").innerHTML = obj[0].name + ", " + obj[0].age;
					</script>

					</body>
					</html>
			*/