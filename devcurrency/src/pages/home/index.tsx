
import { useState, useEffect } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './home.module.css'

export function Home() {

  interface CoinProps{
    id: string
    rank: string
    symbol: string
    name: string
    supply: string
    maxSupply: string
    masketCapUsd: string
    volumeUsd24Hr: string
    priceUsd: string
    changePercent24Hr: string
    vwap24Hr: string
    explorer: string
  }

  interface DataProps{
    data: CoinProps[]
  }


  const [input, setInput] = useState("")
  const [coins, setCoins] = useState<CoinProps[]>([])


    async function getData(){
    fetch("https://rest.coincap.io/v3/assets?limit=10&offset=0&apiKey=d6abe85b5ef0212ecbfe0578366cd1e39c17776408857facd66a59f334b8008c")
    .then(response => response.json())
    .then((data: DataProps) => {
      const coinsData = data.data
      console.log(coinsData)
    })
  }


  useEffect(() => {
    getData();
  }, [])

  const navigate = useNavigate();

  function handleSubmit (e: FormEvent){
    e.preventDefault()

    if (input === ""){
      return;
    } else{
      navigate(`/about/${input}`)
    }
  }

  return (
    <main className={styles.mainContent}>
      <form className={styles.mainForm}>
        <input type="text" placeholder="Digite a moeda Ex.: Bitcoin" className={styles.mainInput} onChange={(e) => { setInput(e.target.value)}}/>
        <button type="submit" className={styles.mainButton} onClick={handleSubmit}>Pesquisar</button>
      </form>

      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Market $</th>
            <th scope="col">Price</th>
            <th scope="col">Volume</th>
            <th scope="col">Last 24h</th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr className={styles.tableRow}>
            <td data-label="Moeda">
              <Link to={"/about/bitcoin"}>
                <span>Bitcoin</span> | BTC
              </Link>
            </td>
            <td data-label="Market">2,89</td>
            <td data-label="Price">3,99</td>
            <td data-label="Volume">4,99</td>
            <td data-label="Last24h">5,99</td>
          </tr>
        </tbody>
      </table>

      <button className={styles.buttonMore}>
        Show more
      </button>
    </main>
  )
}
