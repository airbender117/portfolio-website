import { ArrowUpRight } from "lucide-react"
// import {motion} from 'motion/react'
import * as motion from 'motion/react-client'

const About = () => {
    const text = `I am Anurag Shrestha, an Electronics, Communication, and Information engineering student with a strong passion for building backend projects using Node.js. I enjoy diving into the complexities of system architecture and creating efficient, scalable solutions. Alongside my interest in backend development, I am also fascinated by Cybersecurity and am always looking for ways to enhance the security of digital infrastructures and applications. Combining my skills in both backend development and cybersecurity, I am eager to contribute to the ever-changing tech world and make a meaningful impact.`
    const words =text.split(" ");

return (
    <div id="about" className=" h-screen
            py-8 px-6
            sm:py-12 sm:px-8
            md:py-12 md:px-20
            lg:py-20 lg:px-32
            bg-black  overflow-hidden">

        <motion.h2 initial={{opacity: 0, y:-100}} whileInView={{opacity:1, y:0}}  transition={{duration : 0.4,delay : 0.5}} 
         className="text-9xl  md:text-[200px] lg:text-[300px] font-mono tracking-tighter text-white ">ABOUT</motion.h2>
            
        <div className="md:flex  my-4 gap-4  relative w-[90%] mx-auto">
            <motion.div initial={{opacity:0, x:-200, y:200}} whileInView={{opacity:1, x:0, y:0}}  transition={{duration : 0.4, delay:0.5}}  >
                <ArrowUpRight className="w-[250px] h-[250px] text-white p-0 hidden lg:block ml-auto lg:-mt-12 "/>             
            </motion.div>
                <div className="flex flex-wrap text-white lg:w-[80%] text-justify font-josefinSlab text-xl md:text-2xl lg:text-3xl">
                {words.map((word, index) => (
                    <motion.span 
                    key={index}
                    initial={{opacity:0, x:10,y:10}}
                    whileInView={{opacity:1, x:0,y:0}}
                    transition={{duration : 0.4, delay:0.1 * index}}
                    className=" mr-3 inline-block"
                    >
                        {word}
    
                    </motion.span>
                ))}
                </div> 
        </div>     
    </div>   
) }  
export default About 
