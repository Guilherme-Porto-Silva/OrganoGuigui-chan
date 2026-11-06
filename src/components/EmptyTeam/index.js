import "./et.css"

export default function EmptyTeam (params) {
    
    return (

        <section style={{backgroundColor: params.backgroundColor}}>
            
            <h3 style={{borderColor: params.color}}>{params.name}</h3>
            
            <p>Este time ainda não tem membros.</p>
            
        </section>
    )
}