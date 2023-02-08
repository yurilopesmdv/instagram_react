export default function Post() {
    const listaPosts = [
        {
            nome: "meowed",
            imagemPerfil: "assets/img/meowed.svg",
            imagemPost: "assets/img/gato-telefone.svg",
            altPost: "gato-telefone",
            imagemCurtida: "assets/img/respondeai.svg",
            altCurtida: "respondeai",
            qntCurtidas: 101.523
        },
        {
            nome: "barked",
            imagemPerfil: "assets/img/barked.svg",
            imagemPost: "assets/img/dog.svg",
            altPost: "dog",
            imagemCurtida: "assets/img/adorable_animals.svg",
            altCurtida: "adorable_animals",
            qntCurtidas: 99.159
        },
        {
            nome: "9gag",
            imagemPerfil: "assets/img/9gag.svg",
            imagemPost: "https://cdn.shopify.com/s/files/1/0650/6689/3547/products/He1d699f5e91e46eabdac2824c4ea0c06z_524dd956-2775-4b9c-ab8a-85a9b4d58b72.jpg?v=1657545582",
            altPost: "cachorro-coleira",
            imagemCurtida: "assets/img/nathanwpylestrangeplanet.svg",
            altCurtida: "nathanwpylestrangeplanet",
            qntCurtidas: 214.413
        },
    ]
    return (
        listaPosts.map((post) =>
            <div data-test="post" class="post">
                <div class="topo">
                    <div class="usuario">
                        <img data-test="post-image" src={post.imagemPerfil} alt={post.nome} />
                        {post.nome}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={post.imagemPost} alt={post.altPost} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={post.imagemCurtida} alt={post.altCurtida} />
                        <div class="texto">
                            Curtido por <strong data-test="likes-number">{post.altCurtida}</strong> e <strong>outras {post.qntCurtidas} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}
