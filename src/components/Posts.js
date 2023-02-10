import Post from "./Post"
import listaPosts from "./listaPosts"
export default function Posts() {
    return (
         <div class="posts">
          {listaPosts.map( (post) => {
            return (
                <Post nome={post.nome}
                    imagemPerfil={post.imagemPerfil}
                    imagemPost={post.imagemPost}
                    altPost={post.altPost}
                    imagemCurtida={post.imagemCurtida}
                    altCurtida={post.altCurtida}
                    qntCurtidas={post.qntCurtidas}/> )})}
          </div>
    )
}