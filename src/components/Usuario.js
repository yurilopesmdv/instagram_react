import React, { useState } from 'react'
export default function Usuario(props) {
  let nomePrompt;
  let nomeUsuario = !nomePrompt ? props.nome : nomePrompt;
    return (
        <div class="usuario">
            <img data-test="profile-image" src={props.imagem} alt="imagem de perfil"/>
            <div class="texto">
              <span>
                <strong data-test="name">{nomeUsuario}</strong>
                <ion-icon data-test="edit-name" onClick={() => nomePrompt = prompt("Insira um nome de usuário")} name="pencil"></ion-icon>
              </span>
            </div>
          </div>
    )
}

