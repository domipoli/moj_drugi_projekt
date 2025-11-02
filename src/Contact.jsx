import { useState,useEffect } from 'react';


import './Contact.scss';
import phoneIcon from './photoassets/Phone_Vector.svg';
import emailIcon from './photoassets/Email_Vector.svg';


const HeaderMain = ({text}) => {
  return(
    <header className='header-main'>
      {text}
    </header>
  )
}

const ContactData = ({icon,text}) =>{
  return(
    <div className='contact'>
      <img src={icon} alt='icon' />
      <span>{text}</span>
    </div>
  )
}


const MessageSentInfo =({clearStatus, message})=>{
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      clearStatus();
    }, 5000); // 5000 ms = 5 sekundy

    return () => clearTimeout(timer); // sprzątanie timera
  }, [clearStatus]);

  if (!visible) return <> Wyślij wiadomość </>;

  return (
    <span>
      {message}
    </span>
  );
}


const ContactForm = () =>{
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const clearStatus = () => {
    setStatus('')
  }
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Walidacja danych formularza kontaktowego
    
    // Koniec walidacji danych formularza kontaktowego
    setStatus("Wysyłanie...");

    try {
      const res = await fetch("http://192.168.1.9:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Błąd wysyłki");
      }

      setStatus("✅ Wiadomość wysłana!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Błąd wysyłki");
      console.log('bład '+err.message)
      // setStatus("❌ " + err.message);
    }
  }; 



  return(
    <form action=""  className='contact-form' onSubmit={onSubmit}>
      <p>Formularz kontaktowy</p>

      <input 
        type="text" 
        name="name" 
        value={form.name}
        id="" 
        placeholder='Imię i nazwisko' 
        className='name-surname-email' 
        onChange={onChange}
        required
      />

      <input 
        type="email" 
        name="email" 
        value={form.email}
        id="" 
        placeholder='Adres email'
        className='name-surname-email' 
        onChange={onChange}
        required
      />

      <textarea 
        name="message" 
        id="" 
        value={form.message}
        placeholder='Twoja wiadomość...' 
        className='message' 
        onChange={onChange}
        required
      />

      <button 
        type="submit"
        disabled={status.type === 'Wysyłanie...'}
        className={`btn-submit ${status === 'Wysyłanie...' && 'info-submit'} ${status === '✅ Wiadomość wysłana!' && 'info-submit-sent'}` }
      >
        {status === '' && 'Wyślij wiadomość'}
        {status === 'Wysyłanie...' && 'Wysyłanie…'}
        {status === "✅ Wiadomość wysłana!" && <MessageSentInfo clearStatus={clearStatus} message={"Wiadomość wysłana"}/>}
        {status === "Błąd wysyłki" && <MessageSentInfo clearStatus={clearStatus} message={"Błąd wysyłki"}/>}
      </button>
      
    </form>
  )
}

export const Contact = () =>{
  return(
    <div className='contact-wrapper'>
      <div className='contact-inner'>
        <HeaderMain text='Chcesz wiedzieć więcej? Skontaktuj się z nami!' />
        <ContactData icon={phoneIcon} text='+48 739 920 779' />
        <ContactData icon={emailIcon} text='biuro@chorkameralnyhibike.com' />
        <ContactForm />
      </div> 
    </div>
  )
}