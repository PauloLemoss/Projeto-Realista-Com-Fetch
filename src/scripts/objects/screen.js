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
            
                 <div class="repo-details">
                    <p class="repo-forks">
                    <i class="fas fa-code-branch"></i> ${repo.forks_count}
                    </p>
                    <p class="repo-stars">
                    <i class="fas fa-star"></i> ${repo.stargazers_count}
                    </p>
                    <p class="repo-watchers">
                    <i class="fas fa-eye"></i> ${repo.watchers_count}
                    </p>
                    <p class="repo-language">
                    <i class="fas fa-laptop-code"></i> ${repo.language ?? 'Não especificado'}
                    </p>
                </div>
            
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
                <strong class="repo-name">${event.repo.name}</strong> - <span class= "commit-message"> ${event.payload.commits ? event.payload.commits[0].message : "Sem mensagem de commit"}</span> </li> `
            }else if(event.type === "CreateEvent"){
                eventsItems += `<li> 
                <strong class="repo-name" >${event.repo.name}</strong> - <span class="commit-message"> Sem mensagem de commit </span> </li>`
            }
        })

        if (user.events.length > 0) {
            this.useProfile.innerHTML += `<div class="events section">
                <h2>Últimos Eventos</h2>
                <ul>${eventsItems}</ul>
            </div>`
        }else{
            this.useProfile.innerHTML += `<div class="events section">
            <h2">Sem eventos recentes</h2>
        </div>`;
        }


            
    },
    renderNotFound(){
        this.useProfile.innerHTML = " <h3> Usuário não encontrado </h3> "
    }
}


export{screen}