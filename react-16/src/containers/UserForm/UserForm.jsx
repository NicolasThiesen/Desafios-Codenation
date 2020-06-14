import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

import api from "../../services/api";

const UserForm = () => {
  const [name,setName] = useState("");
  const [username,setUserName] = useState("");
  const [urlPic, setUrlPic] = useState("")
  const [avatar, setAvatar] = useState("https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png");
  const [local, setLocal] = useState(null);
  const [succes,setSucces] = useState(null);
  const [error,setError] = useState(null);
  const [email,setEmail] = useState("")
   
  const handleSubmit = () => { 
    if(name!=="" && username!=="" && email!=="" && avatar!=="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"){
      api.post("/users",{
        name: name,
        avatar: avatar,
        username: username,
        email: email,
      },{
        headers: {
          'Content-Type': 'application/json'
        },
      }).then((res)=>console.log(res["data"]))
      setSucces(true);
    }else{
      setError(true);
      console.log("preencha todos os dados!")
    }
  }

  const handlerPicture = (e) =>{

    if(local){
      const reader = new FileReader();
      const file = e.target.files[0];

      reader.onloadend = () => {
        setAvatar(reader.result)
      }
      reader.readAsDataURL(file)
    }else{
      try{
        setAvatar(e.target.value);
      }catch(e){
        console.log(e)
      }
      
    }
  }

  const handleFotoType = (value) =>{
    if(value==="git"){
      setLocal(false);
    }else{
      setLocal(true);
    }
  } 
  return (
    <React.Fragment>
      <section className="profile container" data-testid="user-form">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              <img src={avatar} alt="" />
            </div>
            <div className="user__name">
              {name}
              <span>@{username}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="post__form container">
        <div className="post__form_wrapper">
          <label>Nome:</label>
          <input type="text" value={name} placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} />
          <label>Username:</label>
          <input type="text" value={username} placeholder="Digite o username" onChange={(e) => setUserName(e.target.value)} />
          <label>E-mail</label>
          <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email}  placeholder="Digite o seu e-mail" />
          <label htmlFor="git">Foto github:</label>
          <input type="radio" id="git" name="local" defaultChecked="true" onChange={() =>handleFotoType("git")} />
          <label htmlFor="local">Foto Local:</label>
          <input type="radio" id="local" name="local" onChange={() => handleFotoType("local")}  />
          <label>Foto:</label>
          {local ? <input type="file" onChange={(e) => handlerPicture(e)} /> : <input value={urlPic} onChange={(e) => setUrlPic(e.target.value)} type="url" onChange={(e) => { handlerPicture(e); setUrlPic(e.target.value)} } placeholder="Digite a url da sua foto do github" />}
          <button type="button" onClick={() => handleSubmit()}>Cadastrar</button>
          {succes && <SuccessMessage></SuccessMessage>}
          {error && <div> <span>Por Favor preencha todos os dados cadastrais!</span> </ div> }
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserForm;
