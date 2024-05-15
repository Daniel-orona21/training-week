import React from 'react'
import { UserInfo } from './UserInfo'


const ArraySample = [ 
    {
        name: 'Edgar',
        lastName: 'Maldonado',
    }, 
    {
        name: 'Juan',
        lastName: 'Perez',
    },
    {
        name: 'Maria',
        lastName: 'Gonzalez',
    }
]

export const User = () => {
   
  return (
    <>
        {ArraySample.map((user, index) => (
            <UserInfo key={`${user.name}-${index}`} name={user.name} lastName={user.lastName} age={32} />
        ))} 
    </>
  )
}
