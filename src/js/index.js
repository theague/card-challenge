/***
 *
 *  CARD JSON CHALLENGE
 *
 *  Use the knowledge from previous lessons in order to read
 *  the files from users.json in order to create a markup similar
 *  to what we had before. For this challenge You MUST USE promises.
 *  I have left the notes from our previous call.
 */

// How would this work with more than one card?

// 1. Define a basic template
// 2. Interpolate dynamic data

// This is a function that takes as a parameter an object with user data and
// returns a string with the html and data interpolated.
const renderCardTemplate = ({
  city,
  name,
  src = 'http://place-puppy.com/200x200',
  state,
  street,
  suite,
  username,
  zipcode,
}) => `<div id="card">
<div id="imgBox">
<img src="${src}" alt="a puppy photo">
</div>
<div id="content">
    <ul>
        <li id="username">@${username}</li>
        <li id="name">${name}</li>
        <li id="address1">${street}</li>
        <li id="address2">${city}, ${state} ${zipcode}</li>
    </ul>
</div>
</div>
`;




// 3. Create a template for each user in usersArray
usersArray.forEach(({
  address: {
    street,
    city,
    state,
    zipcode,
  },
  name,
  username,
}) => {

const cardTemplate = renderCardTemplate({
    city,
    name,
    state,
    street,
    username,
    zipcode,
  });

  // Create a new list item
  const cardNodeElement = document.createElement("LI");
  cardNodeElement.innerHTML = cardTemplate;
  //4. Add list item to card-list in the DOM.
  document.getElementsByClassName('card-list')[0].appendChild(cardNodeElement);

});


// 1. For each a function takes in as a parameter user from users array
// 2. within the foreach function, we are calling renderCardTemplate
// 3. renderCarTemplate is returning a string
// 4. template is string is being appended to .card-list
