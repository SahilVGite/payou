import React from 'react'
import WhatsappIcon from '../../../public/icons/WhatsappIcon'

const StickyWhatsapp = () => {
  return (
    <a href='https://wa.me/+919175535507' className='fixed z-999 bottom-[clamp(0.9375rem,0.3102rem+1.8248vw,2.5rem)] right-[clamp(0.9375rem,0.3102rem+1.8248vw,2.5rem)] flex items-center justify-center rounded-full bg-white/10 backdrop-blur-xs shadow-[inset_2px_2px_4px_rgba(255,255,255,0.75),inset_-2px_-2px_5px_rgba(255,255,255,0.5)] w-[clamp(2.5rem,1.4964rem+2.9197vw,5rem)] h-[clamp(2.5rem,1.4964rem+2.9197vw,5rem)]'>
      <WhatsappIcon size={25} color='#134B96' className={"w-[clamp(1.5625rem,0.9854rem+1.6788vw,3rem)] h-[clamp(1.5625rem,0.9854rem+1.6788vw,3rem)]"} />
    </a>
  )
}

export default StickyWhatsapp
