import "./Banner.css"

export default function Banner () {
    
    return (

        <header className="banner">

            <img className="bannerBackground" src="/images/fundo.png" alt="Capa principal da página do Organo."/>

            <section>

                <img className="logo" src="/images/logo.png" alt=""/>

                <div className="bannerLine">

                    <div className="bannerTextConteiner">

                        <h1>Pessoas e times</h1>

                        <span>organizadas em um só lugar!</span>

                    </div>

                    <img className="bannerIlustration" src="/images/people.png" alt=""/>

                </div>

            </section>

        </header>
    )
}