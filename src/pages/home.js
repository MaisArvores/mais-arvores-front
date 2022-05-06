import React from "react";
import "../layouts/index.css";
import logocor from "./../images/logocor.png";
import whatsapp from "./../images/whatsapp.png";
import divimagem from "./../images/planta.png";
import instagram from "./../images/instagram.png";
import mainimagem from "./../images/carrossel.png";
import facebook from "./../images/facebook.png";
const Home = () => {
  return (
    <div className="corpo">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
              <a href="/">Produto</a>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
        <img className="logo" src={logocor} alt="logo" />
      </header>
      <img className="imagem" src={mainimagem} alt="arvore" />

      <div className="title">
        <h3>SOBRE NÓS</h3>
        <p>
          O projeto Mais Árvores consiste em ajudar os habitantes a deixar suas
          casas, espaços de lazer e a cidade de Indaiatuba mais arborizada e
          verde, com o intuito de diminuir muitos dos problemas causados pela
          poluição atmosférica; já que ajudam a reduzir a temperatura do
          ambiente e melhoram a umidade relativa do ar pela evapotranspiração,
          evitam a erosão do solo e fornecem abrigo e comida a diversos seres
          vivos incluindo nós, seres humanos.
        </p>
      </div>
      <div>
        <img className="planta" src={divimagem} alt="terra" />
      </div>
      <footer>
        Entre em contato com conosco pela nossas redes:
        <img className="rodape" src={whatsapp} alt="whatssap" />
        <img className="rodape" src={instagram} alt="instagram" />
        <img className="rodape" src={facebook} alt="facebook" />
      </footer>
    </div>
  );
};

export default Home;
