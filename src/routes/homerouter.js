const express = require('express'); 
const homeRouter = express.Router();

function router(nav) { //part#2 point 6
homeRouter.get('/',function(req,res){

    res.render('home',{nav});
    
})




return homeRouter;
}

module.exports = router;