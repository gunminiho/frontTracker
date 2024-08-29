import Card from "./Card";


const History = ({ incidencias, click }) => {

    return (
        <>
            <div className={`flex flex-row gap-6 overflow-x-auto p-5 w-[450px] lg:w-[1000px] ${click ? "visible" : "invisible"}`} >
                {incidencias?.map((incident, index) => (
                    <Card key={index} incident={incident} />
                ))}
            </div>
        </>
    );

}

export default History;