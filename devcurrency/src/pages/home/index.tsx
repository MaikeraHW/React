
import { Link } from 'react-router-dom'
import styles from './home.module.css'

export function Home() {

  return (
    <main className={styles.mainContent}>
      <form className={styles.mainForm}>
        <input type="text" placeholder="Digite a moeda Ex.: Bitcoin" className={styles.mainInput}/>
        <button type="submit" className={styles.mainButton}>Pesquisar</button>
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
    </main>
  )
}
