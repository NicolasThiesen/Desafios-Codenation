import React from 'react';
import "./style/style.css";
export default function Contact(props){
    return (
        <li className="contact container" data-testid="contact">
          <img className="contact__img" src={props.image} alt="Contact Avatar"/>
          <p className="contact__p"><a href="/#" className="contact__name">{props.name}</a></p>
          <p className="contact__p">{props.tel}</p>
          <p className="contact__p">{props.country}</p>
          <p className="contact__p">{props.adm}</p>
          <p className="contact__p">{props.company}</p>
          <p className="contact__p">{props.dep}</p>
        </li>
      );
  }


