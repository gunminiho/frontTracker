import './App.css'
import './index.css';
import Last from './Components/Last/Last';
import Container from "./Components/History/Container";
import Logo from "../src/assets/img/logo.png";
import LinkedIn from "../src/assets/img/in.svg";
import axios from 'axios';
//import data from "./assets/data/data.json";
import Loading from './Components/Loading/Loading';
import { useEffect, useState } from 'react';

function App() {

  const [incidents, setIncidents] = useState(null);
  const [last, setLast] = useState(null);
  const endpoint = "https://cecomapi.erickpajares.dev/incidents";

  const fetchData = async () => {
    try {
      const { data } = await axios.get(endpoint);
      if (data && Array.isArray(data.incidents)) {
        setIncidents(data.incidents.slice(1, data.incidents.length));
        setLast(data.incidents[0]);
        //console.log("incidentes actualizados");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
    //alert("Se actualizo lista!");
    const interval = setInterval(() => {
      fetchData();
      //alert("Se actualizo lista!");
    }, 30000); // 120000 ms = 2 minutos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  const checkData = () => {
    console.log(incidents);
    console.log(last);
  };

  return (
    <>

      <header className="flex flex-row items-center justify-center px-5">
        <div className="flex flex-col w-[fit-content] justify-center items-center">
          <img src={Logo} className="h-[100px] w-[300px]" />
        </div>
        <span className="text-black text-3xl w-full text-center">
          <p>SISTEMA DE SEGUIMIENTO DE EMERGENCIAS</p>
        </span>
      </header>
      {last && incidents ? "" : <Loading />}
      <main className="flex flex-col gap-5 justify-center items-center px-5 my-1">
        {last ? <Last ultima={last} /> : ""}
        {incidents ? <Container incidencias={incidents} /> : ""}

      </main>
      <footer className="flex justify-center my-1">
        <a className="flex flex-row items-center cursor text-black text-lg"
          href="https://www.linkedin.com/in/gunminiho/"
          target="blank" >Hecho por Erick Pajares
          <img src={LinkedIn} className="" />
        </a>
      </footer>
    </>
  )
}

export default App

/*
 <button onClick={checkData}>CLICK</button>
 {
    parte: "2024025057",
    titulo: "MATERIALES PELIGROSOS (INCIDENTE) / FUGA GAS GLP Y OTROS GASES INFLAM / BALON DOMICILIARIO (10KG)",
    direccion: "CL. ISABEL II  200  - SAN JUAN DE LURIGANCHO",
    hora: "05:26:23",
    fecha: "2024-07-15T00:00:00.000Z"
  }
*/
