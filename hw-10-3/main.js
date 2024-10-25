const contactCards = {
    contacts: [
        {name: 'Dmytro', phone: '123456789', email: 'dima@homework.com'},
        {name: 'Vasyl', phone: '123456788', email: 'vasya@homework.com'},
        {name: 'Liubov', phone: '123456888', email: 'liubov@homework.com'},
        {name: 'Mariia', phone: '111456789', email: 'maiiia@homework.com'},
        {name: 'Alexey', phone: '123666789', email: 'lesha@homework.com'},
    ],


    getContactByName(name) {
        const contact = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        return contact ? contact : `Contact doesn't exist, want to add?`;
    },

    addContact(name, phone, email) {
        const newContact = { name, phone, email };
        this.contacts.push(newContact);
        console.log(`${name} added to contacts`);
    },
};

contactCards.addContact('Ivan', '125556789', 'vanya@homework.com');

console.log(contactCards.getContactByName('Dmytro'));
console.log(contactCards.getContactByName('Lena'));