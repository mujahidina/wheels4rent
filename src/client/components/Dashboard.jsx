import Rent from "./Rent";


function Dashboard(){
    return(
        <div className="h-[100vh] w-[85%] right-0 absolute">
            {/* top */}
            <div className=" h-[8vh] w-full flex flex-row justify-between bg-white border-b border-slate-400  pt-4">
               <h1 className="ml-8">Wheels4Rent</h1>
               <h1 className="mr-16">Mujahid</h1>
            </div>

            {/* components */}
            <Rent/>
        </div>

    )
}

export default Dashboard;