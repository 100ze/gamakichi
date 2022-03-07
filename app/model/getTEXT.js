
export default function getTEXT(url, callback){
  const xhr = new XMLHttpRequest()
  let response = "";

  xhr.onload = () => {
    response = xhr.responseText  
  }

  xhr.open("GET", url, false)
  xhr.send()

  return response
}
