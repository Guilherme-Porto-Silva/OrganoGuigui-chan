import Banner from "./components/Banner"

import Form from "./components/Form"

import Team from "./components/Team"

import Footer from "./components/Footer"

import { useState } from "react"

const SERVER_LOCATION = ""

const oldTeams = [
  {
    name: "Escola de programação",
    teamBackgroundColor: "#D9F7E9",
    memberBackgroundColor: "#57C278"
  },
  {
    name: "Escola de Frontend",
    teamBackgroundColor: "#E8F8FF",
    memberBackgroundColor: "#82CFFA"
  },
  {
    name: "Escola de Data Science",
    teamBackgroundColor: "#F0F8E2",
    memberBackgroundColor: "#A6D157"
  },
  {
    name: "Escola de DevOps",
    teamBackgroundColor: "#FDE7E8",
    memberBackgroundColor: "#E06B69"
  },
  {
    name: "Escola de UX e Design",
    teamBackgroundColor: "#FAE9F5",
    memberBackgroundColor: "#DB6EBF"
  },
  {
    name: "Escola de Mobile",
    teamBackgroundColor: "#FFF5D9",
    memberBackgroundColor: "#FFBA05"
  },
  {
    name: "Inovação e gestão",
    teamBackgroundColor: "#FFEEDF",
    memberBackgroundColor: "#FF8A29"
  }
]

function getToken () {
    
    const args = {

        method: "GET",

        "content-type": "application/json",
    }

    try {
        
        const response = fetch(`${SERVER_LOCATION}/tokens`, args)
        
        return response.body
    }
        
    catch (error) {
        
        console.log(`Houve um erro ao tentar obter um token de identificação.
            
            Foi o seguinte:
            
            ${error}`)
    }
}

export default function App () {// "npx create-react-app organo", "cd /organo" e "npm start"

//Não posso fazer membersState.push() porque o useState() cria uma variavel para

//eu ler e outra para eu escrever.

//Se eu fizer variavelParaEuLer.push(), React não saberá que é para ganchá-la novamente.

  const [tokenState, setTokenState] = useState(getToken())

  const [membersState, setMembersState] = useState([])

  const teams = fetch(`${SERVER_LOCATION}/teams`, {
    
    method: "GET",
    
    "content-type": "application/json",
    
    headers: tokenState
   }
  )

  function cadastrate (cadastratedOne) {

    setMembersState([...membersState, cadastratedOne])

    console.log(`${cadastratedOne.nameState} está, oficialmente, adicionado ao time "${cadastratedOne.teamState}".`)
        
    const args = {

        method: "POST",

        "content-type": "application/json",

        headers: tokenState,

        body: cadastratedOne
    }

    try { fetch(`${SERVER_LOCATION}/teams`, args) }
        
    catch (error) {
        
        console.log(`O erro ao mandar ${saved} para o servidor foi o seguinte:
            
            ${error}`)

        alert("Não foi possível enviar as novas atualizações para o banco de dados...")
    }
}

  return (//parênteses para fazer um retorno de múltiplas linhas
    
    <div className="App">

      <Banner />

      <Form server={SERVER_LOCATION} onCadastrate={cadastratedOne => cadastrate(cadastratedOne)} team={teams.map(t => t.name)} />

      {teams.map(team => <Team name={team.name} key={team.name} teamBackgroundColor={team.teamBackgroundColor} memberBackgroundColor={team.memberBackgroundColor}
      members={membersState.filter(member => member.teamState == team.name)} />)}

      <Footer />

    </div>
  )
}