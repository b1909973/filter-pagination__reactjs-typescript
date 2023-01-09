import classNames  from 'classnames/bind';

import Table from '../../components/Table';
import Header from '../../components/Header';
import styles from './Home.module.scss';

import {useEffect, useState,useCallback} from 'react';
import Users from '../../User';
import User from '../../interfaces/users';

const cx = classNames.bind(styles)
const Home:React.FC =()=>{
        const [pagination,setPagination] = useState<number>(1);

        
        const [search,setSearch] = useState<string>('');
        
        const [users,setUsers]= useState<User[] >([]);
     

                useEffect(()=>{
                        setUsers(Users)
                },[])

                // const listSearch = ()=>
                const handleSearch:(e:React.ChangeEvent<HTMLInputElement>)=>void=(e)=>{
                       setPagination(1)
                        setSearch(e.target.value)

                      
        }
        const filterUsers :(search:string)=>User[]
        
        = (search:string)=>{
                console.log('aaaa')
                        if(search){

                               return users.filter(user=>{
                                return  user.username.toLowerCase().includes(search.toLowerCase())
                          });


                        }
                        return users;
                   
        }

        const handlerPagination:(num:number)=>void=(num:number)=>{
                // console.log(num)
                setPagination(num)



        }  


      const numberPagination:(num:number)=>number[] =(num:number)=>{
                const arr:number[]=[1];
                let i=1;
                        while (num>5) {
                                arr.push(++i)
                                num-=5;

                        }

                        return arr;

     

     }

        return <div>
                  <Header name="Home" />
                        <div className={cx('wrapper')}>

                                <div className={cx('inner')}>
                                        <h1>
                                                Reactjs Crud Tutorial
                                        </h1>
                                        <div className={cx('show-search')}>
                                                <div className={cx('show')}>
                                                        <label htmlFor=""> Show </label>
                                                               <select name="" id="">
                                                                        <option value="1">1</option>
                                                                        <option value="1">1</option>
                                                                        <option value="1">1</option>

                                                                 </select>
                                                                <span> Entries</span>
                                                </div>
                                                <div className={cx('search')}>
                                                        <label htmlFor="">Search: </label>
                                                        <input type="text"  value={search} onChange={(e)=>handleSearch(e)}/>

                                                </div>
                                        </div>
                                        <Table users={filterUsers(search)} page={pagination} />
                                         
                                        <div className={cx("pagination")}>
                                                        <div className={cx('show-number')}>
                                                        Showing 1 to 5 of entries
                                                        </div>
                                                        <div className={cx('stran-number')}>
                                                                <button className={cx('button-stran')}>
                                                                        Previous
                                                                </button>
                                                              {numberPagination(users.length).map((num,i)=>    <button className={cx('button-number',{active:pagination==num})}  key={num} onClick={()=>handlerPagination(num)}>{num}</button> )} 
                                                             
                                                                <button  className={cx('button-stran')}>
                                                                        Next
                                                                </button>
                                                        </div>
                                        </div>
                                </div>
                                



  
                        </div>
                       
        </div>

}

export default Home;