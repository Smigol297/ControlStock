<?php
			include("conexion.php");
			$con=conectar();
			
			$nroSerie= $_POST['nroSerie'];
			$agregarStock= $_POST['cantidad'];

			$query = "UPDATE producto SET stock = stock + '$agregarStock' WHERE nro_serie = '$nroSerie'";	
			
			mysqli_query ($con, $query)or die('Error al agregar elementos, intente ingresar valores validos');
			mysqli_close($con);

			echo "<meta http-equiv='refresh' content='0; url=paginaAgregarElementos.php'> ";
		?>