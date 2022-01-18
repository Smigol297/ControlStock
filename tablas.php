<?php
			function tablaStock(){
				//include("conexion.php");
				$con=conectar();

				$query = "SELECT * FROM producto";
				$resultado = mysqli_query($con, $query) or die ("Algo paso");

				echo " <table border ='1' bgcolor= white div > ";
				echo " <tr> ";
				echo " <th> Nro de Serie </th> ";
				echo " <th> Tipo </th> ";
				echo " <th> Marca </th> ";
				echo " <th> Modelo </th> ";
				echo " <th> Precio </th> ";
				echo " <th> Cantidad </th> ";
				echo " <th> Color </th> ";
				echo " <th> Hombre/Mujer </th> ";
				echo " <th> Descripcion </th> ";
				echo " </tr> ";
				while ($columna = mysqli_fetch_array($resultado))
				{
					echo " <tr div align=center> ";
					echo "<td>" . $columna['nro_serie'] ."</td><td>". $columna['tipo'] ."</td><td>". $columna['marca'] ."</td><td>". $columna['modelo'] ."</td><td>". $columna['precio'] ."</td><td>".$columna['stock'] ."</td><td>". $columna['color'] ."</td><td>".$columna['genero'] ."</td><td>".$columna['descripcion'] . "</td>";
					echo " </tr> ";
				}
				echo "</table>";
				mysqli_close($con);
				}

				function tablaVentas(){
				//include("conexion.php");
				$con=conectar();

				$query = "SELECT * FROM venta ORDER BY fechaVenta DESC ";
				$resultado = mysqli_query($con, $query) or die ("Algo paso");

				echo " <table border ='1' bgcolor= white div > ";
				echo " <tr> ";
				echo " <th> Fecha </th> ";
				echo " <th> Nro de serie </th> ";
				echo " <th> cantidad </th> ";
				echo " <th> DNI </th> ";
				echo " <th> Nombre y Apellido </th> ";
				echo " </tr> ";
				while ($columna = mysqli_fetch_array($resultado))
				{
					echo " <tr div align=center> ";
					echo "<td>" . $columna['fechaVenta'] ."</td><td>". $columna['nro_serie'] ."</td><td>". $columna['cantidad'] ."</td><td>". $columna['DNI'] ."</td><td>". $columna['nombreApellido'] . "</td>";
					echo " </tr> ";
				}
				echo "</table>";
				mysqli_close($con);
			}
?>