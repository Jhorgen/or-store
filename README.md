# Outer Rim Bike Shop

The Outer Rim Bike Shop is an e-commerce application that I've developed for a business in Portland, OR. I was contracted to create an online store that users could purchase products from, as well as a content mangement system that the shop could use to manage their inventory. 

#Highlights

* Each product has a number of options, prices for each option, quantity, images, etc. Using this logic required a lot of planning in order to decrement the correct option & option quantity when a purchase is made.

* Ruby on Rails is used for manage product inventory, product creation, emails to customers post-checkout (action mailer), and create charges via Stripe's API.

* Redux is used to mangage a user's cart & redux-persist is used to maintain their cart using local storage.

* A number of checks are in place to prevent out of stock inventory from being added to a user's cart.

* Stripe is used for processing payments.

* Uses custom domain & ssl certificate in order to recieve payments.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Setup & Deployment
You can view the live application here: https://outerrimbikeshop.com

or

To run this project locally, install it using npm.

```
$cd or-store
$npm i
$npm start
```

## Built With

* [React](https://reactjs.org/)
* [Create-react-app](https://www.npmjs.com/package/create-react-app)
* [Redux](https://www.npmjs.com/package/redux)
* [Redux persist](https://www.npmjs.com/package/redux-persist)
* [Stripe API](https://stripe.com/)


## Authors

* **Josh Horgen**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
