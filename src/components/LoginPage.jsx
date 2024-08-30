import COVER_IMG from '../assets/Cover-img.jpeg';
import GOOGLE_IMG from '../assets/Google.png';


const colors = {
  primary: "#060606",
  background: "#f5f5f5",
  disabled: "#D9D9D9"
}

export function LoginPage() {


  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[20%] left-[10%] flex flex-col'>
          <h1 className='text-4xl text-white font-bold my-4'>Turn your ideas into reality</h1>
          <p className='text-xl text-white font-normal'>Start for free and get amazed by our handmade creations</p>
        </div>
        <img src={COVER_IMG} alt="login image" className='w-full h-full object-cover' />
      </div>

      <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between'>
        <h2 className='text-xl text-[#060606] font-semibold'>Brand Name</h2>

        <div className='w-full flex flex-col max-w-[550px]'>
          <div className='w-full flex flex-col mb-2'>
          <h3 className='text-3xl font-semibold mb-2'>Login</h3>
          <p className='text-base mb-2'> Welcome Back! Please enter your details.</p>
          </div>

          <div className='w-full flex flex-col'>
            <input 
            type="email"
            placeholder='Email'
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />

            <input 
            type="password"
            placeholder='Password'
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
          </div>
        
        
        <div className='w-full flex items-center justify-between'>
          <div className='w-full flex items-center'>
            <input 
            type="checkbox"
            className='w-4 h-4 mr-2' />
            <p className='text-sm'>Rememberme for 30 days</p>
          </div>
          <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password?</p>
        </div>

        <div className='w-full flex flex-col my-4'>
          <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>
            Login
          </button>
          <button className='w-full text-[#060606] font-semibold my-2 border-2 bg-white border-black rounded-md p-4 text-center flex items-center justify-center'>
            Register
          </button>
        </div>

        <div className='w-full flex items-center justify-center relative py-2' >
          <div className='w-full h-[1px] bg-black'></div>
            <p className='text-lg absolute text-black/80 bg-[#f5f5f5]' >or</p>
        </div>
        <div className='w-full text-[#060606] font-semibold my-2 border-2 bg-white border-black rounded-md p-4 text-center flex items-center justify-center'>
          <img src={GOOGLE_IMG} alt="Google logo" className='w-7 mx-2' />
            Sign In with Google
          </div>
          </div>
        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-[#060606]'>Dont have an account? <span className='font-semibold underline-offset-2 cursor-pointer'>Sign up</span></p>
        </div>
      </div>
    </div>
  )
}
