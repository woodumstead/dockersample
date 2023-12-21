const app  = require('express')();

app.get('/', (req, res) => {
    res.json({ message: 'docker sample' })
});

const port = process.env.PORT || 1941;

app.listen(port, () => 
    console.log(`app is listening in ${ port }`));