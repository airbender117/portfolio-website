import {ArrowDown} from "lucide-react"

const HomePage = () => {
  return (
    <div id="home" className="w-full h-screen flex  items-center relative p-8 ">
      <div style={{animationDuration : "3s"}} 
      className="
            w-[500px] h-[500px]
            sm:w-[550px] sm:h-[550px]
            md:w-[600px] md:h-[600px]
            lg:w-[900px] lg:h-[900px] absolute z-10
            -top-[250px] -left-[250px]
            sm:-top-[275px] sm:-left-[275px]
            lg:-top-[450px] lg:-left-[450px]
            border border-black rounded-full animate-spin ">
           
        <div className='h-full w-full rounded-full flex justify-end border border-black'>
          <div className='w-4 h-4 bg-black 
            mt-[310px] ml-[3px]
            sm:mt-[335px] sm:ml-[4px]
            md:mt-[360px] md:ml-[4px]
            lg:mt-[345px] lg:ml-[4px]
            rounded-full'> 
      
            </div>
        </div>
      </div>
      <p className="absolute text-3xl top-40 left-20 text-black font-josefinSlab">Vibe Coder</p>
      <p className="absolute text-3xl top-52 left-20 text-black font-josefinSlab">Ethical hacker</p>
            <p className="
            text-[50px]
            sm:text-[80px]
            md:text-[100px]
            lg:text-[150px]
            bg-clip-text text-transparent  bg-black 
            sm:mt-8
            w-full 
            sm:w-[80%]
            md:w-[90%]
            lg:w-[80%] lg:mt-16
            ">ANURAG SHRESTHA</p>
        <div className="absolute 
            right-8
            bottom-8
            sm:right-12
            md:right-16 
            md:bottom-8
            lg:right-20 
            lg:bottom-2
            "
            >
          <p className="text-center 
            text-xl
            sm:text-2xl
            lg:text-3xl
            text-black mb-2">Scrolll Down</p>
          <ArrowDown className="
            w-[60px] h-[60px]
            sm:w-[90px] sm:h-[90px]
            md:w-[100px] md:h-[100px]
            lg:w-[110px] lg:h-[110px]
            text-black text-center mx-auto"/>
        </div>
    </div>
  )
}

export default HomePage

