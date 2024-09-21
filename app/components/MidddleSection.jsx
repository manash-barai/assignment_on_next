import React from 'react'
import ImageCard from './ImageCard'

const MidddleSection = () => {
  return (
    <div className='midddleImage px-52 py-28 flex flex-col gap-20 '>
        <div className=' flex '>
            <div className=''>


         <ImageCard/>
            </div>
        </div>
        <div className='flex  justify-end  '>
            <div className=''>


         <ImageCard/>
            </div>
        </div>


        <div className=' flex '>
            <div className=''>


         <ImageCard/>
            </div>
        </div>

        <div className='flex  justify-end  '>
            <div className=' '>


         <ImageCard/>
            </div>
        </div>


        
    </div>
  )
}

export default MidddleSection
