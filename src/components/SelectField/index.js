import "./selectField.css";

export default function SelectField (params) {

//  Toda vez que eu precisar carregar, na tela, uma lista de alguma coisa,

//  a função map() será usada, para converter a lista em uma tag de HTML.

//  Todo map() precisa ter um valor único, a chave, para o React saber quando carregar ou não de novo aquele item.

    function printValue (optionValue) {
        
        console.log(`Valor do time dentro do <option>: ${optionValue}`)

        params.whenChanged(optionValue)
    }

    return (

        <div className="selectField">

            <label>{params.label}</label>

            <select value={params.value} onChange={event => printValue(event.target.value)}>

                <option value="">Escolha seu time</option>

                {params.items.map((item) => <option key={item}>{item}</option>)}

            </select>

        </div>
    );
}