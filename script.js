const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
const show = document.querySelector(".show");
const passwordInput = document.getElementById("password");

generateButton.onclick = function generatePassword(){

  const character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_";
  const pwdLength = 16;
  let password = "";
