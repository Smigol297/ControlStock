
function HistorialVentas() {
    return (
    <>
    <div>
        <br/>
        <div class="btn-group btn-group-justified">
        <a href="/" class="buttonBlue" role="button" >Inicio</a>
        </div>
    <br/>
    <input class="form-control" id="myInput" type="text" placeholder="Search.."/>
    <br/>
    <table class="table table-condensed" align ="center" > 
        <thead>
            <tr class="container-fluid">
                <th class="text-center"> Fecha </th> 
                <th class="text-center"> Nro de serie </th>
                <th class="text-center"> Cantidad </th>
                <th class="text-center"> DNI </th> 
                <th class="text-center"> Nombre y apellido </th> 
            </tr>
        </thead>
    </table>
    </div>
    </>
    );
}

export default HistorialVentas;