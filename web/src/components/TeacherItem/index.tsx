import React, { useState } from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'
import api from '../../services/api';

export interface Teacher {
        id: number;
        name: string;
        avatar: string;
        subject: string;
        bio: string;
        cost: number;
        whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
}


const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {

    function createConnection() {
        api.post('connect', {
            user_id: teacher.id
        })

    }
    return (
        <div className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a target="_blank" onClick={createConnection} href={`http://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </a>
            </footer>
        </div>
    )
}

export default TeacherItem;