const teams = [
  {
    name: "Escola de programação",
    teamBackgroundColor: "#D9F7E9",
    memberBackgroundColor: "#57C278"
  },
  {
    name: "Escola de Frontend",
    teamBackgroundColor: "#E8F8FF",
    memberBackgroundColor: "#82CFFA"
  },
  {
    name: "Escola de Data Science",
    teamBackgroundColor: "#F0F8E2",
    memberBackgroundColor: "#A6D157"
  },
  {
    name: "Escola de DevOps",
    teamBackgroundColor: "#FDE7E8",
    memberBackgroundColor: "#E06B69"
  },
  {
    name: "Escola de UX e Design",
    teamBackgroundColor: "#FAE9F5",
    memberBackgroundColor: "#DB6EBF"
  },
  {
    name: "Escola de Mobile",
    teamBackgroundColor: "#FFF5D9",
    memberBackgroundColor: "#FFBA05"
  },
  {
    name: "Inovação e gestão",
    teamBackgroundColor: "#FFEEDF",
    memberBackgroundColor: "#FF8A29"
  }
]

    function sendToServer (saved) {
        
        const args = {

            method: "POST",

            "content-type": "application/json",

            headers: props.token,

            body: saved
        }

        try { fetch(props.server, args) }
            
        catch (error) {
            
            console.log(`O erro ao mandar ${saved} para o servidor foi o seguinte:
                
                ${error}`)

            alert("Não foi possível enviar as novas atualizações para o banco de dados...")
        }
    }