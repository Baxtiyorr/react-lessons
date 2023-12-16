
import logo from '../assets/svg/logo.svg'
import hero_img from '../assets/images/hero-bg-img.png'



const Header = () => {
  return (
    <>
      <nav className='bg-[#28293E] sticky top-0 left-0'>
        <div className=' container max-w-7xl mx-[auto]' >
            <div className='flex justify-between items-center py-[16px] '>
                <img src={logo} alt="Agency" />
                <ul className='flex gap-40'>
                  <li><a className='text-white' href="#">About</a></li>
                  <li><a className='text-white' href="#">Services</a></li>
                  <li><a className='text-white' href="#">Pricing</a></li>
                  <li><a className='text-white' href="#">Blog</a></li>
                </ul>
                <button className=' border-2  border-solid border-slate-600 text-white py-[18px] px-[35px] rounded-xl'>Contact</button>
            </div>
        </div>
      </nav>
      <div className="hero bg-[#28293E] text-white mt-[100px]">
      <div className='contaiiner max-w-7xl mx-[auto]'>
        <div className='flex items-center justify-between'>
          <div className='w-[513px]'>
          <h4 className='text-[#EF6D58]'>MODERN STUDIO</h4>
          <h1 className='font-extrabold text-7xl leading-{80px} mt-[24px] mb-[24px]'>We’re Help 
            To Build Your 
            Dream Project</h1>
            <p className='font-normal text-base w-[470px] text-[#B1B2B9] mb-[34px]'>Agency provides a full service range including technical skills, design, business understanding.</p>
            <div className='flex gap-[46px] items-center '>
              <button className='bg-[#EF6D58] py-[18px] px-[23px] rounded-xl'>How We Work</button> <ul><li><a href="#">Contact Us</a></li></ul>
            </div>
        </div>
        <img src={hero_img} alt="" />
        </div>
        
      </div>
      </div>
    </>
  )
}

export default Header
