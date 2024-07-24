import React from 'react'
import People from './People'
import people from '../datas/people'


export const PeopleListContainer = () => {
  return (
    <ul className='px-10 py-4 mx-auto border divide-y divide-gray-200 shadow-md rounded-xl w-80'>
      {
        people.map((person, key) => {
          return <People key={key} person={person}/>
        })
      }
    </ul>
  )
}
