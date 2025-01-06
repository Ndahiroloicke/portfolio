import React from 'react'

const Contacts = () => {
  return (
    <div className='text-black py-12'>
        <div className='flex flex-row items-center space-x-3'>
            <div className='ml-24'>
                <h1 className='font-bold italic text-sm'>Contact</h1>
                <p className='font-extrabold text-xl'>REACH OUT TO ME</p>
                
                        <div className='flex flex-row items-center mt-40'>
                            <p className='font-bold text-2xl'>+250 722 297 431</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <p className='font-bold '>ndahiroloicke@gmail.com</p>
                        </div>
        
                <div className='text-xs flex flex-row space-x-4 mt-36 hover:cursor-pointer'>
                    <p>FACEBOOK</p>
                    <p>TWITTER</p>
                    <p>INSTAGRAM</p>
                    <p>LINKEDIN</p>
                </div>
            </div>
            <div className='bg-[#141313] px-10 py-8'>
                <div>
                    <p className='text-white font-bold text-2xl'>ANY PROJECT?</p>
                    <div className='space-x-3 mt-12'>
                        <input type="text"  placeholder='NAME' className='bg-transparent border-b-2 text-white outline-none border-white w-72 pb-3'/>
                        <input type="text"  placeholder='EMAIL' className='bg-transparent border-b-2 text-white outline-none border-white w-72 pb-3'/>
                    </div>
                    <div className='mt-16'>
                        <textarea name="message" id="1" placeholder='MESSAGE' className='resize-none bg-transparent outline-none text-white border-b-2 border-white w-[588px] pb-20'></textarea>
                    </div>
                    <div className='text-white flex flex-col mt-8'>
                        <label htmlFor="file">ATTACH FILE</label>
                        <input type="file" name='file' className='mt-4' placeholder='ATTACH FILE'/>
                    </div>
                    <div className='bg-white w-fit py-2 px-1 rounded-sm mt-12'>
                    <button className='text-sm font-bold'> Submit now </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts