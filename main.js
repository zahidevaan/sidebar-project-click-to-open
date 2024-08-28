document.addEventListener('DOMContentLoaded', function(){
    const flowers = document.querySelector('.flowers');
    const fromLeft = document.querySelector('#fromLeft');
    const fromTop = document.querySelector('#fromTop');
    const mainContent = document.querySelector('#mainContent');
    const fromTopContent = document.querySelector('#fromTopContent');
    const fromTopClose = document.querySelector('#fromTopClose');

    const fromLeftClose = document.querySelector('#fromLeftClose');
    const fromLeftContent = document.querySelector('.from-left-wrapper');

// Open the overlay
fromLeft.addEventListener('click', function(){
    mainContent.style.display = "none";
    flowers.style.display = "block";
    fromLeftContent.style.transform = "translateX(0)"; 
    onload(); 
});

// Close the overlay
fromLeftClose.addEventListener('click', function(){
    fromLeftContent.style.transform = "translateX(-100%)";
    document.getElementById('notLoaded').classList.add("not-loaded");
    mainContent.style.display = "flex";
    flowers.style.display = "none";
});

    fromTop.addEventListener('click', function(){
        mainContent.style.display = "none";
        flowers.style.display = "block";
        fromTopContent.style.transform = "translateY(0%)";
        onload(); 
    })

    fromTopClose.addEventListener('click', function(){
      fromTopContent.style.transform = "translateY(-100%)";
      document.getElementById('notLoaded').classList.add("not-loaded");
      mainContent.style.display = "flex";
        flowers.style.display = "none";
    })
    
    function onload() {
        const c = setTimeout(() => {
            document.getElementById('notLoaded').classList.remove("not-loaded");
          clearTimeout(c);
        }, 0);
      };
})
// onload = () =>