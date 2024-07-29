import img1 from "../../assets/img/alarm.svg"
import img2 from "../../assets/img/Clock.png";
import img3 from "../../assets/img/Map.png";
import img4 from "../../assets/img/Map pin.png";
import img5 from "../../assets/img/Calendar.png";
import img6 from "../../assets/img/unidades.svg";
import moment from "moment";


const Container = ({ incident }) => {

    const textoAEliminar = " - SAN JUAN DE LURIGANCHO";

    return (
        <>
            <div className="bg-[#DC3545] rounded-md text-white min-w-[250px] min-h-[200px] h-[280px] w-[250px] p-3 flex flex-col">
                <p className="flex justify-center items-center text-[10px] my-1 h-[45px]">
                    <img src={img1} className="size-8 bg-white rounded-full mr-1" />{incident?.titulo}</p>
                <p className="flex justify-start items-center text-[10px] my-1 h-[45px]" >
                    <img src={img2} className="size-5 mx-[6px] bg-white rounded-xl" />{incident?.direccion.replace(textoAEliminar, '')}</p>
                <p className="flex justify-start items-center text-[10px] my-1" >
                    <img src={img3} className="size-5 mx-[6px] bg-white rounded" />SAN JUAN DE LURIGANCHO</p>
                <p className="flex justify-start items-center text-[10px] my-1" >
                    <img src={img4} className="size-5 mx-[6px] bg-white rounded-xl " />{incident?.hora} HRS</p>
                <p className="flex justify-start items-center text-[10px] my-1" >
                    <img src={img5} className="size-5 mx-[6px] bg-white rounded" />{moment(incident?.fecha).format('DD/MM/YYYY')}</p>
                    <p className="flex justify-start items-center text-[10px] my-1" >
                    <img src={img6} className="size-5 mx-[6px] bg-white rounded" />{incident?.unidadesMoviles.join(" , ")}</p>
                <div className="flex justify-center items-center">
                    <a className="border-2 border-red-300 px-2 py-auto w-[fit-content] rounded cursor-pointer"
                        href={`https://sgonorte.bomberosperu.gob.pe/24horas/Home/Map?numparte=${incident?.parte}`}
                        target="_blank"
                    >Ver detalle</a>
                </div>
            </div>
        </>
    );

}

export default Container;

/*
{incident?.unidadesMoviles}
*/