document.querySelector('#generate-names').addEventListener('submit', loadNames);

// Execute the function to query the API
function loadNames(e){
   e.preventDefault();


   //Read the values from the form and create variable
   const origin = document.getElementById('country').value;
   const genre = document.getElementById('gender').value;
   const numbers = document.getElementById('quantity').value;

   // Build the url
   let url = 'https://names.nnaemekanweke.com/api/?';

   //read the origin and append to the url
   if(origin !== '') {
      url += `region=${origin}&`;
   }

   //read the gender and append to the url
   if(genre !== '') {
      url += `gender=${genre}&`;
   }

   //read the amount and append to the url
   if(genre !== '') {
      url += `amount=${numbers}&`;
   }
   
    //Ajax call
    const xhr = new XMLHttpRequest();
    
    // Open the coonnection
    xhr.open('GET', url, true);

    //Execute the function
    xhr.onload = function() {
       if(this.status === 200) {
          const names = JSON.parse( this.responseText );
          console.log(names);

          //Insert into the html
          let html = '<h3 style="text-align:center;">Generated Names</h3>'; 
          html += '<ul class="list">';
             names.forEach(function(name){
                html += `
                   <li> ${name.name} &nbsp; ${name.surname}</li>
                `;
             });

          html += '</ul>';

          document.querySelector('#result').innerHTML = html;

       }
    }

    //Send the request 
    xhr.send();
}