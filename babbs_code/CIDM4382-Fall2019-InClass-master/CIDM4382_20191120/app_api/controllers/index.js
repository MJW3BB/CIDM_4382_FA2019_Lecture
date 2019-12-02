const mongoose = require('mongoose');
const Client = mongoose.model('Client');

/*
router
  .route('/departed/:airport/:howMany/:offset')
  .get(ctrlIndex.showAllRecords);

router
  .route('/departure/:airport')
  .get(ctrlIndex.showDepartureAirport);

router
  .route('/arrival/:airport')
  .get(ctrlIndex.showArrivalAirport);  

*/

const showAllRecords = (req, res) => {

}

const showDepartureAirport = (req, res) => {
  const airport = req.params.airport;  

  Client.find(
    {
        planned_depairport: req.params.airport,
    },
    //callback
    (err, docs) => {

        //send records back
        if(!err){
            res.send(docs);
        }else{
            res.send(err);
            console.log(err);
        }
    }
);  

}

const showArrivalAirport = (req, res) => {
  const airport = req.params.airport;

}

/**
 * PILOT client has departed
 * @param {http request} req 
 * @param {http response} res 
 */
const departed = (req, res) => {
  console.log(req.params.airport);
  const airport = req.params.airport;
  const offset = parseInt(req.params.offset);
  const howMany = parseInt(req.params.limit);
  Client.find(
      {
          planned_depairport: req.params.airport,
      },
      null,
      {
          skip: offset,
          limit: howMany
      },
      //callback
      (err, docs) => {

          let records = [];

          docs.forEach( (document) => {
              if (!isOlderThanADay(vatsimTimeLogonToDate(document.time_logon))){
                  records.push(document);
              }
          });
          //send records back
          if(!err){
              res.send(records);
          }else{
              res.send(err);
              console.log(err);
          }
      }
  );
}