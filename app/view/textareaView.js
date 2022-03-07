
import h from "../helper/helper.js"

export default class TextareaView {
  static textarea = h.qs("#campo_de_texto")

  static limparTexto() {
    this.textarea.value = ""
  }
  static pegarTexto(){
    return this.textarea.value
  }
  static inserirTexto(texto) {
    this.textarea.value = this.pegarTexto() + texto
  }
  static substituirTexto(texto){
    this.textarea.value = texto
  }
}
