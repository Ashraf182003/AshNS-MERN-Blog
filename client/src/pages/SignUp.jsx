import { Alert, Button, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
//import OAuth from '../components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setErrorMessage(null);
      const res = await axios.post('/api/auth/signup', formData);
      const data = res.data;
      if (data.success === false) {
        return setErrorMessage("User already exists with that username or email");
      }
      if (res.status === 200) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage("User already exists with that username or email");
    }
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Sahand's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
            {/*<OAuth />*/}
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
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









// import axios from "axios";
// import { Alert, Button, Label, TextInput } from "flowbite-react";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function SignUp() {
//   const [formData, setFormData] = useState({});
//   const [errorMessage, setErrorMessage] = useState(null);
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.username || !formData.email || !formData.password) {
//       return setErrorMessage("Please fill out all fields");
//     }
//     try {
//       const res = await axios.post("/api/auth/signup", formData);
//       const data =  res.data;
//       console.log("Signup successful!", data);
//       // Reset form data after successful signup
//       setFormData({});
//       setErrorMessage(null);
//     } catch (error) {
//       console.log("Error: ", error);
//     }
//   };

//   return (
//     <div className="min-h-screen mt-20">
//       <div className="flex p-3 max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-5">
//         {/*left */}
//         <div className="flex-1">
//           <Link to="/" className="font-bold dark:text-white text-3xl">
//             <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-lg text-white">
//               7-minutes-school...
//             </span>
//             <div className="text-center">Let's have fun and learn</div>
//           </Link>
//           <p className="text-md mt-5">.......Let's have fun.......</p>
//         </div>
//         {/*right*/}
//         <div className="flex-1">
//           <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//             <div>
//               <Label value="Your username"></Label>
//               <TextInput
//                 type="text"
//                 placeholder="Username"
//                 id="username"
//                 onChange={handleChange}
//               ></TextInput>
//             </div>
//             <div>
//               <Label value="Your Email"></Label>
//               <TextInput
//                 type="email"
//                 placeholder="name@example.com"
//                 id="email"
//                 onChange={handleChange}
//               ></TextInput>
//             </div>
//             <div>
//               <Label value="Your Password"></Label>
//               <TextInput
//                 type="password"
//                 placeholder="Password"
//                 id="password"
//                 onChange={handleChange}
//               ></TextInput>
//             </div>
//             <Button gradientDuoTone="purpleToPink" type="submit">
//               Sign-Up
//             </Button>
//           </form>
//           <div className="text-center mt-5 gap-2">
//             <span>Have an account?</span>
//             <Link to="/sign-in" className="text-blue-500 mx-3">
//               Sign In
//             </Link>
//           </div>
//           {errorMessage && (
//             <Alert className="mt-5" color="failure">
//               {errorMessage}
//             </Alert>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
