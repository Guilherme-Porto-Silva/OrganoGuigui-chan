import Banner from "./components/Banner"

import Form from "./components/Form"

import Team from "./components/Team"

import { useState } from "react"

const teams = [
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

export default function App () {// "npx create-react-app organo", "cd /organo" e "npm start"

//Não posso fazer membersState.push() porque o useState() cria uma variavel para

//eu ler e outra para eu escrever.

//Se eu fizer variavelParaEuLer.push(), React não saberá que é para ganchá-la novamente.

  const [membersState, setMembersState] = useState([])

  function cadastrate (cadastratedOne) {

    setMembersState([...membersState, cadastratedOne])

    console.log(`${cadastratedOne.nameState} está, oficialmente, adicionado ao time "${cadastratedOne.teamState}".`)
  }

  return (
    
    <div className="App">

      <Banner />

      <Form onCadastrate={cadastratedOne => cadastrate(cadastratedOne)} team={teams.map(t => t.name)} />

      {teams.map(team => <Team name={team.name} key={team.name} teamBackgroundColor={team.teamBackgroundColor} memberBackgroundColor={team.memberBackgroundColor}
      members={membersState.filter(member => member.teamState == team.name)} />)}

    </div>

  )
}