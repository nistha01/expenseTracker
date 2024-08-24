
// function handleFormSubmit(event){
//     event.preventDefault();
  
//   const listNode=document.getElementById('userList');
//     const Name=event.target.username.value;
//      const li = document.createElement('li');
//     const textNode = document.createTextNode(Name);
//     li.appendChild(textNode);
//     listNode.appendChild(li);


function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");

    // Get the list node and form input values
    const listNode = document.querySelector('ul');
    const amount = document.getElementById('amnt').value;
    const description = document.getElementById('desc').value;
    const category = document.getElementById('ctg').value;

    // Create a new list item
    const li = document.createElement('li');

    // Create text nodes with the input values
    const textNode1 = document.createTextNode("Amount: " + amount+"  ");
    const textNode2 = document.createTextNode("Description: " +description +"  " );
    const textNode3 = document.createTextNode("Category: " + category +"  ");

    // Append the text nodes to the list item
    li.appendChild(textNode1);
    li.appendChild(textNode2);
    li.appendChild(textNode3);

    // Create and configure the delete button
    const btn = document.createElement('button');
    btn.addEventListener('click', function() {
        listNode.removeChild(li);
    });
    btn.textContent = 'Delete';

    // Append the delete button to the list item
    li.appendChild(btn);

    // Append the new list item to the list
    listNode.appendChild(li);

    // Create an object with the input values and save it to localStorage
    let myObj = {
        amount: amount,
        description: description,
        category: category
    };
    console.log(myObj);
    localStorage.setItem("User Details", JSON.stringify(myObj));

    // Optionally clear the form fields after submission
    event.target.reset();
}

// export default handleFormSubmit;





// function handleFormSubmit(event){
//     event.preventDefault();
  
//     const listNode = document.querySelector('ul');
//     const Name = document.getElementById('username').value;
//     const email1 = document.getElementById('email').value;
//     const num = document.getElementById('phone').value;
    
  
//     const li1 = document.createElement('li');
//     const textNode = document.createTextNode(Name + " ");
//     const textNode2 = document.createTextNode(email1 + " ");
//     const textNode3 = document.createTextNode(num + " ");
    
    
//     li1.appendChild(textNode);
//     li1.appendChild(textNode2);
//     li1.appendChild(textNode3);
    

//     const btnn = document.createElement('button');
//     btnn.addEventListener('click', function() {
//       listNode.removeChild(li1);  
//   });
//     btnn.textContent = 'Delete'; 
//     li1.appendChild(btnn);
    
    
//     listNode.appendChild(li1);
    

  
    
  
    
    
//      let myObj={
//        username:event.target.username.value,
//        email:event.target.email.value,
//       phone:event.target.phone.value,
//      }
//     console.log(myObj)
//     localStorage.setItem("User Details",JSON.stringify(myObj));
//   }
  
//   module.exports= handleFormSubmit;