//Could not post comments

// const commentSection = document.getElementById("shows-comments");


// const apiUrlComments = `https://project-1-api.herokuapp.com/comments?api_key=228c1608b6-4e2f-42ca-a9f8-6cb9fa7bb936`;
// const apiUrlDates = `https://project-1-api.herokuapp.com/showdates?api_key=%228c1608b6-4e2f-42ca-a9f8-6cb9fa7bb936%22`;

// form.addEventListener('submit', getComments);

// function getComments() {
//     axios
//         .get(`${apiUrlComments}/comments`)
//         .then((response)=>{
//             console.log('commets data', response);
    
//             const userComments = response.data.sort(
//                 (a,b) => new Date(b.timestamp) - new Date(a.timestamp)
//             );
    
//             commentSection.innerHTML = '';

//             userComments.forEach((comment) =>{
//                 const commentsBox = document.createElement('li');
//                 const commentsName = document.createElement('p');

//                 commentsName.innerText = comment.name;
//                 commentsName.classList.add('shows-comments__name');

//                 const commentsTimestamp = document.createElement('p');

//                 commentsTimestamp.innerText = new Date(Date).toLocaleDateString();
//                 commentsTimestamp.classList.add('shows-comments__date');

//                 const commentsComment = document.createElement('p');

//                 commentsComment.innerText = comment.comment;
//                 commentsComment.classList.add('shows-comments__text');

               
//                commentSection.appendChild(commentsBox);

//                commentsBox.appendChild(commentsName);
//                commentsBox.appendChild(commentsTimestamp);
//                commentsBox.appendChild(commentsComment);
//             });
    
//         })
//         .catch(()=>{
//             console.log('error getting data from API');
//         });

// }

// //get new comments

// function handleNewComments(event) {
//     event.preventDefault();
//     //create new comment object
//     const newComment = {
//         name: event.target.name.value,
//         comment: event.target.text.value,
//     };
//     //post new joke
//     axios
//         .post(`${apiUrlComments}/comments?api_key=228c1608b6-4e2f-42ca-a9f8-6cb9fa7bb936`, newComment)
//         .then((response) => {
//             console.log(response);
//             getComments();
 
//         })
//         .catch(() => console.log('error posint to api'));
//         event.target.reset();
 
// }

// //start app

// function init() {
//     getComments();
// }

// init();
const form = document.getElementById("shows-form");

const comments = [
    {
      name: 'Connor Walton',
      date: '02/17/2021',
      comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
      img: './assets/Images/Mohan-muruge.jpg',

    },
    {
        name: 'Emilie Beach',
        date: '01/09/2021',
        comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life i could relive, this would be it. What an incredible day.',
        img: './assets/Images/Mohan-muruge.jpg',
    },
    {
        name: 'Miles Acosta',
        date: '12/20/2020',
        comment: "I can't stop listerning. Every time i hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        img: './assets/Images/Mohan-muruge.jpg',
    },
];

function displayComment(){
    for (let i=0; i<comments.length; i++){
        //Create ELEMENT
        const commentsName = document.createElement('p');
        const commentsDate = document.createElement('p');
        const commentsText = document.createElement('p');
        //container for elements
        const commentsContainer = document.createElement('container');

        commentsContainer.classList.add('shows-comments');


        commentsName.classList.add('shows-comments__name');
        commentsDate.classList.add('shows-comments__date');
        commentsText.classList.add('shows-comments__text');
        //create hr element 
        const commentsLine = document.createElement('hr'); 
        commentsLine.classList.add('shows-comments__line');

        //img element
        const commentsImg = document.createElement('img'); 
        commentsImg.classList.add('shows-comments__img');

        commentsImg.setAttribute('src', comments[i].img);
      
        // commentsImg.setAttribute('alt' = comments[i].img);

       

       
        commentsName.innerText = comments[i].name;
        commentsDate.innerText = comments[i].date;
        commentsText.innerText = comments[i].comment;


     
       
        form.appendChild(commentsContainer);
        form.appendChild(commentsName);
        form.appendChild(commentsDate);
        form.appendChild(commentsText);
        commentsText.appendChild(commentsLine);
        commentsContainer.appendChild(commentsLine);
        commentsContainer.appendChild(commentsImg);

    }
}

displayComment();







form.addEventListener("Submit", function(event) {
    event.preventDefault();


    if(event.target.name.value.includes('@')) {
        alert('not a valid name');
    } else if (event.target.name.value.includes('.')) {
        alert('not a valid name');
    }

    

    console.log(event.target.name.value);
    console.log(event.target.text.value);
    form.reset();
});