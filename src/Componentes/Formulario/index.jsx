import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'


const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencher dados de cadastro</h2>
                <CampoTexto label="Nome" placeholder="Digite seu Nome" />
                <CampoTexto label="Nome de usuário" placeholder="nome.sobrenome" />
                <CampoTexto label="E-mail" placeholder="Digite seu E-Mail" />
                <CampoTexto label="Senha" placeholder="Digite sua senha" />
                <CampoTexto label="Confirmar senha" placeholder="Confirme sua senha" />
                <div className='containerbotao'>
                <Botao texto="Cancelar" />
                <Botao texto="Cadastrar" />
                </div>

            </form>
        </section>

    )
}
export default Formulario