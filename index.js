//connect to firestore
const admin = require("firebase-admin")
const creds = require("./credentials.json")

admin.initializeApp({
  credential: admin.credential.cert(creds)
})

//now here we are connected to ALL of the services in our firebase project
const db = admin.firestore()
//create a customer
const newCustomer = {
  firstName: 'Noah',
  lastName: 'Albert',
  tel: '561-413-7707',
  email:'no.albert113@gmail.com',
  dob: '2003-11-03',
  pets:[{
    name: 'Ryder',
    type:'dog',
    size:'Medium',
    age: 2
  }, {
    name: 'Dragon',
    type:'Fish',
    size:'Large',
    age: 2
}]
}
db.collection('customers').add(newCustomer)
.then(doc => console.log('Created customer', doc.id))
.catch(err => console.error('Error Adding Customer:',err))


//get all customers
db.collection('customers').get()
.then( collection =>{
const allCustomers = collection.docs.map(doc => doc.data())
  console.log(allCustomers)
})
.catch(err => console.error('Error Getting Customers:',err))

//console.log results
