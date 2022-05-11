let express = require('express')
let States = require('../models').State

let router = express.Router()
// fetch all of the states
router.get('/states', function(req, res, next) {
    States.findAll({order: ['name']}).then( states => {
        return res.json(states)
    })
    .catch( err => next(err) )
})
// get all the information about the state
//state/California or state/Iowa
router.get('/state/:name', function(req, res, name) {
    let stateName = req.params.name
    States.findOne( {where: { name: stateName }})
    .then( state => {
        if (state) {
            return res.json(state)
        } else {  // if name is NotAState
            return res.status(404).send('State not found')
        }
    } )
    .catch( err => next(err))
})
// patch route to update a state visitied or not
// request to state/IOWA
router.patch('/state/:name', function(req, res, next){
    let stateName = req.params.name  // IOWA
    let stateVisited = req.body.visited // TRUE
 
    States.update ( { visited: stateVisited }, { where: {name: stateName}}) //IOWA //returns promise
        .then( rowsUpdated => {
            let numberOfRowsUpdated = rowsUpdated[0]
            if (numberOfRowsUpdated == 1) {
                return res.send('ok')
            }
            return res.status(404).send('State Not Found')  //returning the changes
        })
        .catch( err => next(err))
})
module.exports = router
// do not write anything below this line