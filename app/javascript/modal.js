function show(e){const t=document.querySelector("video"),n=e.parentElement.previousElementSibling;t&&t.pause(),"svg"==e.nextElementSibling?.nodeName?n.classList.add("modal-sm","active"):n.classList.add("modal-lg","active")}function hide(e){const t=document.querySelector("video"),n=e.closest(".modal");n.classList.remove("active"),t&&!t.ended&&t.play(),n.querySelector(".top")?.remove()}function validateSize(e,t){if(e.files[0]){const s=e.files[0].size/1024/1024,a=e.parentElement,l=[{transform:"translateX(0)",offset:0},{transform:"translateX(-12px)",offset:.2},{transform:"translateX(12px)",offset:.4},{transform:"translateX(12px)",offset:.6},{transform:"translateX(-12px)",offset:.8},{transform:"translateX(0)",offset:1}];s>t?(a.parentElement.classList.add("has-error"),e.animate(l,300),a.nextElementSibling&&a.nextElementSibling.remove(),e.value="",a.insertAdjacentHTML("afterend",`<p class='form-input-hint d-inline'>${n=e.id.split("_")[1],n.charAt(0).toUpperCase()+n.slice(1)} should be less than ${t}MB</p>`)):(a.nextElementSibling&&a.nextElementSibling.remove(),a.parentElement.classList.remove("has-error"))}var n}