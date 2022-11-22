import { io } from "socket.io-client";
const socket = io.connect("https://belink-socket.herokuapp.com:5000");
export default socket;