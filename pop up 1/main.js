document.getElementById("open-modal-pop-up").addEventListener("click",function(){
       document.getElementById("my-modal").classList.add("open");
});

// Close modal

document.getElementById("btn-close").addEventListener("click",function(){
    document.getElementById("my-modal").classList.remove("open");
});