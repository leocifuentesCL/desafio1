import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header"
import { Card } from "./components/Card"
import { Footer } from "./components/Footer"

const App = () => {
  return (
    <>
      <div className="all">
        <Header head="Adopta un perrito"/>
          <div className="vitrina">
            <Card
            titulo="Bartolo"
            text="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
            foto="./src/assets/imgs/perro1.jpg"
            raza="Mestizo"
            color="primary" />
            <Card
            titulo="Messi"
            text="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
            foto="./src/assets/imgs/perro2.jpg"
            raza="Pastor Alemán"
            color="secondary" />
            <Card
            titulo="Gohan"
            text="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan!"
            foto="./src/assets/imgs/perro3.jpg"
            raza="Border Collie"
            color="warning" />
            <Card
            titulo="Princesa"
            text="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a princesa a encontrar su final feliz!"
            foto="./src/assets/imgs/perro4.jpg"
            raza="Boxer"
            color="danger" />
          </div>
        <Footer footer="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. ¡Encuentra a tu compañero peludo para siempre!" />
      </div>
    </>
  )
}
export default App

//Hola profe. Lamentablemente nunca me funcionó el Badge Bootstrap. Intenté de todo,
// vi las clases varias veces y no hubo caso. Tengo todo escrito importado y exportado para que
// funcione, pero ni siquiera me funcionó haciendo COPY PASTE al ejercicio 4 de la guía
// de estudios de autoaprendizaje. No tengo idea qué pasó ni qué pasa. Gracias.