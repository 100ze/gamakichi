
import h from "../helper/helper.js"

class SoundTrackPrivate {
  static githubAddress = "https://raw.githubusercontent.com/100ze/gamakichi/main/"

  static async musicFech(partialAddress){
    const response = await fetch(this.githubAddress + partialAddress)
    return response.blob()
  }

  static async getSongs(){
  }
}

export default class SoundTrack {

  static mendokuseiPlay(){
    SoundTrackPrivate.mendokusei.play()
  }
  
  static yoPlay(){
    SoundTrackPrivate.yo.play()
  }

  static kagebunshinPlay(){
    SoundTrackPrivate.kagebunshin.play()
  }

  static async load(callback){
    const mendo = await SoundTrackPrivate.musicFech("sound/mendokusei.mp3")
    h.c(mendo)
  }
}
