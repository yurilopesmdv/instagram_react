import { useState } from "react";

export default function Usuario(props) {
  const [nomeUsuario, setNomeUsuario] = useState(props.nome)
  const [fotoUsuario, setFotoUsuario] = useState(props.imagem)
  
  function alteraNome() {
    const novoNome = prompt("Qual o seu nome?")
    if(!novoNome) {
    }else {
      setNomeUsuario(novoNome);
    }
  }
  function alteraFoto() {
    const novaFoto = prompt("Insira o link da sua foto");
    if(!novaFoto) {

    }else {
      setFotoUsuario(novaFoto);
    }
   
  }
    return (
        <div class="usuario">
            <img onClick={alteraFoto} data-test="profile-image" src={fotoUsuario} alt="imagem de perfil"/>
            <div class="texto">
              <span>
                <strong data-test="name">{nomeUsuario}</strong>
                <ion-icon data-test="edit-name" onClick={alteraNome} name="pencil"></ion-icon>
              </span>
            </div>
          </div>
    )
}

