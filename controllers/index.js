const {entries} = require("../model")

function home(req, res) {
    res.render('home', { entries: entries });
}

function newEntry(req, res) {
    res.render('agenda-form');
}

function newEntryFetch(req, res) {
    res.render('agenda-form-fetch');
}

function postNewEntry(req, res) {
    entries.push({
        title: req.body.title,
        content: req.body.body,
        published: new Date()
    });

    res.redirect(303, '/');
}

module.exports={home,newEntry,newEntryFetch,postNewEntry}