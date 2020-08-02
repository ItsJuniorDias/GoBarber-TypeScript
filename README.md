# GoBarber-TypeScript
:barber:  Application using NodeJs on backend, ReactJs on frontend and React Native for mobile using language Typescript


## 🚀 Features
- Password recovery
  - **Functional Requirements**
   - The user must be able to recover his password informing his e-mail;
    - The user should receive an email with password recovery instructions;
    - The user must be able to reset his password

  - **Non-Functional Requirements**
   - Use ethereal to test shipments in a development environment;
    - Use Amazon SES for production shipments;
    - E-mails should be sent in the background (background job);

  - **Business Rules**
   - The link sent by email to reset the password must expire in 2h;
   - The user needs to confirm the new password when resetting;

- Profile update
  - **Functional Requirements**
   - The user must be able to update his name, email and password

  - **Business Rules**
   - The user cannot change his e-mail to one already used by another user;
   - To update your password, the user must inform the old password;

- Provider panel
  - **Functional Requirements**
   - The user must be able to list their schedules for a specific day;
   - The provider must receive a notification whenever there is a new appointment;
   - The provider must be able to view unread notifications;

  - **Non-Functional Requirements**
   - The provider's schedules for the day must be stored in cache;
   - The provider's notifications must be stored in MongoDB;
   - Service provider notifications must be sent in real time using Socket.io;

  - **Business Rules**
   - The notification must have a read or unread status so that the provider can control;

- Scheduling services
  - **Functional Requirements**
   - The user must be able to list all registered service providers;
   - The user must be able to list the days, with at least one available time, of a provider in a specific month;
   - The user must be able to list the hours available on a specific day for a provider;
   - The user must be able to make a new appointment with a provider;

  - **Non-Functional Requirements**
   - The list of providers must be cached;

  - **Business Rules**
   - Each appointment must last exactly 1 hour;
   - Appointments must be available between 8 am and 6 pm (first at 8 am and last at 5 pm);
   - The user cannot schedule at an already busy time;
   - The user cannot schedule an appointment that has already passed;
   - The user cannot schedule services with himself;
---

## ⚙ Tools
### Backend
  - nodeJS
  - express
  - typescript
  - typeorm
  - postgres
  - mongodb
  - redis
  - uuidv4
  - date-fns
  - multer
  - celebrate/joi
  - dotenv
  - class-transformer
  - jest/ts-jest
  - rate-limiter-flexible
  - Amazon SES
  - Amazon S3

### Frontend
  - react
  - typescript
  - axios
  - react-router-dom
  - styled-components
  - polished
  - react-spring
  - yup
  - date-fns
  - react-day-picker
  
### Mobile 
 - react-native
 - react-native-vector-icons
 - @react-native-community/async-storage
 - @react-navigation/native
 - unform (2.0)
 - axios
 - styled-components
 - yup

  **Outras tecnologias**
  - Docker


 ### ℹ️ Installing

**Cloning the Repository**

```
$ git clone https://github.com/ItsJuniorDias/GoBarber-TypeScript.git

$ cd GoBarber-TypeScript
```

**Installing dependencies**

```
$ yarn install
```

_or_

```
$ npm install
```
**Running**

**Backend**

```
$ cd backend
$ yarn dev
```

**Frontend**

```
$ cd frontend
$ yarn start
```

**Mobile**

```
$ cd mobile
$ yarn android 

```
 
