


const frontCover = document.getElementById("front-cover");

const pages = document.querySelectorAll(".page");




let currentPage = 0;

let isAnimating = false;

let bookOpen = false;



pages.forEach((page, index) => {

    page.style.zIndex = pages.length - index;

});




frontCover.addEventListener("click", function() {

    if (isAnimating || bookOpen) return;

    isAnimating = true;

    bookOpen = true;

    frontCover.classList.add("opened");

    setTimeout(() => {

        frontCover.style.zIndex = 0;

        isAnimating = false;

    }, 1000);

});




pages.forEach((page, index) => {

    page.addEventListener("click", function() {

        // Book must be open
        if (!bookOpen) return;

        // Prevent overlapping animations
        if (isAnimating) return;


        // FORWARD

        if (!page.classList.contains("flipped")) {

            // Only turn the current page
            if (index !== currentPage) return;

            isAnimating = true;

            page.classList.add("flipped");

            page.style.zIndex = index + 1;

            currentPage++;

        }


        // BACKWARD

        else {

            // Only turn the previous page backwards
            if (index !== currentPage - 1) return;

            isAnimating = true;

            page.classList.remove("flipped");

            page.style.zIndex = pages.length - index;

            currentPage--;

        }


        // FINISH ANIMATION

        setTimeout(() => {

            isAnimating = false;

        }, 1000);

    });

});







