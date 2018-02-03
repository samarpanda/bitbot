var logger = require('../../util/logger')
var request = require('superagent')
var wapi = require('../../wit/wapi')
var search = require('../search/searchController')
const util = require('util')

const token = "EAAH8lee0ZBnMBACe8ry6inf009p99ZADepqO6kLqZC6NAxBKk7NhM9B52r9i2CISqwF4L8CSqASolK86AePF8aMJgKPIslt1fR9M1DSHydH2hcUAHLJ5SlqRBzrRt49rscStk9D0e8JUYK8imzVwW2fkjJuFtKde6bHHGiLiAZDZD"

exports.get = function(req, res){
  if (req.query['hub.verify_token'] === "ujjwal") {
    res.send(req.query['hub.challenge'])
  }
  res.send("Wrong token")
}

exports.post = function(req, res, next){
  let messaging_events = req.body.entry[0].messaging
  console.log("$$$$ messaging_events " + messaging_events.length)
  for (let i = 0; i < messaging_events.length; i++) {
    let event = messaging_events[i]
    let sender = event.sender.id
    if (event.message && event.message.text) {
      let text = event.message.text
      wapiCall(text, sender)
    }
  }
}

function wapiCall(text, sender){
  wapi.message(text)
      .then((wres) => {
        wres = JSON.parse(wres.text)
        // console.log("$$$$ response form wapi " + wres)
        let entities = wres.entities
        // console.log("$$$$ entities form wapi " + util.inspect(entities, {depth: null}))
        let location = entities.location[0].value
        // console.log("$$$$ location form wapi " + util.inspect(location, {depth: null}))
        let user_action = entities.user_action[0].value
        // console.log("$$$$$$ " + util.inspect(user_action, {depth: null}))
        switch(user_action){      
            case "search_intent":
              search.search(wres._text)
                  .then((dres) => {
                    //let respo = JSON.parse(dres).docs
                    let respo = dres.docs
                    console.log("$$$$ response form search " + util.inspect(wres, {depth: null}))
                    sendText(respo, sender)
                  })
                  .catch((err) => {
                    logger.error(err)
                  })
              break
            case "trending_ads_intent":
              break
            case "messages_intent":
              break
            case "my_ads_intent":
              break
            default:

        }
      })
      .catch((err) => {
        logger.error(err)
      })
}

function sendText(ads, sender){
  let responsePayload = constantPayload
  console.log("$$$$ constantPayload " + util.inspect(responsePayload, {depth: null}))
  let image_url, title
  for(var i = 0; i < ads.length; i++) {
    title = ads[i].title
    if (ads[i].image_count === 0) {
       image_url = "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/CEEX/SamsungA8Plus/1097541_galaxyA8shop_1500x300_1._CB486672680_.jpg"
    }
    else{
      image_url = ads[i].images
    }
    responsePayload.attachment.payload.elements.push(addValues(title, image_url))
  }
  console.log("$$$$ response at end " + util.inspect(responsePayload, {depth: null}))
  request
    .post('https://graph.facebook.com/v2.6/me/messages')
    .set('content-type', 'application/json')
    .query({access_token: token})
    .send({
      recipient: {id: sender},
      message: responsePayload
    })
}

const constantPayload = {
  "attachment":{
    "type":"template",
    "payload":{
      "template_type":"generic",
      "elements":[]
    }
  }
}

function addValues(title, image_url){
  var str = {
  "title":title,
  "image_url":image_url,
  "subtitle":"We've got the right hat for everyone.",
  "default_action": {
    "type": "web_url",
    "url": image_url,
    "messenger_extensions": true,
    "webview_height_ratio": "tall",
    "fallback_url": "https://www.quikr.com"
  },
  "buttons":[
    {
      "type":"web_url",
      "url":"https://www.quikr.com",
      "title":"View this"
    },
    {
      "type":"postback",
      "title":"Start Chatting",
      "payload":"DEVELOPER_DEFINED_PAYLOAD"
    }              
  ]      
}

  return str;
}

              
            
        

