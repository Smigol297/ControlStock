function Stock(){
    return(
        <>
        <br/>
	<div align="center" class="btn-group btn-group-justified">
	<a href="StockCompleto" class="buttonBlue" role="button">Stock completo</a>
	<a href="/" class="buttonBlue" role="button" >Inicio</a>
	</div>
	<br/>
	<input class="form-control" id="myInput" type="text" placeholder="Search.."/>
	<br/>
	<table class="table table-condensed" align ="center" > 
	<thead>
		<tr class="container-fluid" >
			<th class="text-center"> Nro de Serie </th> 
			<th class="text-center"> Tipo </th>
			<th class="text-center"> Marca </th>
			<th class="text-center"> Modelo </th> 
			<th class="text-center"> Precio </th> 
			<th class="text-center"> Cantidad </th> 
			<th class="text-center"> Color </th> 
			<th class="text-center"> Hombre/Mujer </th> 
			<th class="text-center"> Imagen </th> 
		</tr>
	</thead>
    </table>
    </>
    );
}
export default Stock;