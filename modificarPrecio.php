<?php
			include("conexion.php");
			$con=conectar();

			$nroSerie= $_POST['nroSerie'];
			$precio= $_POST['precio'];

			$query = "UPDATE producto SET precio = '$precio' WHERE nro_serie = '$nroSerie' ";
			
			mysqli_query ($con, $query)or die('Modificacion fallida, intente ingresar valores validos');
			mysqli_close($con);

			echo "<meta http-equiv='refresh' content='0; url=paginaModificarPrecio.php'> ";
		?>