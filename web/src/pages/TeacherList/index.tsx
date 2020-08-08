import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import search from '../../assets/images/icons/search.svg';
import './styles.css';
import api from '../../services/api';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('teach',{
            params: {
                subject,
                week_day,
                time
            }
        });
        setTeachers(response.data);
    }

    async function searchAll() {
        const response = await api.get('teach');
        const final = response.data;
        setTeachers(final[0]);
    }

    return (
        <div id="page-teacher-list">
            <PageHeader title="Esses são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>

                    <button id="search-all-button" className="icon-button" type="button" onClick={searchAll}>
                        Buscar todos
                    </button>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'História', label: 'História' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Sociologia', label: 'Sociologia' },
                            { value: 'Filosofia', label: 'Filosofia' }
                        ]}
                    />
                    <Select
                        name="day_week"
                        label="Dia da Semana"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda' },
                            { value: '2', label: 'Terça' },
                            { value: '3', label: 'Quarta' },
                            { value: '4', label: 'Quinta' },
                            { value: '5', label: 'Sexta' },
                            { value: '6', label: 'Sábado' }
                        ]}
                    />
                    <Input 
                        type="time" 
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />
                    <button id="search-button" className="icon-button" type="submit">
                        Filtrar
                        <img src={search} alt="Pesquisar"/>
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </main>
        </div>
    )
}

export default TeacherList;