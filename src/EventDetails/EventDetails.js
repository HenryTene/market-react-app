

const EventDetails = () => {
  return (
    <>
      <div class="event-details">
        <div class="event-wrapper">
          <h1>Evento 1</h1>
          <div class="event-card">
            <div class="event-img">
              <img src="../src/images/evento3.jpg" alt="Evento 1" />
            </div>
            <div class="event-text">
              <ul>
                <li>
                  <strong>Fecha y hora:</strong> 24/12/2021
                </li>
                <li>
                  <strong>Especialista y/o instructor:</strong> Luis
                </li>
                <li>
                  <strong>Lugar:</strong> Lima
                </li>
                <li>
                  <strong>Duración:</strong> 1 Hora
                </li>
                <li>
                  <strong>Costo:</strong> $20
                </li>
              </ul>
            </div>
          </div>
          <div class="event-buttons">
            <button type="submit">Comprar</button>
            <button type="submit">Agregar a carrito</button>
          </div>
          <div class="event-back">
            <img src="../src/images/back_arrow.png" alt="Back arrow" />
            <a href="home-logged-user.html">Volver a la pagina principal</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
