

const Loading = ({setClick, ready}) => {

    return (
        <>
            <div className={`flex flex-col items-center justify-center h-screen`}>
                <div className="animate-spin rounded-full size-64 border-b-2 border-gray-900"></div>
                <br></br>
                <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"

                 onClick={()=>setClick(true)}>{ready ? "Ingresar":"Cargando informacion..."}</button>
            </div>
        </>
    );

};

export default Loading;

/* <h2 className="text-2xl font-bold text-gray-900 my-10">Click para ingresar ...</h2> */