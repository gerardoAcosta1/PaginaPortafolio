const Container2 = ({ counter }) => {
    console.log(counter)
    return (
        <div className={`container__2 ${counter == 2 ? '' : 'container-visible'}`}>
            <div className="container__presentation">
                <h2 className="title">Acerca de <span className="mi">mi</span></h2>
                <h6 className="description2">Soy una persona sencilla y con muchas ganas de integrarme a un ambiente de desarrollo 
                    que sirva como guia para continuar mis estudios y preparación. 
                </h6>
                <div className="container2-personal">
                    <div className="container-dates">
                        <h3 className="title-personal">Información Personal</h3>
                        <ul className="list-personal">
                            <li className="item-personal">
                                <h4>Fecha de Nacimiento</h4>
                                <span>17 de enero de 1988</span>
                            </li>
                            <li className="item-personal">
                                <h4>Edad</h4>
                                <span>35 años</span>
                            </li>
                            <li className="item-personal">
                                <h4>Email</h4>
                                <span>Gerardonuevo1234321@gmail.com</span>
                            </li>
                            <li className="item-personal">
                                <h4>Carrera</h4>
                                <span>Ingeniería en Sistemas Computacionales</span>
                            </li>
                            <li className="item-personal">
                                <h4>Teléfono</h4>
                                <span>6674702159</span>
                            </li>
                            <li className="item-personal">
                                <h4>Ciudad</h4>
                                <span>Culiacán Sinaloa</span>
                            </li>
                            <li className="item-personal">
                                <h4>Disponibilidad</h4>
                                <span>Inmediata</span>
                            </li>
                        </ul>

                    </div>
                    <div className="container-statistics" >
                        <h5 className="statistics-title">Habilidades</h5>
                        <div className="container-bar">
                            <div className="statistics-1">
                            </div>
                            <h5 className="title-statistics">css 20%</h5>
                        </div>
                        <div className="container-bar">
                            
                            <div className="statistics-2">
                            </div>
                            <h5 className="title-statistics">html 30%</h5>
                        </div>
                        <div className="container-bar">
                            
                            <div className="statistics-3">
                            </div>
                            <h5 className="title-statistics">JavaScript 25%</h5>
                        </div>
                        <div className="container-bar">
                            
                            <div className="statistics-3">
                            </div>
                            <h5 className="title-statistics">React 25%</h5>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Container2