
import h from "../helper/helper.js"
import getTEXT from "../model/getTEXT.js"
import TextareaView from "../view/textareaView.js"
// já adicionado ao objeto window para as funções que não são arrow function
import SoundTrack from "../model/soundTrack.js"

class ControllerPrivate {
  static select = h.qs("#OS")
  static botaoCopiarTudo = h.qs("#botao_copiar_tudo")
  static botaoLimpar = h.qs("#botao_limpar")
  static botaoNovaAba = h.qs("#botao_nova_aba")
  static campoNome = h.qs("#campo_nome")
  static title = h.qs("title")

  static adicionarControllerSelect() {
    this.select.addEventListener("change", function() {
      const caminho = "data/" + this.value
      const response = getTEXT(caminho)
      TextareaView.substituirTexto(response)
      SoundTrack.mendokuseiPlay()
    })
  }

  static adicionarControllerBotaoCopiarTudo() {
    this.botaoCopiarTudo.addEventListener("click", () => {
      navigator.clipboard.writeText(TextareaView.pegarTexto())
      SoundTrack.yoPlay()
    })
  }

  static adicionarControllerBotaoLimpar() {
    this.botaoLimpar.addEventListener("click", () => {
      const caminho = "data/" + this.select.value
      const response = getTEXT(caminho)
      TextareaView.substituirTexto(response)
      SoundTrack.mendokuseiPlay()
    })
  }

  static adicionarControllerBotaoNovaAba() {
    this.botaoNovaAba.addEventListener("click", () => {
      window.open(document.URL, "_blank")
      SoundTrack.kagebunshinPlay()
    })
  }

  static adicionarControllerCampoNome() {
    this.campoNome.addEventListener("input", () => {
      this.title.textContent = this.campoNome.value
    })
  }
}

export default class Controller {

  static adicionarControllers() {
    ControllerPrivate.adicionarControllerSelect()
    ControllerPrivate.adicionarControllerBotaoCopiarTudo()
    ControllerPrivate.adicionarControllerBotaoLimpar()
    ControllerPrivate.adicionarControllerBotaoNovaAba()
    ControllerPrivate.adicionarControllerCampoNome()
  }

  static primeiraExecucao(primeiroElementoIndice) {
    const caminho = "data/" + primeiroElementoIndice
    const response = getTEXT(caminho)
    TextareaView.substituirTexto(response)
  }
}
