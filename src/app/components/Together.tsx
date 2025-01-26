import * as motion from 'motion/react-client'
import { ArrowUpRight } from 'lucide-react'
import Button from './Button';

const Together = () => {

  return (
    <div id='connect' className='w-full relative overflow-hidden px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 lg:py-24 flex flex-col border-4 border-gray-200'>
     
      {/* Header Section */}
      <div className='flex flex-col sm:flex-row items-center justify-between border-b-2 border-slate-600 pb-8 sm:pb-12 w-full'>
        
        {/* Arrow Icon */}
        <motion.div 
          initial={{opacity:0, x:-200, y:200}} 
          whileInView={{opacity:1, x:0, y:0}}  
          transition={{duration : 0.4}}
          className='hidden sm:block mb-4 sm:mb-0'
        >
          <ArrowUpRight className="w-24 sm:w-32 lg:w-[250px] h-24 sm:h-32 lg:h-[250px] text-black/90 "/>
        </motion.div>
        
        {/* Headline */}
        <h2 className='text-2xl sm:text-4xl md:text-5xl lg:text-[80px] text-black/80 font-mono font-bold uppercase text-center sm:text-left tracking-tight leading-tight mb-4 sm:mb-0 sm:mr-auto'>
          Let&apos;s Work <br /> Together
        </h2>
        
        {/* CTA Button */}
        <button className='uppercase text-black/90 border-2 border-slate-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-slate-100 '
        >
          Send me a message
        </button>
      </div>
      
      {/* Footer Section */}
      <div className='flex flex-col items-center pt-12 sm:pt-16 lg:pt-24 w-full '>
        {/* Name */}
        <h3 className='text-5xl sm:text-[80px] text-center font-serif font-extrabold tracking-wider text-black/80 mb-8 sm:mb-40'>
          ANURAG
        </h3>
        
        {/* Footer */}
        <footer className='w-full flex flex-col  sm:flex-row items-center justify-center p-4 text-slate-600'>
          <motion.p
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration : 0.4}}
            className='mb-4 sm:mb-0 sm:mr-auto text-lg order-1 sm:order-0'
          >
            © 2025 My Portfolio
          </motion.p>
          
          <motion.div
            initial={{opacity:0, x:200}}
            whileInView={{opacity:1, x:0}}
            transition={{duration : 0.4}}
            className='flex flex-col sm:flex-row gap-2 order-0 sm:order-1 sm:gap-6 text-lg text-center w-full sm:w-auto mb-4 sm:mb-0'
          >
            <a href="" className='hover:underline' target='_blank'>X</a>
            <a href="" className='hover:underline' target='_blank'>Github</a>
            <a href="" className='hover:underline' target='_blank'>LinkedIn</a>
            <a href="" className='hover:underline' target='_blank'>Facebook</a>
            <a href="" className='hover:underline' target='_blank'>Instagram</a>
          </motion.div>
        </footer>
      </div>
      
      {/* Go to Top Button */}
      
      <Button />
    </div>
  )
}

export default Together