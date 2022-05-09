import { useHistory } from 'react-router-dom'
import './styles.css'

import Logo from '../assets/logo.jpg'
import { Button } from 'antd';


export default function Inicio(){

    const history = useHistory();

    async function listarProdutos() {
        history.push('/produtos')
    }

    

    return (
        <div className='inicio__container'>
            <section>
               <img src={Logo} alt='logo' className='center img' />
                <br />
                <Button onClick={listarProdutos} className='center button' type='primary' >Ver Produtos</Button>
            </section>
        </div>
    )
}