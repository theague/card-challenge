/*
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
  src = "http://place-puppy.com/200x200",
  state,
  street,
  username,
  zipcode,
}) => `
<div class="card">
<div class="imgBox">
<img src="${src}" alt="a puppy photo">
</div>
<div class="content">
    <ul>
        <li class="username">@${username}</li>
        <li class="name">${name}</li>
        <li class="address1">${street}</li>
        <li class="address2">${city}, ${state} ${zipcode}</li>
    </ul>
</div>
</div>
`;

// 3. Create a template for each user in usersArray

fetch("js/users.json")
  .then(resp => resp.json())
  .then(data => {console.log(data[0])

    data.forEach(({
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

        // Create a new list item
        const cardNodeElement = document.createElement("LI");
        cardNodeElement.innerHTML = cardTemplate;

        //4. Add list item to card-list in the DOM.
        document
          .getElementsByClassName("card-list")[0]
          .appendChild(cardNodeElement);
      }
    );
  });
