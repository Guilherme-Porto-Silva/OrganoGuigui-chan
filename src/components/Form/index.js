import "./form.css"

import { useState } from "react";

import TextField from "../TextField"

import SelectField from "../SelectField"

export default function Form (props) {

    const [nameState, setNameState] = useState("Guigui-chan")

    const [roleState, setRoleState] = useState("Programador")

    const [imageState, setImageState] = useState("https://github.com/Guilherme-Porto-Silva.png")

    const [teamState, setTeamState] = useState("Escolha seu time")

//  "{nameState, roleState, imageState, teamState}" é uma forma mais inxuta de escrever um objeto JavaScript.

//  Eu poderia ter feito algo parecido com os dicionários do Python e com o J.S.O.N.

//  Eu poderia colocar isso no argumento da declaração de uma função, para quebrar o props/params.

    function save (event) {

        event.preventDefault()

        const saved = {nameState, roleState, imageState, teamState}

        props.onCadastrate(saved)

        console.log(`Cadastrei alguém assim: ${saved.nameState}, ${saved.roleState}, ${saved.imageState}, ${saved.teamState}`)
    }

//  Em "whenChanged={state => setImageState(state)}", state é uma variavel criada agora.

//  Seu nome poderia ser "jabuticaba", desde que seja o mesmo à esquerda e à direita da seta.

    return (//parênteses para fazer um retorno de múltiplas linhas

        <main>

            <form onSubmit={save}>

                <h2>Preencha os dados do membro</h2>

                <TextField label="Nome" placeholder="Digite o nome do membro" required="1" value={nameState} whenChanged={state => setNameState(state)} />

                <TextField label="Cargo" placeholder="Digite o nome do cargo do membro" required="1" value={roleState} whenChanged={state => setRoleState(state)} />

                <TextField label="Imagem" placeholder="Digite o endereço da imagem do membro" required="0" value={imageState} whenChanged={state => setImageState(state)} />

                <SelectField label="Time" items={props.team} whenChanged={tagValue => setTeamState(tagValue)}/>

                <button>Criar card</button>

            </form>

        </main>
    )
}