import "./TextField.css"

export default function TextField (props) {

    const ph = "" + props.placeholder

    const r = (props.required == 1)

    function whenTyped (change) {

        const valor = change.target.value

        props.whenChanged(valor)

        console.log("Houve uma alteração em " + valor)
    }

    return (

        <div className="textField">

            <label>{props.label}</label>

            <input value={props.value} onChange={whenTyped} placeholder={ph} required={r} aria-required={r}/>

        </div>
    )
}