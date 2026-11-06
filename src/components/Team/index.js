import "./team.css"

import MemberCard from "../MemberCard";

import EmptyTeam from "../EmptyTeam";

export default function Team (params) {

    const backgroundColor = params.memberBackgroundColor

//  renderização condicional  

    return (

        (params.members.length > 0)? <section className="team" style={{backgroundColor: params.teamBackgroundColor}}>

            <h3 style={{borderColor: backgroundColor}}>{params.name}</h3>

            <div className="cardLine">

                {params.members.map(member => <MemberCard key={`${member.nameState}-${member.roleState}-${backgroundColor}`}
                
                name={member.nameState} role={member.roleState} image={member.imageState}
                
                backgroundColor={backgroundColor} />)}
                
            </div>

        </section>: <EmptyTeam name={params.name} color={backgroundColor} backgroundColor={params.teamBackgroundColor} />

    )
}