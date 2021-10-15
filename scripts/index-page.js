const form = document.getElementById("order-form");

const comments = [
    {
      name: 'Connor Walton',
      date: '02/17/2021',
      comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
    },
    {
        name: 'Emilie Beach',
        date: '01/09/2021',
        comment: 'I feel blessed to have see nthem in person. What a show! They wre just perfection. If there was one day of my life i Could relive, this would be it. What an incredible day.',
    },
    {
        name: 'Miles Acosta',
        date: '12/20/2020',
        comment: "I can't stop listerning. Every time i hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough. ",
    },
];

const commentListElem = document.getElementById('shows-comments');

function listComments(){
    for(let i=0; i<comments.length; i++){
        const commentElem = document.createElement('a');
        const textElem = document.createElement('li'); 
        const dateElem = document.createElement('a');

        console.log(dateElem);
        console.log(textElem);
        console.log(commentElem);

        textElem.innerText = comments[i].comment;
        commentElem.innerText = comments[i].name;
        dateElem.innerText = comments[i].date; 

        commentListElem.appendChild(commentElem);
        commentListElem.appendChild(dateElem);
        commentListElem.appendChild(textElem);
    
    }
}

listComments();





















let name; 

form.addEventListener("Submit", function(event) {
    event.preventDefault();

    // name = event.target.name.value

    if(event.target.name.value.includes('@')) {
        alert('not a valid name');
    } else if (event.target.name.value.includes('.')) {
        alert('not a valid name');
    }


    console.log(event.target.name.value);
    console.log(event.target.address.value);
    form.reset();
});