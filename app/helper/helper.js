
export default class Helper {
  static c(objeto){
    console.log(objeto)
  }

  static qs(seletor){
    return document.querySelector(seletor)
  }

  static qsa(seletor){
    return document.querySelectorAll(seletor)
  }

  static ce(tag){
    return document.createElement(tag)
  }
}
