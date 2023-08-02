
const Container3 = ({ counter }) => {
    return (
        <div className={`container ${counter == 3 ? '' : 'container-visible'}`}>

            <h5 className="container3-description">Para los siguientes proyectos se utilizaron diversas tecnologías,
                es el caso de Css, Html, Javascript, así también el entorno de desarrollo <span className="name">React </span></h5>

            <div className="container-images">
                <div className="card-images">
                    <a href="https://gentle-kangaroo-473145.netlify.app/" target="blanck"><img className="card-image" src="./foto/Portafolio/fortuna.jpg" alt="" /></a>
                    <p><a target="blanck" href="https://gentle-kangaroo-473145.netlify.app/">En este proyecto se consume una Api de frases sobre la buena fortuna</a></p>
                </div>
                <div className="card-images">
                    <a target="blanck" href="https://tangerine-daffodil-ddd576.netlify.app/"><img className="card-image" src="./foto/Portafolio/clima.jpg" alt="" /></a>
                    <p><a target="blanck" href="https://tangerine-daffodil-ddd576.netlify.app/">Aqui se consume una Api de pronóstico del clima, es posible buscar por nombre de Ciudad</a></p>
                </div>
                <div className="card-images">
                    <a href="https://grand-sunflower-d866a1.netlify.app/"  target="blanck"><img className="card-image" src="./foto/Portafolio/morti.jpg" alt="" /></a>
                    <p><a target="blanck" href="https://grand-sunflower-d866a1.netlify.app/">Se extraen datos de una Api de la famosa serie Rick & Morti, se hace uso de la tecnología flexbox para el reordenamiento de las tarjetas</a></p>
                </div>
                <div className="card-images">
                    <a href="https://poetic-brioche-1c2bda.netlify.app/"  target="blanck"><img className="card-image" src="./foto/Portafolio/crud.jpg" alt="" /></a>
                    <p><a target="blanck" href="https://poetic-brioche-1c2bda.netlify.app/">Se crea un CRUD para insertar, eliminar, actualizar y leer información de un Api de usuarios</a></p>
                </div>
                <div className="card-images">
                    <a href="https://main--phenomenal-lily-2f763c.netlify.app/"  target="blanck"><img className="card-image" src="./foto/Portafolio/pokedex.jpg" alt="" /></a>
                    <p><a target="blanck" href="https://main--phenomenal-lily-2f763c.netlify.app/">Se obtienen datos de una Api 'pokemon', se utilizan las librerías de react-redux y @reduxjs/toolkit para generar estados globales; se agregó un sectión donde se puede elegir pokemon por tipo y un sistema de paginación. Se implementa 'rutas protegidas'</a></p>
                </div>
            </div>
        </div>
    )
}

export default Container3