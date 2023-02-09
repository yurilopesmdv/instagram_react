export default function Usuario(props) {
  let nomePrompt;
  let nomeUsuario;
  let imagemPrompt;
  let imagemUsuario = !imagemPrompt ? props.imagem : imagemPrompt;
  if(nomePrompt === null || nomePrompt === undefined || nomePrompt === "") {
    nomeUsuario = props.nome;
  } else {
    nomeUsuario = nomePrompt;
  }
    return (
        <div class="usuario">
            <img onClick={() => imagemPrompt = prompt("Qual link da imagem de perfil?")} data-test="profile-image" src={imagemUsuario} alt="imagem de perfil"/>
            <div class="texto">
              <span>
                <strong data-test="name">{nomeUsuario}</strong>
                <ion-icon data-test="edit-name" onClick={() => nomePrompt = prompt("Insira um nome de usuário")} name="pencil"></ion-icon>
              </span>
            </div>
          </div>
    )
}

