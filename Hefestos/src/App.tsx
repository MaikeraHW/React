export default function App(){
  return (
    <div><h1>Meu Projeto</h1>
    <Aluno nome='teste'/>
    </div>
  )
}

type AlunoProps = {
  nome: string | number
}

function Aluno({nome}: AlunoProps){
  return (
    <p>Nome: {nome}</p>
  )
}