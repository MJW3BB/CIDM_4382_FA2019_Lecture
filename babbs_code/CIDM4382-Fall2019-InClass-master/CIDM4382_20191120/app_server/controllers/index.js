
const welcome = (req, res, next) => {
    res.render('index', { title: 'Express' });
};

module.exports = {
    welcome,
};

/* renders the index pug template 
function(req, res, next) {
    
}
*/