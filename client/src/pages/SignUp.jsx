import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-5">
    {/*left */}
          <div className="flex-1">
            
    <Link
        to="/"
        className="font-bold dark:text-white text-3xl">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-lg text-white">
          7-minutes-school...
        </span>
        <div className="text-center">Let's have fun and learn</div>
      </Link>
      <p className="text-md mt-5">.......Let's have fun.......</p>
      
          </div>
    {/*right*/}
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <div>
                <Label value="Your username"></Label>
                <TextInput type="text" placeholder="Username" id="username"></TextInput>
              </div>
              <div>
                <Label value="Your Email"></Label>
                <TextInput type="text" placeholder="name@example.com" id="email"></TextInput>
              </div>
              <div>
                <Label value="Your Password"></Label>
                <TextInput type="text" placeholder="Password" id="password"></TextInput>
              </div>
              <Button gradientDuoTone="purpleToPink" type="submit">
                Sign-Up
              </Button>
            </form>
            <div className="text-center mt-5 gap-2">
                <span>Have an account?</span>
                <Link to="/sign-in" className="text-blue-500 mx-3">Sign In</Link>
              </div>
          </div>


          </div>
    </div>
  );
}
