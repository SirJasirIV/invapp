const express = require("express");
const app = express();
const catRouter = require("./routes/catrouter")

const indexRouter = require("./routes/indexrouter") 

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/categories", catRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log("going well!");
});