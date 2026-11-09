

const Banner = ({banner,title}) => {
  return (
    
             <div style={{ backgroundImage: `url(${banner})` }} className=" bg-amber-200 mt-18 max-w-full h-[15vh] lg:h-[50vh] flex justify-center items-center bg-cover bg-center relative" >
                    <h1 className="text-zinc-800 text-2xl font-bold bg-white inline-block px-4 py-2 rounded-2xl z-10">{title}</h1>
                       <div className="absolute inset-0 bg-black/50 "></div>
                </div>
               
  )
}

export default Banner

