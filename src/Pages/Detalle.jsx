
import {useParams} from 'react-router-dom'


function Detalle() {
 
    const params = useParams();

    // const [search] = useSearchParams();
    // sirve para hacer filtros, comunmente se lo ve como limit=10&sort=asc,
    // es la forma en la que le decis al backeend que te devuelva acentende o desendente
    // (los datos mas nuevos o viejos)
    
    
  return (
    <div>Detalle
        { params.nombre && params.apellido && <p>Hola {params.nombre} {params.apellido}</p>}
    </div>
  )
}

export default Detalle