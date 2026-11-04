import { render, screen, fireEvent } from "@testing-library/react"

import SelectField from "./index"

test("whenChanged deve receber o valor selecionado, não o evento", () => {

  const whenChangedMock = jest.fn()

  render(
    <SelectField
      label="Time"
      items={["Escola de Frontend", "Escola de programação"]}
      whenChanged={whenChangedMock}
    />
  )

  fireEvent.change(screen.getByLabelText("Time"), {

     target: { value: "Escola de Frontend" },
  })

//  Garante que recebemos uma string, não um objeto de evento

  expect(whenChangedMock).toHaveBeenCalledWith("Escola de Frontend")
  
  expect(typeof whenChangedMock.mock.calls[0][0]).toBe("string")
})
