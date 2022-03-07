
export default class SoundTrack {
  static githubAddress = "https://raw.githubusercontent.com/100ze/gamakichi/main/"
  static mendokusei = new Audio(this.githubAddress + "sound/mendokusei.mp3")
  static yo = new Audio(this.githubAddress + "sound/yo.mp3")
  static kagebunshin = new Audio(this.githubAddress + "sound/kagebunshin.mp3")

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
