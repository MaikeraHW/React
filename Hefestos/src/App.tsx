import { useState } from "react";

import LogoImg from './assets/logo2.png'
import styles from './styles.module.css'

export default function App(){
  
  const [typeOfMessage, setTypeOfMessage] = useState('')

  function showMessage(){
   if (typeOfMessage) {
    alert(typeOfMessage)
   } else {
    alert("Escolha o tipo primeiramente")
   }
  }

  function setMotivacional (){
    setTypeOfMessage('Motivacional')

  }

    function setBomDia (){
    setTypeOfMessage('Bom dia')

  }


  return (
   <div className={styles.container}>
    <img 
      src={LogoImg} 
      alt="Logo do App" 
      className={styles.logo}/>
    
    <h1 className={styles.title}>Categorias</h1>
    <div className={styles.buttons}>
      <button type="button" className={`${styles.button} ${(typeOfMessage === 'Motivacional') ? (styles.ativo) : ('') }`} onClick={setMotivacional} >Motivacional</button>
      <button type="button" className={`${styles.button} ${(typeOfMessage === 'Bom dia') ? (styles.ativo) : ('') }`} onClick={setBomDia} >Bom dia</button>
    </div>
    <button type="button" className={styles.button2} onClick={showMessage}>Gerar Frase</button>
    <output className={styles.output}>"Frase gerada automaticamente"</output>
   </div>
  )
}