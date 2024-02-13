import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';


export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
        <div className='min-h-screen mt-20'>
          <div className='flex p-3 max-w-7xl mx-auto flex-col md:flex-row md:items-center gap-5'>
            {/* left */}
            <div className='flex-1'>
              <Link to='/' className='font-bold dark:text-white text-4xl'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                  10_MiNuTeS_ScHoOl
                </span>
                <div className="text-center mt-10">Let's have fun and learn....</div>
              </Link>
              <p className='text-4xl mt-5'>
                Imagin...Invent....Inspire
              </p>
            </div>
            {/* right */}
            <div className='flex-1'>
              <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <div>
                  <Label value='Your email' />
                  <TextInput
                    type='email'
                    placeholder='name@school.com'
                    id='email'
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label value='Your password' />
                  <TextInput
                    type='password'
                    placeholder='**********'
                    id='password'
                    onChange={handleChange}
                  />
                </div>
                <Button
                  gradientDuoTone='purpleToPink'
                  type='submit'
                >
                  Sign In
                </Button>
              </form>
              <div className='flex gap-2 text-sm mt-5'>
                <span>Don't have an account?</span>
                <Link to='/signup' className='text-blue-500'>
                  Sign Up
                </Link>
              </div>
              {errorMessage && (
                <Alert className='mt-5' color='failure'>
                  {errorMessage}
                </Alert>
              )}
            </div>
          </div>
        </div>
      );
    }
    









// import { Alert, Button, Label, TextInput } from 'flowbite-react';
// import { useState } from 'react';
// import { Link, useNavigate} from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { signInStart, signInFailure, signInSuccess } from '../redux/user/userSlice';

// export default function SignIn() {
//   const [formData, setFormData] = useState({});
//   const {error:errorMessage}= useSelector(state => state.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.email || !formData.password) {
//       return dispatch(signInFailure('All fields are required'));
//     }
//     try{
//       dispatch(signInStart())
//       const res =await fetch ("/api/auth/signin",{
//         method:"POST",
//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify(formData),
//       })
//       const data =await res.json()
//       if (data.success === false){
//         dispatch(signInFailure(data.error))
//       }
//       if(res.ok){
//         dispatch(signInSuccess(data.payload));
//         navigate("/")
//       }
//     }
//     catch(error)
// {dispatch(signInFailure(error.message))};

//   return (
//     <div className='min-h-screen mt-20'>
//       <div className='flex p-3 max-w-7xl mx-auto flex-col md:flex-row md:items-center gap-5'>
//         {/* left */}
//         <div className='flex-1'>
//           <Link to='/' className='font-bold dark:text-white text-4xl'>
//             <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
//               10_MiNuTeS_ScHoOl
//             </span>
//             <div className="text-center mt-10">Let's have fun and learn....</div>
//           </Link>
//           <p className='text-4xl mt-5'>
//             Imagin...Invent....Inspire
//           </p>
//         </div>
//         {/* right */}
//         <div className='flex-1'>
//           <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
//             <div>
//               <Label value='Your email' />
//               <TextInput
//                 type='email'
//                 placeholder='name@school.com'
//                 id='email'
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <Label value='Your password' />
//               <TextInput
//                 type='password'
//                 placeholder='**********'
//                 id='password'
//                 onChange={handleChange}
//               />
//             </div>
//             <Button
//               gradientDuoTone='purpleToPink'
//               type='submit'
//             >
//               Sign In
//             </Button>
//           </form>
//           <div className='flex gap-2 text-sm mt-5'>
//             <span>Don't have an account?</span>
//             <Link to='/signup' className='text-blue-500'>
//               Sign Up
//             </Link>
//           </div>
//           {errorMessage && (
//             <Alert className='mt-5' color='failure'>
//               {errorMessage}
//             </Alert>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
// }

