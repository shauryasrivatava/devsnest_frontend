import {React, useState} from "react";

const Hooks = () => {
  const [name, setName] = useState({ nameIs: "" });
  const [email, setEmail] = useState({ emailIs: "" });
  return (
    <>
      <form action="">
        Name
        <input type="text" value={name.nameIs}
        onChange ={(e)=>{
            setName({...name,nameIs: e.target.value})
        }}
        placeholder="shaurya" />
        <br></br>
        email <input type="text" 
        value={email.emaiIs}
        onChange ={(e)=>{
            setEmail({...email,emailIs: e.target.value})
        }}
        placeholder="cubacubs001@gmail.com" />
      </form>

      <h1>Name is - {name.nameIs} </h1>
      <h1>Email is - {email.emailIs}</h1>
    </>
  );
};

export default Hooks;
