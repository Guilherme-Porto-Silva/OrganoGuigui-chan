import "./team.css"

import MemberCard from "../MemberCard";

import SlideArrow from "../SlideArrow";

export default function Team (params) {

    const backgroundColor = params.memberBackgroundColor
    
    return (

        <section className="team" style={{backgroundColor: params.teamBackgroundColor}}>

            <h3 style={{borderColor: backgroundColor}}>{params.name}</h3>

            <div className="cardLine">

                <SlideArrow direction="left" />

                <div className="cardConteiner">

                    {params.members.map(member => 
                    
                    <MemberCard key={`${member.nameState}-${member.roleState}-${backgroundColor}`}
                    
                    name={member.nameState} role={member.roleState} image={member.imageState}
                    
                    backgroundColor={backgroundColor}
                    
                    />)}
                    
                </div>

                <SlideArrow direction="right" />
                
            </div>

        </section>
    )
}