import React from 'react'
import classNames from 'classnames/bind';
import styles from './Table.module.scss';

import User from '../../interfaces/users';

import {memo} from 'react';
interface TableProps{
  users:User[],
  page:number
}
const cx =classNames.bind(styles)

const Index:React.FC<TableProps> = ({users,page}:TableProps)=>{
    console.log('table')
    // const arr:User[] = 
      console.log(users.slice((page-1)*5,5*page))
      console.log(page)
    return <div className={cx('wrapper')}>
      
      <table className={cx('table')}>
          <tr>
            <th>ID</th>
            
            <th>Email</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
          {users.slice((page-1)*5,5*page).map(user=>{
              return <tr key={user.id}>
               <td>{user.id}</td>
              
               <td>{user.email}</td>
               <td>{user.username}</td>
               <td>
                 <button>a</button>
                 <button>a</button>
                 <button>a</button>
   
                 
                 </td>
             </tr>
          })}
{/*          
          <tbody>
            <td>2</td>
          
            <td>markotto@gmail.com</td>
            <td>Harjas Mahotra</td>
          </tbody>
          <tbody>
            <td>3</td>
          
            <td>markottododododooddooododododo@gmail.com</td>
            <td>Harjas Mahotra</td>


          </tbody>
          
           */}


      </table>
    </div>
}
export default Index;