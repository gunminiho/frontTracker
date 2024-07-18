

const Loading = () => {

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="animate-spin rounded-full size-64 border-b-2 border-gray-900"></div>
                <h2 className="text-2xl font-bold text-gray-900 my-10">Cargando información ...</h2>
            </div>
        </>
    );

};

export default Loading;