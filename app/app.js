
import h from "./helper/helper.js"
import getTEXT from "./model/getTEXT.js"
import hide from "./view/hide.js"
import OptionView from "./view/optionView.js"
import Controller from "./controller/controller.js"
import SoundTrack from "./model/soundTrack.js"

// adicionar ao objeto window para que possa ser acessado mesmo em funções
// que não são arrow functions
window.SoundTrack = SoundTrack

window.hide = hide

hide(false)

const indice = JSON.parse(getTEXT("data/indice.json"))

indice.indice.forEach((value) => {
  OptionView.adicionarOption(value, value)
})

Controller.adicionarControllers()
Controller.primeiraExecucao(indice.indice[0])
