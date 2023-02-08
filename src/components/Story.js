export default function Story() {
    const listaStories = [
      {
        nome: "9gag",
        link: "assets/img/9gag.svg" // feito
      },
      {
        nome: "meowed",
        link: "assets/img/meowed.svg" // feito
      },
      {
        nome: "barked",
        link: "assets/img/barked.svg" // feito
      },
      {
        nome: "nathanwpylestrangeplanet",
        link: "assets/img/nathanwpylestrangeplanet.svg" // feito
      },
      {
        nome: "wawawicomics",
        link: "assets/img/wawawicomics.svg" // feito
      },
      {
        nome: "respondeai",
        link: "assets/img/respondeai.svg" // feito
      },
      {
        nome: "filomoderna",
        link: "assets/img/filomoderna.svg"
      },
      {
        nome: "memeriagourmet",
        link: "assets/img/memeriagourmet.svg"
      },
    ]
    return (
      listaStories.map( (story) => 
        <div class="story">
          <div class="imagem">
            <img src={story.link} alt={story.nome} />
          </div>
          <div class="usuario">{story.nome}</div>
        </div>
      )
    )
  }
  