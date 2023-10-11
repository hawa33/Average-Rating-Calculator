/*
#######################################################
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const averageSpan= document.getElementById('average');
    let ratings=[];
    stars.forEach (star => {
        star.addEventListener ('click', () => {
            const rating = parseInt (star.getAttribute('data-rating'));
            ratings.push(rating);
            const averageRating = calculateAverage(ratings);
            averageSpan.textContent= averageRating.toFixed(1);
            markActiveStars(rating);
        });
    });

    function calculateAverage(ratings){
        const total = ratings.reduce((acc, curr) => acc + curr , 0);
        return total/rating.length;
    }
   function markActiveStars(rating){
    stars.forEach (star => {
        const   starRating = praseInt(star.getAttribute('data-rating'));
        if(starRating <= rating){
            star.classList.add('active');
        } else{
            star.classList.remove('active');
        }
    })
   }
})




###############################################################################################################




/*document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const averageSpan= document.getElementById('average');
    let ratings=[];
    stars.forEach (star => {
        star.addEventListener ('click', () => {
            const rating = parseInt (star.getAttribute('data-rating'));
            ratings.push(rating);
            const averageRating= rating.reduce((acc,curr)) => acc+ curr, 0)/ratings.length;
            averageSpan.textContent =averageRating.toFixed(1);
            stars.forEach(s=> s.classList.toggle('active' , praseInt(s.getAttribute))<=rating));

        });
    });
});        



#################################################################################################################333

/*
document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    const averageSpan = document.getElementById('average');
    let userRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.getAttribute('data-rating'));
            userRating = rating;
            displayRating();
        });
    });

    function displayRating() {
        averageSpan.textContent = userRating;
        stars.forEach(star => {
            const rating = parseInt(star.getAttribute('data-rating'));
            star.classList.toggle('active', rating <= userRating);
        });
    }
});

*/



document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    const averageSpan = document.getElementById('average');
    const userRatings = [];

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.getAttribute('data-rating'));
            userRatings.push(rating);
            calculateAverageRating();
        });
    });

    function calculateAverageRating() {
        if (userRatings.length === 0) {
            averageSpan.textContent = '0';
            return;
        }
        const sum = userRatings.reduce((acc, curr) => acc + curr, 0);
        const average = sum / userRatings.length;
        averageSpan.textContent = average.toFixed(1);
    }
});
