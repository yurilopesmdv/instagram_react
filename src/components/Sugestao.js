export default function Sugestao() {
    const listaSugestoes = [
        {
            nome: "bad.vibes.memes",
            imagem: "assets/img/bad.vibes.memes.svg",
            alt: "bad.vibes.memes",
            segue: "Segue você"
        },
        {
            nome: "chibirdart",
            imagem: "assets/img/chibirdart.svg",
            alt: "chibirdart",
            segue: "Segue você"
        },
        {
            nome: "razoesparaacreditar",
            imagem: "assets/img/razoesparaacreditar.svg",
            alt: "razoesparaacreditar",
            segue: "Novo no Instagram"
        },
        {
            nome: "adorable_animals",
            imagem: "assets/img/adorable_animals.svg",
            alt: "adorable_animals",
            segue: "Segue você"
        },
        {
            nome: "smallcutecats",
            imagem: "assets/img/smallcutecats.svg",
            alt: "smallcutecats",
            segue: "Segue você"
        },
    ]
    return (
        listaSugestoes.map((sugestao) =>
            <div class="sugestao">
                <div class="usuario">
                    <img src={sugestao.imagem} alt={sugestao.alt} />
                    <div class="texto">
                        <div class="nome">{sugestao.nome}</div>
                        <div class="razao">{sugestao.segue}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
        )
    )
}
