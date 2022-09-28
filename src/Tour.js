import React from "react";

const Tour = ({id, image, info, price, name, removeTour}) => {
    return (
        <article>
            <img src={image} alt={name}/>
            <div className="info">
                <h4 className="title">{name}</h4>
                <h4 className="price">${price}</h4>
            </div>
            <p>{info}</p>
            <footer>
                <button onClick={() => removeTour(id)}>Pas interesse</button>
            </footer>
        </article>
    );
}

export default Tour;