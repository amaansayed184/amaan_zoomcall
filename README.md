# 🎥 Real-Time Video Conferencing Platform (Zoom Clone)

A full-stack real-time video conferencing web application built using the **MERN stack**, **Socket.io**, and **WebRTC**.
The platform allows users to create and join video meetings with real-time peer-to-peer audio/video communication.

## 🚀 Live Demo

🔗 Deployed Link: https://amaan-zoomcall-1.onrender.com/

## 📌 Features

* 🔐 User Authentication System

  * Secure signup and login functionality
  * User session management

* 🎥 Real-Time Video Calling

  * Peer-to-peer video communication using WebRTC
  * Camera and microphone streaming

* ⚡ Real-Time Communication

  * Socket.io based signaling server
  * Handles WebRTC offer and answer exchange
  * ICE candidate sharing for peer connection establishment

* 🏠 Meeting Rooms

  * Create and join meeting rooms
  * Unique room-based communication

* 📜 Meeting History

  * Stores previous meeting information
  * User-specific meeting records

* 📱 Responsive UI

  * Modern frontend interface
  * Mobile-friendly design using Material UI

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* Material UI
* Axios
* React Router

### Backend

* Node.js
* Express.js
* Socket.io
* WebRTC APIs

### Database

* MongoDB
* Mongoose

### Deployment

* Render

---

## 🏗️ System Architecture

```
Client A
   |
   |
React Frontend
   |
   |
Socket.io Signaling Server
   |
   |
React Frontend
   |
   |
Client B


After signaling:

Client A  <------ WebRTC P2P Connection ------> Client B

(Audio/Video Stream Transfer)
```

---

## 🔄 How WebRTC Works In This Project

1. User joins a meeting room

2. Socket.io establishes signaling communication

3. Caller creates a WebRTC offer

4. Offer is sent through Socket.io server

5. Receiver creates an answer

6. ICE candidates are exchanged

7. Direct peer-to-peer WebRTC connection is created

8. Audio and video streams transfer directly between users

---

## 📂 Project Structure

```
project/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── utils/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone YOUR_GITHUB_LINK
```

Install frontend dependencies

```bash
cd frontend
npm install
```

Run frontend

```bash
npm start
```

Install backend dependencies

```bash
cd backend
npm install
```

Run backend

```bash
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file in backend folder:

```
MONGO_URI=your_mongodb_connection_string
PORT=8000
```

---

## Future Improvements

* Screen sharing
* Chat during meetings
* Meeting recording
* Waiting room feature
* Cloud storage integration

---

## Author

**Amaan Sayed**

GitHub: github.com/amaansayed184

LinkedIn: linkedin.com/in/amaansayed
