const app  = require('express')();

// -- get route
app.get('/', (req, res) => {
    res.json({ message: 'docker sample' })
});

/ -- post route
app.post('/newroute/:id', (req, res) => {
    const { id } = req.params;
    const { size } = req.body;

    if (!newroute) {
        res.status(404).send({ message: 'page not found' })
    }

    res.send({
        message: `new route`
    });
});

const port = process.env.PORT || 1941;

app.listen(port, () => 
    console.log(`app is listening in ${ port }`));
