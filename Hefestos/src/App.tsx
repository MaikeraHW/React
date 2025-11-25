import {useState, type FormEvent} from 'react'

import styles from './styles.module.css'

import logo from './assets/logo.png'

  type gasInfoProps = {
    title: string
    gasolina: number | string
    etanol: number | string
    resultado: number
  }


export default function App(){



  const [gasolinaInput, setGasolinaInput] = useState(0)
  const [etanolInput, setEtanolInput] = useState(0)
  const [gasInfo, setGasInfo] = useState<gasInfoProps>()


  function calculate(event: FormEvent){
    event.preventDefault()
    const calculo = (etanolInput / gasolinaInput)

    if (calculo <= 0.7){
    setGasInfo({
    title: 'Compensa usar alcool',
    gasolina: gasolinaInput,
    etanol: etanolInput,
    resultado: calculo
  })
    } else {
      setGasInfo({
    title: 'Compensa usar gasolina',
    gasolina: gasolinaInput,
    etanol: etanolInput,
    resultado: calculo
    })
  }
}


  return (
    <div>
      <main className={styles.mainContent}>
        <img src={logo} alt="logo da calculadora de combustível" className={styles.logo}/>
        <h1 className={styles.title}>Qual a melhor opção?</h1>
        <form className={styles.form} onSubmit={calculate}>
          <div>
          <label htmlFor="gasoline">Gasolina ( Preço por litro )</label>
          <input required type="number" placeholder='R$ 4,00' step='0.01' id='gasoline' value={gasolinaInput} onChange={(e) => setGasolinaInput(Number(e.target.value)) }/>
          </div>
          <div>
          <label htmlFor="etanol">Etanol ( Preço por litro )</label>
          <input required type="number" placeholder='R$ 4,00' step='0.01' id='etanol' value={etanolInput} onChange={(e) => setEtanolInput(Number(e.target.value)) }/>
          </div>
          <button type='submit' className={styles.btn} >Calcular</button>
        </form>

        {gasInfo && Object.keys(gasInfo).length > 0 && gasInfo.gasolina !== 0 && gasInfo.etanol !== 0 && (
          <section>
            <h2>{gasInfo?.title}</h2>
            <p>R$ {gasInfo?.etanol}</p>
            <p>R$ {gasInfo?.gasolina}</p>
            <p>Resultado do calculo: {gasInfo?.resultado}</p>
          </section>)
        }
      </main>
    </div>
  )

}