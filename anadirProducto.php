		<?php

			include("conexion.php");
			$con=conectar();

			$nroSerie= $_POST['nroSerie'];
			$tipo= $_POST['tipo'];
			$marca= $_POST['marca'];
			$modelo= $_POST['modelo'];
			$precio= $_POST['precio'];
			$cantidad= $_POST['cantidad'];
			$color= $_POST['color'];
			$h_m= $_POST['h_m'];
			$imagen = addslashes(file_get_contents($_FILES['imagen']['tmp_name']));

			$query = "INSERT INTO producto (nro_serie, tipo, marca, modelo, precio, stock, color, genero, imagen) values
			('$nroSerie', '$tipo' , '$marca', '$modelo', '$precio', '$cantidad', '$color', '$h_m', '$imagen')";
			mysqli_query ($con, $query)or die('Ingrese valores validos, tal vez ingreso un numero de serie ya ocupado, intente denuevo');
			mysqli_close ($con);
		
			echo "<meta http-equiv='refresh' content='0; url=paginaAnadirProducto.php'> ";
		?>