import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";
//App1.jsx will throw error too many re-renders becoz of the dependency array in useCallback hook, we have to remove setPassword from the dependency array becoz it is a function and it will change on every re-render
//so the other method is using useEffect hook, which synchronises the effects
//clipboard p copy karne k liye useRef hook use krenge taaki usse access kr ske or copy kr pae password ko
function App() {
  const [length, setLength] = useState(8); //set default length of password
  const [numAllowed, setNumAllowed] = useState(false); //we are only conisdering two cases either take the number(true ) or dont take(false)
  const [charAllowed, setCharAllowed] = useState(false);
  //input field m password aa rha hai ....directly password update ho nhi skta ...to kuch phle se chahiye hoga taaki usse hm update kr paaye to password ko ek state m store kr skte hai taaki usse update kr ske
  const [password, setPassword] = useState("password appear here");
  //password generate krne k liye ek function bnayenge, yhi method baar baar run hoga isko optimise karne k liye we use useCallBack hook in react, concept is same  as memoization where we store the result of a function and if the function is called again with the same input then we return the stored result.
  // useCallBack lets you cache the function between re-renders so that the function is not called again and again on re-rendering
  // useCallback  takes function and array of dependencies as argument, number and char are dependencies here inke change hote hi function run hona chahiye
  //useRef hook
  const passwordRef = useRef(null); //default null means abhi mere pass koi refernce nhi h
  const passwordgen = useCallback(() => {
    let password = ""; //ek variable bnayenge jisme password store hoga initially ye empty h
    let string = "qwertyuiopasdfghjklzxcvbnm"; //string k andar vo data aayega jinse password bnega/generate hoga
    if (numAllowed) string += "1234567890"; //condtion h ki agar number allowed hai to string m jisse password generate ho rha usme number add kardo
    if (charAllowed) string += "@#$%&*";
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * string.length + 1); //random index value  pick krega string m se
      pass += string.charAt(index); //ye us index p jo char h usse pick krega or pass m append kr dega
    }
    //to read the value of password
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);
  //usecallback isliye use kr rhe copy karne k liye kyuki password p dependency h password change hoga to ye function bhi run hoga
  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(passwordRef.current.value);
  }, [password]);
  //here i can run passwordgen function on the basis of length, numberAllowed, charAllowed
  useEffect(() => {
    passwordgen();
  }, [length, numberAllowed, charAllowed, passwordgen]);
  // passwordGenerator();//this will throw error becoz of the dependency arr in useCallback hook
  //  //setPassword is also a dependency kyyuki iske basis p password change hoga
  //string taayaar ho jaegi on the basis of user selection ki usse number ya char chahiye ya nhi ab mujhe ek password bnana h jo random char pick karega string m se, mai ek loop chaalake random character pick karega string m se, loop kitni baar chlega will be det by length of password
  //input lenge uske andar kuch properties add krenge
  //on change ek arrow function call hogi jisme ek event pass hoga jo ki input field se aayega or usse setlength property ko call krenge or usme event.target.value pass karenge jo ki input field ki value h jo user n daali h length m
  //number k onclick event p
  //ek arrow function hoga jisme  //ek callback fire kr diya setNumberAllowed ko call krenge or usme prev value pass krenge or prev value jo bhi usko reverse krdo to ye true ya false m flip hota rhega
  //aese callback m hme prev value ka access milta hai or usse change krna hai to new value dedo
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1>password generator </h1>
        <div className='className="flex shadow rounded-lg " '>
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
