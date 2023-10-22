"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const notify = () => {
    toast("KAMEHAMEHAAAAAAA")
    toast.success('🦄 Mohib chariya hai', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
}
return (
<div>
    <button onClick={notify} className='p-4 m-4 bg-yellow-500 rounded'>Finishing Move</button>
    <ToastContainer />
</div>
  )
}

export default page