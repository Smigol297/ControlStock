<?php
			include("conexion.php");
			$con=conectar();

			$fechaVenta= $_POST['fechaVenta'];
			$nroSerie= $_POST['nroSerie'];
			$cantidad= $_POST['cantidad'];
			$DNI= $_POST['DNI'];
			$nombreApellido= $_POST['nombreApellido'];

			$queryHistorial = "INSERT INTO venta (fechaVenta, nro_serie, cantidad, DNI, nombreApellido) values
			('$fechaVenta', '$nroSerie', '$cantidad', '$DNI', '$nombreApellido')";
			
			$queryVenta = "UPDATE producto SET stock = stock - '$cantidad' WHERE nro_serie = '$nroSerie'";
			
			mysqli_query ($con, $queryHistorial)or die('Hubo un error al ingresar la venta al historial');
			mysqli_query ($con, $queryVenta) or die ('Hubo un error al producir la venta, intente con ingresar datos validos');
			mysqli_close($con);

			echo "<meta http-equiv='refresh' content='0; url=paginaVenta.php'> ";
		?>