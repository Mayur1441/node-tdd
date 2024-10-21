const app = require("./app");

app.listen(process.env.PORT || 8000, () => {
    // console.log('aa ');
    console.log('App running on', process.env.PORT || 8000);
});
