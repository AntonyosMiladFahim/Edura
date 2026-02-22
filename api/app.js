// this is the main server file for the backend API
// imports
import express from "express"
import authRoute from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js";
import gradeRoute from "./routes/grade.route.js";
import enrollmentRoute from "./routes/enrollment.route.js";
import lectureRoute from "./routes/lecture.route.js";
import partitionRoute from "./routes/partition.route.js";

// app setup
const app=express();

// cross origin resource sharing setup for frontend-backend communication
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials:true,
}));

app.use(express.json());  // middleware to parse JSON request bodies
app.use(cookieParser());  // middleware to parse cookies

// route setup
app.use("/api/users", userRoute);           // routes for user-related operations
app.use("/api/auth", authRoute);            // routes for authentication operations
app.use("/api/courses", courseRoute);       // routes for course-related operations
app.use("/api/grades", gradeRoute);         // routes for grade-related operations
app.use("/api/enrollments", enrollmentRoute); // routes for enrollment operations
app.use("/api/lectures", lectureRoute);     // routes for lecture operations
app.use("/api/partitions", partitionRoute); // routes for partition operations


// server listening on port 8800
app.listen((8800),()=>{
    console.log("server is working on port 8800");
});

// localhost://8800:/api/posts/