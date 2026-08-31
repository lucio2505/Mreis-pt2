import './Contato.css'
import { useState } from 'react'

function Contato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [servico, setServico] = useState('')
  const [descricao, setDescricao] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()

      const mensagem = `
    Novo contato pelo site MREIS

    Nome: ${nome}
    Telefone: ${telefone}
    E-mail: ${email}
    Serviço: ${servico}
    Descrição: ${descricao}
  `

  const mensagemFormatada = encodeURIComponent(mensagem)

  const numeroWhatsApp = '5511969548619'

  const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemFormatada}`

  window.open(url, '_blank')
}
  return (
    <main className="contato">
      <h1>Contato</h1>

      <section className="contato-content">
        <p>
          Preencha seus dados e informe o serviço de interesse.
          Entraremos em contato com você.
        </p>

        <form className="contato-form"onSubmit={handleSubmit}>
          <label>
            Nome
            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              required
            />
          </label>

          <label>
            E-mail
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>

          <label>
            Telefone
            <input
              type="tel"
              placeholder="Digite seu telefone"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
            />
          </label>

          <label>
                Serviço
                <select
                  value={servico}
                  onChange={(event) => setServico(event.target.value)}
                  required
                >
                  <option value="" disabled>
                    Selecione um serviço
                  </option>

                  <option value="fotografia">Fotografia</option>
                  <option value="marketing">Marketing</option>
                  <option value="trafego-pago">Tráfego Pago</option>
                </select>
          </label>
          <label>
            Descrição

            <textarea
              placeholder="Descreva brevemente o que você precisa"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
              required
            />
          </label>

          <div className="contato-actions">
            <button type="submit">
              Enviar
            </button>

            <button type="button">
              WhatsApp
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Contato