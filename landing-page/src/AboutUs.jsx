import React from "react";

function AboutUs() {
  return (
    <div>
      <div>
        <h1>MISION</h1>
        <p>
          Desarrollar una aplicación que logre un servicio efectivo y
          satisfactorio entre sus usuarios generando confianza, seguridad,
          oportunidades de trabajo además de servicio.
        </p>
        <h1>VISION</h1>
        <p>
          Ser la empresa por excelencia reconocida en latinoamérica donde las
          personas psuedan descubrir y contratar diferentes artistas, de una
          manera sencilla y segura online.
        </p>
      </div>
      <div>
        <h1>Integrantes</h1>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>López Takahashi, Rodrigo Andrés</Card.Title>
            <Card.Text>
              Como estudiante de Ciencias de la Computación de la UPC tengo
              experiencia con Angular y Java. Las principales habilidades que
              pongo a disposición del equipo son mis conocimientos de
              programación para poder desarrollar el producto.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Santisteban Cerna, José Mauricio</Card.Title>
            <Card.Text>
              Elegí la carrera de Ciencias de la Computación por mi interés en
              el diseño y desarrollo de videojuegos, campo en el que deseo
              especializarme al finalizar la carrera. Asimismo, tengo
              experiencia en el área de diseño, desarrollo y producción
              creativa, y me gusta trabajar en equipo.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Victor Andres Orihuela Schanks</Card.Title>
            <Card.Text>
              Decidí estudiar ciencias de la computación porque quiero trabajar
              haciendo videojuegos.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Jurado Garay, Gonzalo Alejandro</Card.Title>
            <Card.Text>
              Soy un estudiante de la carrera de Ciencias de la Computación por
              mi interés en el cómputo y la programación, el cual ha ido
              incrementando con el paso de los años.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Torres Paniagua, César Augusto</Card.Title>
            <Card.Text>
              Decidí iniciar la carrera de Ciencias de la Computación; debido a
              que me halló interesado en los procesos automatizados con el uso
              de AI. De esta manera, me encuentro cursando el 3 ciclo de
              Ciencias de la Computación y me halló ansioso por adquirir las
              habilidades para trabajar en el desarrollo de AI.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default AboutUs;
