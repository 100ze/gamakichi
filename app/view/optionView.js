
import h from "../helper/helper.js"

export default class OptionView {
  static select = h.qs("#OS")

  static adicionarOption(texto, valor){
    const option = h.ce("option")
    option.textContent = texto
    option.setAttribute("value", valor)
    
    this.select.appendChild(option)
  }
}
