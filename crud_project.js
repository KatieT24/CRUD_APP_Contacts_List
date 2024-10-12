console.log("Week 12 CRUD Project...");

const API_ENDPOINT =
  "https://66e92ede87e417609448606c.mockapi.io/PromineoCRUDAPI/Contacts";
console.log(Response);

let contactsElement = document.getElementById("contacts");
console.log("Contacts Element:", contactsElement);

// contactsElement.textContent = "Hello There";
// contactsElement.style.color = "Red";

//NOTE -  the async function below will be the example i will turn to
// when i need to look for what to look at and put in the approprieate code.
//NOTE - async function getData()
//   try {
//     const response = await fetch(API_ENDPOINT);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     console.log("API GET DATA:", json);

//     // allows you to input custom html in js
//     contactsElement.innerHTML = `
//        <div>
//        test ${json[0].name}
//          <p id="my-p-tag">loremasgjglljkgldkjg;gdlg</p>
//          <div>
//            Hello

//          </div>

//          <!-- Bootstrap Card - begin -->
//          <div class="card" style="width: 18rem;">
//            <img src="..." class="card-img-top" alt="..." />
//            <div class="card-body">
//              <h5 class="card-title">Card title</h5>
//              <p class="card-text">
//                Some quick example text to build on the card title and make up the
//                bulk of the card's content.
//                  <button class="btn btn-warning" type="text">Click me</button>
//              </p>
//              <a href="#" class="btn btn-primary">Go somewhere</a>
//            </div>
//          </div>
//          <!-- Bootstrap Card - end -->
//        </div>
//      `;
//    } catch (error) {
//      console.error("Ahhhh an error has appeared!!!", error.message);
//    }
//  }

//  getData();

function createHTML(contacts) {
  return `<p>${contacts.name}</p>`;
}
function createHeader(title) {
  return `<h1>${title}</h1>`;
}
console.log("javascript is running correctly!");
document.body.innerHTML = `<h1>Test Content</h1>`;

async function getData() {
  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log("API GET DATA:", json);

    document.body.innerHTML = `
         ${createHeader("Contact List")}
         <div id = "contacts">
          ${json.map((contact) => createHTML(contact)).join(" ")}
          </div>
         
         
         
         
         
         `;
  } catch (error) {
    console.error("Error, Unable to fetch data", error.message);
    console.log(error);
  }
}

getData();
