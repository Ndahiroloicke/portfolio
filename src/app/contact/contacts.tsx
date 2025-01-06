import React from 'react'

const Contacts = () => {
  return (
    <div className='text-black'>
        <div className='flex flex-row'>
            <div>
                <h1>Contact</h1>
                <p>REACH OUT TO ME</p>
                <p>10st Abd EL Aziz Al Soud, 05th Floor, Manial,
                Roda, Cairo, Egypt.</p>

                <div>
                    <p>+250 722 297 431</p>
                    <p>ndahiroloicke@gmail.com</p>
                </div>
                <div>
                    <p>FACEBOOK</p>
                    <p>TWITTER</p>
                    <p>INSTAGRAM</p>
                    <p>LINKEDIN</p>
                </div>
            </div>
            <div className='bg-black px-10'>
                <div>
                    <p className='text-white font-bold text-2xl'>ANY PROJECT?</p>
                    <div className='space-x-3'>
                        <input type="text"  placeholder='NAME' className='bg-transparent border-b-2 border-white w-72'/>
                        <input type="text"  placeholder='EMAIL' className='bg-transparent border-b-2 border-white w-72'/>
                    </div>
                    <div>
                        <input type="text" placeholder='MESSAGE' className='bg-transparent'/>
                    </div>
                    <div>
                        <input type="file" placeholder='ATTACH FILE'/>
                    </div>

                    <button> Submit now </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts