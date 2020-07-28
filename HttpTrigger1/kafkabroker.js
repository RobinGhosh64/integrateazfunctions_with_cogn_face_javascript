
var kafka = require('kafka-node');
//var MTransaction = require('../MTransaction');

var HighLevelProducer = kafka.HighLevelProducer;
var KeyedMessage = kafka.KeyedMessage;
var Client = kafka.Client;


 
  

/*
  producer.on('ready', function() {
    console.log("Kafka Producer is connected and ready.");
  });
*/

module.exports={
 
   
     /*
     *  Send transaction via event hub
     */
    sendTransaction: function (id,dt, transaction) {

        var client = new Client('localhost:2181', 'my-client-id', {   
            sessionTimeout: 300,
            spinDelay: 100,
            retries: 2
          });
          
          // For this demo we just log client errors to the console.
          client.on('error', function(error) {
            console.error(error);
          });
        console.log('In sendTransaction...');
        var producer = new HighLevelProducer(client);
        console.log('producer is created');
        producer.on('ready', function() { 
            console.log("Transaction: " + transaction);
            /*
            * Try to add this transaction into Event-Hub 
            */
           /*
            var mtransaction = new MTransaction();
            mtransaction.id =  id;
            mtransaction.store_id = transaction.store_id;
            mtransaction.merchant_id = transaction.merchant_id;
            mtransaction.trantype = transaction.trantype;
            mtransaction.refnum = transaction.refnum;
            mtransaction.refdate = dt;
            mtransaction.amount = transaction.amount;
            */

            const buffer = new Buffer.from(JSON.stringify(transaction));

            // Create a new payload
            var payload = [{
                    topic: 'silver-topic-1',       // topic-name
                    messages: buffer,
                    attributes: 1 /* Use GZip compression for the payload */
            }];

            //Send payload to Kafka and log result/error
            producer.send(payload, function(error, result) {
                console.log('Sent payload to Kafka: ', payload);
                if (error) {
                    console.error(error);
                } else {
                    var formattedResult = result[0];
                    console.log('result: ', result)
                }
            });
            //producer.close();
             
        }); 
            
    },


};

