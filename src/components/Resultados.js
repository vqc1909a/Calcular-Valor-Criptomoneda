import React from 'react';
import PropTypes from 'prop-types';
const Resultados = ({resultados}) => {
     if(Object.keys(resultados).length === 0) return null;

     return (
          <div className="resultados card text-white bg-dark my-4">
               <div className="card-header">
                    <h2 className="display-4">{resultados.TOSYMBOL}</h2>
               </div>
               <div className="card-body">
                    <ul className="list-group list-group-flush lorem">
                         <div className="list-group-item"><span className="font-weight-bolder text-uppercase">El precio es: </span>{resultados.PRICE}</div>
                         <div className="list-group-item"><span className="font-weight-bolder text-uppercase">Precio más alto del día: </span>{resultados.HIGHDAY}</div>
                         <div className="list-group-item"><span className="font-weight-bolder text-uppercase">Precio más bajo del día: </span>{resultados.LOWDAY}</div>
                         <div className="list-group-item"><span className="font-weight-bolder text-uppercase">Variación últimas 24 horas: </span>{resultados.CHANGEPCT24HOUR}%</div>
                         <div className="list-group-item"><span className="font-weight-bolder text-uppercase">Ultima Actualización: </span>{resultados.LASTUPDATE}</div>
                    </ul>
               </div>
          </div>           
     );
}
Resultados.propTypes = {
     resultados: PropTypes.object.isRequired
}
 
export default Resultados;