const strikeThroughFirstLi = () => {
  const firstLi = document.querySelector('ul li:first-child')
  firstLi.style.textDecoration = 'line-through';
}

strikeThroughFirstLi()

const imageSource = (id, url) => {
  const imageLocation = document.querySelector("#" + id);
  imageLocation.src = url;
  imageLocation.style.height = "250px"
}

imageSource("image-1", "./panda.jpg")
imageSource("image-2", "./monkey.jpg")
imageSource("image-3", "./owl.jpg")

const removeLast = () => {
  const child = document.querySelector("#arguments li:last-child")
  child.remove()
}

removeLast()
removeLast()

addElement = (element) => {
  document.querySelector("#arguments").appendChild(element);
}
addElement(document.createElement("img"))

const imgHeight = (img) => {
  img.style.height = ("30px")
}
const pic = document.querySelector("#image-3")
imgHeight(pic)

const deleteElement = (ele) => {
  const byeBye = document.querySelector(ele)
  byeBye.className = "invisible"
}
deleteElement("#image-2")

const fontSize = (size, id) => {
  document.querySelector(id).style.fontSize = size
}
fontSize("9em", "#lorem")




