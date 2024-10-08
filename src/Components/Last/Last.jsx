import img1 from "../../assets/img/emergencia.png"
import img2 from "../../assets/img/Clock.png";
import img3 from "../../assets/img/Map.png";
import img4 from "../../assets/img/Map pin.png";
import img5 from "../../assets/img/Calendar.png";
import img6 from "../../assets/img/unidades.svg";
import "./glow.css";
import moment from "moment";
import formatDate from "../../helpers/date";
import Siren from "../../assets/audio/sirena.mp3";
import { useRef, useEffect, useState } from "react";
//chrome://settings/content/sound

const Last = ({ ultima, click }) => {

    const audioRef = useRef(new Audio(Siren));
    const [active, setActive] = useState(false);
    const textoAEliminar = " - SAN JUAN DE LURIGANCHO";

    const sendMessage = () => {
        const phoneNumber = "51" + window.prompt('Por favor, ingrese su número de teléfono en formato normal (e.g., 987654321):');

        if (phoneNumber) {
            const message = `Última incidencia:
          
    Título: ${ultima.titulo}
    Dirección: ${ultima.direccion}
    Distrito: SAN JUAN DE LURIGANCHO
    Hora: ${ultima.hora} HRS
    Fecha: ${moment(ultima?.fecha).format('DD/MM/YYYY')}
    Enlace al mapa: https://sgonorte.bomberosperu.gob.pe/24horas/Home/Map?numparte=${ultima?.parte}`;

            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        }
    };

    useEffect(() => {

        if (ultima && ultima.hora) {
            const incidentDate = moment(ultima.fecha, 'YYYY-MM-DD');
            const incidentTime = moment(ultima.hora, 'HH:mm:ss');
            const now = moment();
            const diffMinutes = now.diff(incidentTime, 'minutes');
            const isToday = incidentDate.isSame(now, 'day');
            //console.log("diff Minutes :", diffMinutes);
            if (isToday && diffMinutes <= 10 && diffMinutes > 0 && !active) {
                console.log("hora que se encontro la incidencia: ", now.format('DD-MM-YYYY HH:mm:ss'));
                setActive(true);
                audioRef.current.play();
            } else if (!isToday || diffMinutes > 10 || diffMinutes < 0 && active) {
                setActive(false);
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        }
    }, [ultima]);

    return (
        <>
            <div className={`flex justify-center items-center border-4 border-[#DC3545] h-[500px] text-black ${click ? "visible" : "invisible"} ${active ? "glowing-border" : ""}`}>
                <iframe src={`https://sgonorte.bomberosperu.gob.pe/24horas/Home/Map?numparte=${ultima?.parte}`} className="md:size-[450px] w-[250px] h-[400px] md:w-full md:min-w-[400px] ml-5" />
                <div className="mx-4">
                    <p className=" text-[12px] sm:text-[23px] md:text-2xl flex justify-start items-center my-3 gap-3  "><img src={img1} className={`size-14 md:size-14 ${active ? "animate-pulse" : ""}`} />{ultima?.titulo}</p>
                    <p className="text-[10px] sm:text-[14px] md:text-[16px] flex justify-start items-center my-3">
                        <img src={img3} className="size-8 mx-[16px]" />{ultima?.direccion.replace(textoAEliminar, '')}</p>
                    <p className="text-[10px] sm:text-[14px] md:text-[16px] flex justify-start items-center my-3">
                        <img src={img4} className="size-8 mx-[16px]" />SAN JUAN DE LURIGANCHO</p>
                    <p className="text-[10px] sm:text-[14px] md:text-[16px] flex justify-start items-center my-3">
                        <img src={img2} className="size-8 mx-[16px]" />{ultima?.hora} HRS</p>
                    <p className="text-[10px] sm:text-[14px] md:text-[16px] flex justify-start items-center my-3">
                        <img src={img5} className="size-8 mx-[16px]" />{formatDate(ultima?.fecha)}</p>
                    <p className="text-[10px] sm:text-[14px] md:text-[16px] flex justify-start items-center my-3">
                        <img src={img6} className="size-8 mx-[16px]" />{ultima?.unidadesMoviles.join(" , ")}</p>
                    <div className="flex flex-row items-center justify-around gap-2 ">
                        <a className="border-2 rounded-md cursor-pointer border-blue-700 hover:bg-blue-700 p-2 md:text-[15px] text-[8px] text-center"
                            href={`https://sgonorte.bomberosperu.gob.pe/24horas/Home/Map?numparte=${ultima?.parte}`} target="blank">Ver detalles
                        </a>
                        <a className="bg-[#25D366] text-white cursor-pointer p-2 rounded-md hover:animate-pulse md:text-[15px] text-[8px] text-center"
                            onClick={sendMessage}
                        >Enviar por Whatsapp</a>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Last;

/* 

*/