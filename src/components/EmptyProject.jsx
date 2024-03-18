import React from 'react'
import noProjectImg from '../assets/no-projects.png'
import Button from './Button'
export default function EmptyProject({onAdd}) {
    return(
        <div className='mt-24 text-center w-2/3'>
            <img src={noProjectImg} alt="пусто" className='w-16 h-16 object-contain mx-auto mb-3'/>
            <h2 className="text-xl font-bold text-stone-500 my-4">Не найдено проектов</h2>
            <p className='text-stone-400 mb-4 '>Выберите проект или начните создавать новый</p>
            <p className='mt-8'>
            <Button onClick={onAdd}>Создать новый проект</Button>
            </p>
        </div>
    )
}