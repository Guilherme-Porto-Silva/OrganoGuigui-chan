import { render, screen } from "@testing-library/react"

import Team from "./index"

test("renderiza EmptyTeam quando não há membros", () => {

  render(
    <Team
      name="Time Fantasma"
      teamBackgroundColor="#FFF"
      memberBackgroundColor="#FFF"
      members={[]}
    />
  )

  expect(screen.getByText(/Time Fantasma/i)).toBeInTheDocument()

})

test("renderiza seção com membros quando members.length > 0", () => {

  render(
    <Team
      name="Time Ativo"
      teamBackgroundColor="#FFF"
      memberBackgroundColor="#FFF"
      members={[{ nameState: "Ana", roleState: "Dev", imageState: "" }]}
    />
  )

  expect(screen.getByText(/Ana/i)).toBeInTheDocument()
})
