import "./memberCard.css"

export default function MemberCard (params) {
    
    return (

        <div className="memberCard" style={{ background: `linear-gradient(to bottom, ${params.backgroundColor} 40%, #F2F2F2 40%)` }}>

            <img src={params.image} alt={`Foto de perfil de ${params.name}`}/>

            <h4>{params.name}</h4>

            <p>{params.role}</p>

        </div>
    )
}