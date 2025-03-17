const screen = {
    useProfile: document.querySelector('.profile-data'),
    rendeUser(user){
               this.useProfile.innerHTML = `<div class = "info">  
                            <img src= "${user.avatarUrl}" alt = "Foto do perfil do Usuário"/>
                            <div class = "data">
                            <h1> ${user.name ?? 'não possui nome cadastrado'}  </h1>
                            <p> ${user.bio ?? 'não possui bio cadastrada'} </p>
                            <p> seguidores: ${user.followers}  </p>
                            <p> seguindo: ${user.following} </p>
                            </div>
                    </div>`


        let repositoriesItens = ''
        user.repositories.forEach(repo =>repositoriesItens += `<li>  <a href="${repo.html_url}" target = "_blank">${repo.name} </a> 
            
                <p> forks: ${repo.forks_count} </p>
                <p> stars: ${repo.stargazers_count} </p>
                <p> watchers: ${repo.watchers_count} </p>
                <p> Languages: ${repo.language ?? 'Não especificado'} </p>

            
            </li>`)
        
        

        if(user.repositories.length > 0){
            this.useProfile.innerHTML += `<div class = "repositories section" > 
                                                <h2> Repositórios </h2>
                                                <ul> ${repositoriesItens} </ul>
                                                        
                                        </div>`
        }
        
        
        let eventsItems = ''
        user.events.forEach(event =>{
            if(event.type === "PushEvent"){
                eventsItems += `<li>
                <strong>${event.repo.name}</strong>: ${event.payload.commits ? event.payload.commits[0].message : "Sem mensagem de commit"} </li> `
            }else if(event.type === "CreateEvent"){
                eventsItems += `<li> 
                <strong>${event.repo.name}</strong>: Sem mensagem de commit </li>`
            }
        })

        if (user.events.length > 0) {
            this.useProfile.innerHTML += `<div class="events section">
                <h2>Últimos Eventos</h2>
                <ul>${eventsItems}</ul>
            </div>`
        }


            
    },
    renderNotFound(){
        this.useProfile.innerHTML = " <h3> Usuário não encontrado </h3> "
    }
}


export{screen}