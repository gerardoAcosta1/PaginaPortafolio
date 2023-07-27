

const Container4 = ({ counter }) => {
    return (
        <div className={`container ${counter == 4 ? '' : 'container-visible'}`}>
        
    </div>
    )
}

export default Container4