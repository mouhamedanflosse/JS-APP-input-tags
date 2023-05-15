let ul = document.querySelector("ul");
input = ul.querySelector("input");
let span = document.querySelector("span");
let btn = document.querySelector("button");
let maxtag = 10,
  tags = [];
//remove all the tags
btn.addEventListener("click", () => {
  ul.querySelectorAll("li").forEach((li) => {
    li.remove();
    tags.length = 0;
    remTags();
  });
});
//update remaining tags
function remTags() {
  input.focus();
  span.innerText = maxtag - tags.length;
}
remTags();
// update the tags
function addtags() {
  ul.querySelectorAll("li").forEach((li) => {
    li.remove();
  });
  tags.reverse().forEach((tag) => {
    let litag = `<li> ${tag} <i class="fa fa-multiply" onclick='remove(this, "${tag}")'></i></li>`;
    ul.insertAdjacentHTML("afterbegin", litag);
  });
  remTags();
}
//remove one tag after each action
function remove(element, tag) {
  let index = tags.indexOf(tag);
  tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
  console.log(element, tags);
  element.parentElement.remove();
  remTags();
}
// add a tag after every single  press of  Enter key
function addtag(e) {
  if (e.key === "Enter") {
    let Tag = e.target.value.replace(/\s+/g, " ");
    if (Tag.length > 1 && !tags.includes(Tag)) {
      if (Tag.endsWith(",")) {
        Tag = Tag.split("");
        Tag.pop();
        Tag = Tag.join("");
      }
      if (tags.length < 10) {
        Tag.split(",").forEach((Tag) => {
          tags.push(Tag);
          // window.localStorage.setItem("tag",JSON.stringify(tags));
          addtags();
          e.target.value = "";
        });
      }
    }
  }
}
input.addEventListener("keyup", addtag);
// let a = ["hi", "hi2"];
// window.localStorage.setItem("color",JSON.stringify(a))
// console.log(JSON.parse(window.localStorage.getItem("color"));
