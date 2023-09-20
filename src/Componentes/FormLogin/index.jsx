import Botao from "../Botao"
import CampoTexto from "../CampoTexto"



const FormLogin = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Faça seu Login</h2>


                <CampoTexto label="Nome de usuário" placeholder="nome.sobrenome" />
                
                <CampoTexto label="Senha" placeholder="Digite sua senha" />
                
                <div className='containerbotao'>
                <Botao texto="Cancelar" />
                <Botao texto="Login" />
                </div>

            </form>
        </section>

    )
}
export default FormLogin