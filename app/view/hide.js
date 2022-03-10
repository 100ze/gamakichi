
import h from "../helper/helper.js"

const body = h.qs("body")

export default function hide(hide){
  if (hide) {
    body.classList.add("hide")
  } else {
    body.classList.remove("hide")
  }
}
