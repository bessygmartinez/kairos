# :date: kairos
#### Created: March 2020
---

![alt text](https://raw.githubusercontent.com/bessygmartinez/kairos/master/client/public/img/kairos_logo.png "kairos logo")

## ABOUT KAIROS
[![Build Status](https://travis-ci.com/bessygmartinez/kairos.svg?branch=master)](https://travis-ci.com/bessygmartinez/kairos)
[![dependencies Status](https://david-dm.org/expressjs/express/status.svg)](https://david-dm.org/expressjs/express)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

kairos is a MERN stack web application designed to facilitate communication between employees and managers in order to ease the pain of schedule creation and management. The web app is intended to allow employees to communicate their availability to management on a monthly basis with a few easy steps. Powered by React.js and designed using [Material Design for Bootstrap](https://fezvrasta.github.io/bootstrap-material-design/), Kairos is efficient and user-friendly.

The landing page prompts the user to log in with their company-supplied credentials by way of a log in button. Once clicked, the log in button will direct them to enter their email and password. Authentication and authorization upon log in is made possible with the implementation of technologies such as Passport.js with JWT, with Bcrypt.js hashing the user's password in the database.

The application will then identify the role of the user (either employee, manager, or administrator) and direct them to the appropriate dashboard:

* Administrator Dashboard
* Employee Dashboard
* Manager Dashboard

## Administrator Dashboard

With the appropriate credentials, the administrator has the capability to register new accounts and assign their roles (either employee or manager). The administrator can additionally view all accounts registered and also has the ability to edit details of the account or delete the account completely.

## Employee Dashboard

The employees are presented with amonthly calendar that is interactive and intuitive. By default, each day is considered as open availability. With a simple click on a desired date, a modal will pop up and the employee can choose to set themselves as unavailable for work. This is made apparent by a toggle switch that can be "turned on" or "off." Once selected, their name will appear on the calendar as either teal (available) or red (unavailable). Once their availability is submitted, the manager will be able to see it in their dashboard.

## Manager Dashboard
With the appropriate credentials, managers are directed to their dashboard, wherein they are presented with a monthly calendar. Managers have exclusive access to view all employees' availability for each day, along with the ability to edit entries. As with the employees, this is achieved by clicking on the switch for available or unavailable. The employee's name will be displayed on the date, along with their availability (either teal for available or red for unavailable).

---

# TECHNOLOGIES USED
  * [MongoDB](https://www.mongodb.com/)
  * [React.js](https://reactjs.org/)
  * [Node.js](https://nodejs.org/en/)
      * Node packages:
        * [express](https://www.npmjs.com/package/express)
        * [mongoose](https://www.npmjs.com/package/mongoose)
        * [react-router](https://www.npmjs.com/package/react-router)
        * [React Redux](https://www.npmjs.com/package/react-redux)
        * [passport](https://www.npmjs.com/package/passport)
        * [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
        * [bcryptjs](https://www.npmjs.com/package/bcryptjs)
        * [validator](https://www.npmjs.com/package/validator)
        * [react-big-calendar](https://www.npmjs.com/package/react-big-calendar)
        * [axios](https://www.npmjs.com/package/axios)
        * [react-toastify](https://www.npmjs.com/package/react-toastify)
        * [moment](https://www.npmjs.com/package/moment)
        * [dotenv](https://www.npmjs.com/package/dotenv)
  * [JavaScript](https://www.javascript.com/)
  * [Material Design for Bootstrap](https://fezvrasta.github.io/bootstrap-material-design/)
  * [Heroku](http://www.heroku.com)
      * Heroku Add-ons:
        * [mLab MongoDB](https://elements.heroku.com/addons/mongolab)
 --- 
 
 # THE KAIROS TEAM
 | <a href="https://github.com/bessygmartinez" target="_blank">**Bessy G. Martinez**</a> | <a href="https://github.com/stephenc93" target="_blank">**Stephen Caceres**</a> | <a href="https://github.com/Paolalarrazabal" target="_blank">**Paola Larrazabal**</a> |
| :---: |:---:| :---:|
| [![Bessy G. Martinez](https://avatars2.githubusercontent.com/u/54027046?s=460&u=ca19e69c9d5ff747d3cf3786fc4e2d9852a7f859&v=4?s=200)](https://github.com/bessygmartinez)    | [![Stephen Caceres](https://avatars0.githubusercontent.com/u/54186983?s=460&v=4&s=200)](https://github.com/stephenc93) | [![Paola Larrazabal](https://avatars2.githubusercontent.com/u/54810251?s=460&u=0dc9cc9d9c4031ffa60c59d6e87ee461a3caa9f5&v=4&s=200)](https://github.com/Paolalarrazabal)  |
| <a href="https://github.com/bessygmartinez" target="_blank">`github.com/bessygmartinez`</a> | <a href="https://github.com/stephenc93" target="_blank">`github.com/stephenc93`</a> | <a href="https://github.com/Paolalarrazabal" target="_blank">`github.com/Paolalarrazabal`</a> |
