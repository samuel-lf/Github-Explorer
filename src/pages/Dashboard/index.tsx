import React from 'react'
import { FiChevronRight } from "react-icons/fi";
import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="/">
          <img
            src="https://avatars1.githubusercontent.com/u/36999289?s=460&u=d559d9ec7182bc35c1e3116a7538de40dac6e472&v=4"
            alt="Samuel Leonel"/>
          <div>
            <strong>samuel-lf/ecoleta</strong>
            <p>Projeto Open Source desenvolvido na Next Level Week 1.0 da Rocketseat utilizando TypeScript, Node, React e React Native</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars1.githubusercontent.com/u/36999289?s=460&u=d559d9ec7182bc35c1e3116a7538de40dac6e472&v=4"
            alt="Samuel Leonel"/>
          <div>
            <strong>samuel-lf/ecoleta</strong>
            <p>Projeto Open Source desenvolvido na Next Level Week 1.0 da Rocketseat utilizando TypeScript, Node, React e React Native</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars1.githubusercontent.com/u/36999289?s=460&u=d559d9ec7182bc35c1e3116a7538de40dac6e472&v=4"
            alt="Samuel Leonel"/>
          <div>
            <strong>samuel-lf/ecoleta</strong>
            <p>Projeto Open Source desenvolvido na Next Level Week 1.0 da Rocketseat utilizando TypeScript, Node, React e React Native</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;
