
export default class SoundTrack {
  static mendokusei = new Audio("../../sound/mendokusei.mp3")
  static yo = new Audio("../../sound/yo.mp3")
  static kagebunshin = new Audio("../../sound/kagebunshin.mp3")

  static mendokuseiPlay(){
    this.mendokusei.play()
  }
  
  static yoPlay(){
    this.yo.play()
  }

  static kagebunshinPlay(){
    this.kagebunshin.play()
  }
}
