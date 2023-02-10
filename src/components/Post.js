import { useState } from "react"
export default function Post(props) {
    const [iconeCoracao, setIconeCoracao] = useState("heart-outline");
    const [iconeSalvo, setIconeSalvo] = useState("bookmark-outline");
    const [classCoracao, setClassCoracao] = useState("");
    const [numeroCurtida, setNumeroCurtida] = useState(props.qntCurtidas);

    function darLike() { 
        if(iconeCoracao === "heart-outline") {
            setIconeCoracao("heart");
            setClassCoracao("red");
            setNumeroCurtida(props.qntCurtidas + 1);
        }else {
            setIconeCoracao("heart-outline");
            setClassCoracao("")
            setNumeroCurtida(props.qntCurtidas);
        }
    }
    function salvar() {
        if(iconeSalvo === "bookmark-outline") {
            setIconeSalvo("bookmark")
        } else {
            setIconeSalvo("bookmark-outline")
        }
    }
    function darLikeImg() {
        console.log('duplo clique');
        if(iconeCoracao === "heart-outline") {
            setIconeCoracao("heart");
            setClassCoracao("red");
            setNumeroCurtida(props.qntCurtidas + 1);
        }
    }
    return ( <div data-test="post" class="post">
                <div class="topo">
                    <div class="usuario">
                        <img data-test="post-image" src={props.imagemPerfil} alt={props.nome} />
                        {props.nome}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.imagemPost} onClick={darLikeImg} onDoubleClick={darLikeImg} alt={props.altPost} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon class={classCoracao} onClick={darLike} data-test="like-post" name={iconeCoracao}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon onClick={salvar} data-test="save-post"  name={iconeSalvo}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.imagemCurtida} alt={props.altCurtida} />
                        <div class="texto">
                            Curtido por <strong>{props.altCurtida}</strong> e <strong data-test="likes-number">outras {numeroCurtida} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>)
}
