import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

let nome: String = "lalalala";
let subject: String = "Math";
let about: String = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptates, illo est nam autem ipsum dicta itaque iure quod natus recusandae nisi. Sapiente perspiciatis voluptate possimus officia, quis praesentium eius.";
let value: number = 80.00;
let photo: String = "https://avatars0.githubusercontent.com/u/57363888?s=400&u=c9600f979b25029bad6dbcbbdeb1d79b7407b785&v=4"

function TeacherItem () {
    return (
        <div className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/57363888?s=400&u=c9600f979b25029bad6dbcbbdeb1d79b7407b785&v=4" alt="" />
                <div>
                    <strong>{nome}</strong>
                    <span>{subject}</span>
                </div>
            </header>
            <p>{about}</p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ {value}</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </div>
    )
}

export default TeacherItem;