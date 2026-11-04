import { render, screen, fireEvent } from "@testing-library/react"

import SelectField from "./index"

test("onChange do select deve chamar whenChanged com o valor (string), não o evento", () => {

  const whenChangedMock = jest.fn()

  render(
    <SelectField
      label="Time"
      items={["Escola de Frontend", "Escola de programação"]}
      value="Escola de Frontend"
      whenChanged={whenChangedMock}
    />
  )

  fireEvent.change(screen.getByLabelText("Time"), {

    target: { value: "Escola de programação" },
  })

  expect(whenChangedMock).toHaveBeenCalledTimes(1)

  expect(whenChangedMock).toHaveBeenCalledWith("Escola de programação")

  expect(typeof whenChangedMock.mock.calls[0][0]).toBe("string")
})
