const form = document.getElementById("shows-page");

const shows =[
    {
        date: 'Date', //Dates title/ exact time
        exactDate: 'Mon Set 06 2021',

        venue: 'Venue', //Venue title/ exact venue
        exactVenue: 'Ronald Lane',

        location: 'Location',   //Location title/ exact location
        exactLocation: 'San Francisco, CA',

        button: 'BUY TICKETS', //Buy tickets button
    },
    {

        date: 'Date', //Dates title/ exact time
        exactDate: 'Tue Sept 21 2021',

        venue: 'Venue', //Venue title/ exact venue
        exactVenue: 'Pier 3 East',

        location: 'Location',   //Location title/ exact location
        exactLocation: 'San Francisco, CA',

        button: 'BUY TICKETS', //Buy tickets button
    },
    {
        date: 'Date', //Dates title/ exact time
        exactDate: 'Fri Oct 15 2021',

        venue: 'Venue', //Venue title/ exact venue
        exactVenue: 'View Lounge',

        location: 'Location',   //Location title/ exact location
        exactLocation: 'San Francisco, CA',

        button: 'BUY TICKETS', //Buy tickets button
    },
    {
        date: 'Date', //Dates title/ exact time
        exactDate: 'Sat Nov 06 2021',

        venue: 'Venue', //Venue title/ exact venue
        exactVenue: 'Hyatt Agency',

        location: 'Location',   //Location title/ exact location
        exactLocation: 'San Francisco, CA',

        button: 'BUY TICKETS', //Buy tickets button
    },
    {
        date: 'Date', //Dates title/ exact time
        exactDate: 'Fri Nov 26 2021',

        venue: 'Venue', //Venue title/ exact venue
        exactVenue: 'Moscow Center',

        location: 'Location',   //Location title/ exact location
        exactLocation: 'San Francisco, CA',

        button: 'BUY TICKETS', //Buy tickets button
    },
    {
        date: 'Date', //Dates title/ exact time
        exactDate: 'Wed Dec 15 2021',

        venue: 'Venue', //Venue title/ exact venue
        exactVenue: 'Press Club',

        location: 'Location',   //Location title/ exact location
        exactLocation: 'San Francisco, CA',

        button: 'BUY TICKETS', //Buy tickets button
    },
]

function display(){
    for (let i=0; i<shows.length; i++){

    // Date / ExactDate
      const date = document.createElement('p');
      const exactDate = document.createElement('p');

      date.classList.add('shows-date');
      date.innerText = shows[i].date;

      exactDate.classList.add('shows-exactDate');
      exactDate.innerText = shows[i].exactDate;

      form.appendChild(date);
      form.appendChild(exactDate);

    //  Venue / Exact Venue 
      const venue = document.createElement('p');
      const exactVenue = document.createElement('p');

      venue.classList.add('shows-venue');
      venue.innerText = shows[i].venue;

      exactVenue.classList.add('shows-exactVenue');
      exactVenue.innerText = shows[i].exactVenue;

      form.appendChild(venue);
      form.appendChild(exactVenue);

      // Location // Exact Location

      const location = document.createElement('p');
      const exactLocation = document.createElement('p');

      location.classList.add('shows-location'); 
      location.innerText = shows[i].location;

      exactLocation.classList.add('shows-exactLocation');
      exactLocation.innerText = shows[i].exactLocation;

      form.appendChild(location);
      form.appendChild(exactLocation);

      // Button

      const btn = document.createElement('button');
      
      btn.classList.add('shows-btn');
      btn.innerText = shows[i].button;

      form.appendChild(btn);
  

      // Lines-between sections

      const lines = document.createElement('hr');
      lines.classList.add('shows-lines');
      form.appendChild(lines);
    }
}



display();
