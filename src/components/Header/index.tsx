import classNames from 'classnames/bind'

import styles from './Header.module.scss'
const cx = classNames.bind(styles)

const ListNav:string[]=[
        'Home',
        'About',
]

interface HeaderProps{
    name:string

}


const Header:React.FC<HeaderProps>=({name}:HeaderProps)=> {
    return ( 
            <header className={cx('wrapper')}>
                <ul> {ListNav.map((nav,i)=>{
                                   return <li key={i} className={cx({active:nav==name})} >{nav}</li>;     

                        })}        </ul>
                       
            </header>

     );
}

export default Header;