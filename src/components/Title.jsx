import React from 'react'
import "../style/title.css";

export const Title = ({typeOfTag,title,subtitle, center = false}) => {

    typeOfTag = typeOfTag.trim().toLowerCase();

    if(typeOfTag === "h1"){
        return (
            <div className={`title-container ${center?"center": ""}`}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        )
    }else if(typeOfTag === "h3"){
        return (
            <div className={`title-container ${center?"center": ""}`}>
                <h3 >{title}</h3>
                <p>{subtitle}</p>
            </div>
        ) 
    }
}
