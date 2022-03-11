
import h from "../helper/helper.js"

class SoundTrackPrivate {
  static githubAddress = "https://raw.githubusercontent.com/100ze/gamakichi/main/"

  static async musicFech(partialAddress){
    const musicBlob = await fetch(this.githubAddress + partialAddress).then((response) => {
      return response
    }).then((response) =>{
      return response.blob()
    })

    return new Audio(URL.createObjectURL(musicBlob)) 
  }
}

export default class SoundTrack {

  static yo = {}
  static mendokusei = {}
  static kagebunshin = {}

  static mendokuseiPlay(){
    this.mendokusei.play()
  }
  
  static yoPlay(){
    this.yo.play()
  }

  static kagebunshinPlay(){
    this.kagebunshin.play()
  }

  static async load(callback){
    this.yo = await SoundTrackPrivate.musicFech("sound/yo.mp3")
    this.mendokusei = await SoundTrackPrivate.musicFech("sound/mendokusei.mp3")
    this.kagebunshin = await SoundTrackPrivate.musicFech("sound/kagebunshin.mp3")

    h.c("musicas carregadas com sucesso")

    callback()
  }
}
