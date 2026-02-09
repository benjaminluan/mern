import express from "express";
import cors from "cors";
import records from "./routes/record.js"

const port = process.env.PORT || 5051;
const app = express();


app.use(cors());
app.use(express.json());
app.use("/record", records);
app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.listen(port, () => {
    console.log(`Server Listening on port ${port}`)
}).on('error', (err) => {
    console.error('Server error:', err);
});