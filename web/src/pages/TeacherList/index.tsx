import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
// import { Link } from 'react-router-dom';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list">
            <PageHeader title="Esses são os proffys disponíveis.">
                <form id="search-teachers">

                    <div className="input-block">
                        <label htmlFor="">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Dia da Semana</label>
                        <input type="text" id="week_day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />      
                <TeacherItem />      
                <TeacherItem />      
            </main>
        </div>
    )
}

export default TeacherList;