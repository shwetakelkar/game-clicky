import React from "react";
import "./imgCard.css"

function ImgCard(props){
    return(

        props.images.map((elem,i)=>    
            <span key={i} className="img-container"><img data-toggle="popover-hover" className="image" alt={elem.id} src={elem.image} onClick={()=>props.handleShuffle(elem.id)} /></span>
        )
    )
}

export default ImgCard;