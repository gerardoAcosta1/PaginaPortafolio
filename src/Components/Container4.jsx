

const Container4 = ({ counter }) => {
    return (
        <div className={`container ${counter == 4 ? '' : 'container-visible'}`}>
        g
    </div>
    )
}

export default Container4