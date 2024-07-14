import { useState, useEffect } from "react";
import {buscar} from "../api/api";

const ListPost  = ({url}) => {

    const [posts, setPosts] = useState([]);
    useEffect( () => { buscar(url, setPosts) }, [url]);    
    useEffect( () => { buscar(url, setPosts) }, [url]);


/*     const consultaDatos = ({url}) => {

        const [posts, setPosts] = useState([]);
        useEffect( () => { buscar(url, setPosts) }, [url]);

        posts; //aqui estan  todos los datos de card o categorias             
    }
 */

   



    return (
        <div>
            {
                posts.map( (post) => {
                    return (
                        <a href="{post.video}" target="_blank">
                            <p>{post.titulo}</p>
                            <p>{post.categoria}</p>
                            <img src={post.imagen} alt="imagen" />
                            <p>{post.id}</p>
                        </a>

                    )
                })
                

/*                 posts.map(post => {
                    console.log(post.titulo)

                    return <Link to=""  >
                        <article >
                            <h3 className="post-card__title">
                                aaaa
                            </h3>
                            <img src="" alt="imagen" />
                            <p>a</p>
                        </article>
                    </Link>
                }) */
            } 
        </div>
    );
};

export default ListPost;