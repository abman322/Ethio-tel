import React from 'react'

function Plan() {

 function handleClick(e){
    
    const plan = document.getElementById('plan')
    const low = document.getElementById('low')
    const mid = document.getElementById('mid')
    const high = document.getElementById('high')
    plan.classList.remove("hidden")
    plan.classList.add('flex')

   low.classList.remove('picked')
    mid.classList.remove('picked')
    high.classList.remove('picked')

    e.target.classList.add('picked')
}
 function handleClickPlan(e){
    const recom = document.getElementById('recom')
    const general = document.getElementById('gen')
    const gameing = document.getElementById('gem')
    const streaming = document.getElementById('str')
    const work = document.getElementById('wor')

    recom.classList.remove("hidden")
    recom.classList.add('flex')

    general.classList.remove('picked')
    gameing.classList.remove('picked')
    streaming.classList.remove('picked')
    work.classList.remove('picked')

    e.target.classList.add('picked')

 }
  return (
   

    <div className=' flex flex-col justify-center items-center bg-hero-banner bg-no-repeat bg-center bg-cover text-white h-[500px]' >
        <div>
            <h1 className=' text-5xl font-bold m-4'>Find the best fiber plan for you</h1>
        </div>
        <div className=' flex '>
            <div className=' bg-white p-6 w-96 text-black rounded-2xl h-96 flex flex-col items-center text-center'>
                <p className=' mt-3 text-red-500 font-semibold'>STEP 1 OF 2</p>
                <div>
                    <h2 className=' text-xl p-1 font-bold'>How many devices are you looking to connect to your wi-fi?</h2>
                    <p className=' text-sm pb-4'>laptops, TVs, mobiles</p>
                </div>
                <div className=' flex flex-col mt-5'>
                    <button className=' bg-slate-300 rounded-2xl px-16 py-2 hover:bg-black text-white m-1' id="low" onClick={handleClick}>1-5</button>
                    <button className=' bg-slate-300 rounded-2xl px-16 py-2 hover:bg-black text-white m-1' id="mid" onClick={handleClick}>6-10</button>
                    <button className='bg-slate-300 rounded-2xl px-16 py-2 hover:bg-black text-white m-1' id="high" onClick={handleClick}>10+</button>
                </div>
            </div>
            <div className=' ml-4  hidden bg-white p-6 w-96 text-black rounded-2xl h-96 flex-col items-center text-center' id='plan'>
                <p className=' mt-3 text-red-500 font-semibold'>STEP 2 OF 2</p>
                <div>
                    <h2 className=' text-xl p-1 font-bold'>What do you plan to use the connection for?</h2>
                    <p className=' text-sm pb-4'>select all that apply</p>
                </div>
                <div className=' flex flex-col mt-5'>
                    <button className=' bg-slate-300 rounded-2xl px-12 py-2 hover:bg-black text-white m-1' id='gen' onClick={handleClickPlan}>General Browsing</button>
                    <button className=' bg-slate-300 rounded-2xl px-12 py-2 hover:bg-black text-white m-1' id='gem' onClick={handleClickPlan}>Gaming</button>
                    <button className='bg-slate-300 rounded-2xl px-12 py-2 hover:bg-black text-white m-1' id='str' onClick={handleClickPlan}>Netflix, Hotstar etc.</button>
                    <button className='bg-slate-300 rounded-2xl px-12 py-2 hover:bg-black text-white m-1' id='wor' onClick={handleClickPlan}>Work from home</button>
                </div>
            </div>
            <div className=' ml-4 hidden  bg-white p-6 w-96 text-black rounded-2xl h-96 flex-col justify-center items-center text-center' id='recom'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" mb-4 text-red-300 w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                </svg>

                <div>
                    <h2 className=' text-xl p-1 font-bold'>What do you plan to use the connection for?</h2>
                    <p className=' text-4xl font-bold pt-4'>10 Mbps</p>
                    <p className=''>1359.20 birr/month</p>
                </div>
                <div className=' flex flex-col mt-5'>
                    <button className=' hover:bg-slate-300 rounded-2xl px-12 py-2 bg-black text-white m-1'>Get Started</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Plan
