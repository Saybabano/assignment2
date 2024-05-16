// Task: CRUD Functionality
// Create a simple phone book application functionality using JavaScript objects. Your application should allow users to add new contacts, search for contacts by name, update existing contacts, and delete contacts.
// Implement the following functionalities:
// 1.Add a new contact:  Allow users to add a new contact by providing their name, phone number, and email address. 
// 2.Search for a contact: Allow users to search for a contact by entering their name. If the contact is found, display their details (name, phone number, email). If not found, display a message indicating that the contact does not exist.
// 3.Update a contact: Allow users to update the phone number and email address of an existing contact by providing their name and the updated information.
// 4.Delete a contact: Allow users to delete a contact by entering their name.
// Feel free to reach out if you have any questions.



let phoneBook = {};


let addContact=(name, phoneNumber, email,address)=> {
    phoneBook[name] = { phoneNumber, email ,address };
    console.log(`${name} added to the phone book.`);
}

let  searchContact=(name)=>{
    if (phoneBook[name]) {
        console.log(`Name: ${name}, Phone Number: ${phoneBook[name].phoneNumber}, Email: ${phoneBook[name].email},address:${phoneBook[name].address}`);
    } else {
        console.log(`${name} does not exist in the phone book.`);
    }
}

let updateContact=(name, newPhoneNumber, newEmail,newAddress)=>{
    if (phoneBook[name]) {
        phoneBook[name].phoneNumber = newPhoneNumber;
        phoneBook[name].email = newEmail;
        phoneBook[name].address = newAddress;
        console.log(`${name}'s contact information updated.`);
    } else {
        console.log(`${name} does not exist in the phone book.`);
    }
}

let deleteContact=(name)=> {
    if (phoneBook[name]) {
        delete phoneBook[name];
        console.log(`${name}'s contact deleted from the phone book.`);
    } else {
        console.log(`${name} does not exist in the phone book.`);
    }
}

addContact("sayba bano","931-504-6300","sayba22@navgurukul.org","Dehli");
searchContact("sayba bano");
updateContact("sayba bano","892-040-1553","saybabano231451@gmail.com","Bnaglor");
searchContact("sayba bano");
deleteContact("sayba bano");
searchContact("sayba bano");



