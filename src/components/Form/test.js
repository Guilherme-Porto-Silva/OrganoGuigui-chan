import { render, screen, fireEvent } from "@testing-library/react"

import App from "../App"

import { render, screen } from "@testing-library/react"

import Team from "../components/Team"

describe("Cadastro de membro no time correto", () => {

    test("card aparece no time selecionado após cadastro", () => {

        render(<App />)

        fireEvent.change(screen.getByLabelText("Nome"), { target: { value: "Guigui-chan" } })

        fireEvent.change(screen.getByLabelText("Cargo"), { target: { value: "Programador" } })

        fireEvent.change(screen.getByLabelText("Imagem"), { target: { value: "https://exemplo.com/foto.png" } })

        fireEvent.change(screen.getByLabelText("Time"), { target: { value: "Escola de programação" } })

        fireEvent.click(screen.getByText("Criar card"))

    //  O card deve aparecer DENTRO da seção do time correto

        const teamSection = screen.getByText("Escola de programação").closest("section")

        expect(teamSection).toHaveTextContent("Guigui-chan")

    //  E NÃO deve aparecer em outro time

        const otherTeamSection = screen.getByText("Escola de Frontend").closest("section")

        expect(otherTeamSection).not.toHaveTextContent("Guigui-chan")
    })

    test("renderiza nome, cargo e imagem corretos do membro", () => {

    const members = [

        { nameState: "Guigui-chan", roleState: "Programador", imageState: "https://foo.png", teamState: "Escola de Frontend" }
    ]

    render(<Team name="Escola de Frontend" members={members} teamBackgroundColor="#eee" />)

    expect(screen.getByText("Guigui-chan")).toBeInTheDocument()

    expect(screen.getByText("Programador")).toBeInTheDocument()

    expect(screen.getByAltText(/Guigui-chan/i)).toHaveAttribute("src", "https://foo.png")
    })

    test("regressão: objeto member usa sufixo 'State', não deve usar 'name'/'role'/'image' direto", () => {

    const member = { nameState: "X", roleState: "Y", imageState: "Z", teamState: "T" }

    expect(member.name).toBeUndefined()

    expect(member.nameState).toBe("X")
    })
})