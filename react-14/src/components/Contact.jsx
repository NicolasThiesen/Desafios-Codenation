import React from 'react';
import "./style/style.css";
export default function Contact(props){
  const data = props.data;  
  
  return (
        <article className="contact container" data-testid="contact">
          <span><img className="contact__img" data-testid="contact-avatar" src={data.avatar} alt="Contact Avatar"/></span>
          <span className="contact__name" data-testid="contact-name">{data.name}</span>
          <span className="contact__phone" data-testid="contact-phone">{data.phone}</span>
          <span className="contact__country" data-testid="contact-country">{data.country}</span>
          <span className="contact__date" data-testid="contact-date">{new Date(data.admissionDate).toLocaleDateString("pt-br")}</span>
          <span className="contact__company" data-testid="contact-company">{data.company}</span>
          <span className="contact__department" data-testid="contact-department">{data.department}</span>
        </article>
      );
  }


