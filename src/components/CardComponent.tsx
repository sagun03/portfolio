import React from 'react';
import './CardComponent.css'; 

interface CardComponentProps {
    image: string;      
    title: string;     
    content: string;    
}

const CardComponent: React.FC<CardComponentProps> = ({ image, title, content }) => {
    return (
        <div className="container">
            <div className="card">
                <div className="image">
                    <img
                        src={image}
                        alt={title}
                    />
                </div>
                <div className="content">
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
