interface CardTemplate {
    imageURL: string,
    nameCharacter: string,
}

function Card({ imageURL , nameCharacter } : CardTemplate) :JSX.Element {
    return(
        <div>
            <img src={imageURL} alt="" />
            <span>{nameCharacter}</span>
        </div>
    );
}

export default Card;