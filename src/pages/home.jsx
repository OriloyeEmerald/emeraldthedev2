import '../App.css'
import About from '../components/about'
import Header from '../components/header'



const Home = () => {
  

  return (
    <>
       <Header />

       <About />

       <div className='sm:flex items-center  justify-between p-[1.5rem] mt-[2rem]'>
        <h2 className='text-center sm:text-left'>Interested in doing a project together?</h2>
        {/* <div className='border-[.5px] border-b'></div> */}
        <button className='text-[.6rem] border-[1.3px] border-black py-[.4rem] px-[1.2rem] mt-[1rem] sm:mt-0'>CONTACT ME</button>
       </div>
    
    </>
  )
}

export default Home
