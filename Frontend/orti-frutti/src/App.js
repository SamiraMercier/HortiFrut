import './App.css';
import { Button, Menu } from 'antd'
import {PlusOutlined, UnorderedListOutlined, HomeOutlined} from '@ant-design/icons'
import { useHistory, } from 'react-router-dom'
import Routes from './routes'
import {Layout} from 'antd'
const {Header, Footer, Sider, Content} = Layout;


function App() {
  let history = useHistory();

  function handleClick() {
    history.push("/adicionar")
  }
  return (
    <div className="main">
      <Layout className='main__content'>
      <Header className='header'>HortiFrut</Header>
      <Layout>
        <Sider className='menu'>
        <Menu className='menu__section'>
        <Menu.Item key={1} icon={<HomeOutlined />} onClick={() => history.push('/')}>
              Home
            </Menu.Item>
              <Menu.Item key={2} icon={<PlusOutlined/>} onClick={handleClick} >
                Adicionar Produto
              </Menu.Item>
              <Menu.Item key={3} icon={<UnorderedListOutlined />} onClick={()=> history.push('/produtos')} >
                Listar Produtos
              </Menu.Item>
            </Menu>
        </Sider>
        <Content className='content'>
        <Routes/>
        </Content>
      </Layout>
      <Footer className='footer'>Todos os direitos reservados</Footer>
    </Layout>

    </div>
  );
}

export default App;
