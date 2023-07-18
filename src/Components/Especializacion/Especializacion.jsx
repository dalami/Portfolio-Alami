import "./Especializacion.css";
import { useState } from "react";


const Especializacion = () => {
  const [activeCard, setActivecard] = useState(null);

  const handleCardClick = (index) => {
   console.log(activeCard)
    if (activeCard === index) {
      setActivecard(null);
    } else {
      setActivecard(index);
    }
  };

  return (
    <div className="container-sm cont-esp">
      <div className="text-justify p-5">
        <h1 className="m-5 esp-h1">Especializacion</h1>
      <p className="m-5 esp-p" >
          Poseo una amplia trayectoria en gestión hotelera y atención al cliente
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-3 ajuste">
          <div className={`card especial ${activeCard === 0 ? "active" : ""}`} onClick={() => handleCardClick(0)}>
            <div className="card-body">
              <h5>Gestion Hotelera</h5>
              <p>
                Planificación,organización,dirección y control de todas las
                areas y departamentos relacionados con el funcionamiento del
                hotel y satisfacer los requerimientos del huésped
              </p>
              <a href="#" />
              Saber más
              <a />
            </div>
          </div>
        </div>
        <div className="col-sm-3 ajuste">
          <div className={`card especial ${activeCard === 1 ? "active" : ""}`} onClick={() => handleCardClick(1)}>
            <div className="card-body">
              <h5>Cocinero Profesional</h5>
              <p>
                Creación y preparación de alimentos en un entorno de cocina,
                combinando habilidades culinarias, creatividad, conocimientos
                técnicos y pasión por la gastronomia
              </p>
              <a href="#" />
              Saber más
              <a />
            </div>
          </div>
        </div>
        <div className="col-sm-3 ajuste">
          <div className={`card especial ${activeCard === 2 ? "active" : ""}`} onClick={() => handleCardClick(2)}>
            <div className="card-body">
              <h5>Atención al cliente</h5>
              <p>
                Experto en implementación de acciones y estrategias para
                satisfacer las necesidades y expectativas de un cliente durante
                y despues de una interacción mediante distintas herramientas
              </p>
              <a href="#" />
              Saber más
              <a />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Especializacion;
