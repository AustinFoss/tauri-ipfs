import { invoke } from "@tauri-apps/api/tauri";
import { IPFS, create } from "ipfs"

let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;

async function greet() {
  if (greetMsgEl && greetInputEl) {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    greetMsgEl.textContent = await invoke("greet", {
      name: greetInputEl.value,
    });
  }
}

async function initIpfs() {
  
  let node: IPFS
  try {
    node = await create()    
    console.log(node);
  } catch(err) {
    console.log(err);    
    return
  }
  
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document
    .querySelector("#greet-button")
    ?.addEventListener("click", () => greet());
  document
    .querySelector("#initIpfs-button")
    ?.addEventListener("click", () => initIpfs());
});
