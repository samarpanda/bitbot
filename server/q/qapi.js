var request = require('superagent');
var auth = require('./auth');
var config = require('./local.config');

module.exports.getTrendingAdsByCityId = function(cityId, headerObj){
  return new Promise((resolve, reject) => {
    request
      .get(`${config.publicApi()}/trending?city=${cityId}`)
      .set(headerObj)
      .end((err, res) => {
        err ? reject(err) : resolve(res);
      })
  })
}
module.exports.getAdsByLocation = function(lat, lon, headerObj){
  return new Promise((resolve, reject) => {
    request
      .get(`${config.publicApi()}/adsByLocation?lat=${lat}&lon=${lon}&from1&size=5`)
      .set(headerObj)
      .end((err, res) => {
        err ? reject(err) : resolve(res);
      })
  })
}
module.exports.getAdsByCategoryAndCity = function(categoryId, cityName, headerObj){
  const {startFrom, pageSize} = {
    startFrom: 0,
    pageSize: 2
  };
  return new Promise((resolve, reject) => {
    request
      .get(`${config.publicApi()}/adsByCategory?categoryId=${categoryId}&city=${cityName}&from=${startFrom}&size=${pageSize}`)
      .set(headerObj)
      .end((err, res) => {
        err ? reject(err) : resolve(res);
      })
  })
}
module.exports.getAdsByCategory = function(categoryId, headerObj){
  const {startFrom, pageSize} = {
    startFrom: 0,
    pageSize: 2
  };
  return new Promise((resolve, reject) => {
    request
      .get(`${config.publicApi()}/adsByCategory?categoryId=${categoryId}&from=${startFrom}&size=${pageSize}`)
      .set(headerObj)
      .end((err, res) => {
        err ? reject(err) : resolve(res);
      })
  })
}
module.exports.getAdsByCity = function(cityName, headerObj){
  const {startFrom, pageSize} = {
    startFrom: 0,
    pageSize: 2
  };
  return new Promise((resolve, reject) => {
    request
      .get(`${config.publicApi()}/adsByCategory?city=${cityName}&from=${startFrom}&size=${pageSize}`)
      .set(headerObj)
      .end((err, res) => {
        err ? reject(err) : resolve(res);
      })
  })
}
module.exports.getLiveOnQuikr = function(headerObj){
  return new Promise((resolve, reject) => {
    request
    .get(`${config.publicApi()}/liveOnQuikr`)
    .set(headerObj)
    .end((err, res) => {
      err ? reject(err) : resolve(res);
    })
  })
}

module.exports.getPopularAds = function (headerObj) {


  return new Promise((resolve, reject) => {
  resolve(`{
    "PopularAdsApplicationResponse": {
        "PopularAdsApplication": {
            "ad": {
                "0": [
                    {
                        "pinToTop": false,
                        "location": "Alawardi Sarai",
                        "txtmobile": "09662083898",
                        "isClick2callEnabled": false,
                        "city": {
                            "name": "Gurgaon",
                            "id": "132222"
                        },
                        "isOnline": true,
                        "isPoster": false,
                        "id": "299142452",
                        "title": "USA HIGH CLONE IPHONE 6S",
                        "demail": "qaf9s4nmdw-jq@quikr.com",
                        "description": "Clone high copyIPhone 7 - Rs. 9,000IPhone 7plus. - Rs. 11,500IPhone 6s. - Rs. 7,000IPhone 6s plus. Rs. 8,500Samsung a9.7500Samsung 5. - Rs. 9,500Samsung s7 edge. - Rs. 13,000Samsung 7 edge. - Rs. 14,000Lg g5.7500Samsung s8  11500Samsung s8plus 13000Iphone 8  13500gujratCall What's",
                        "isC2CEnabled": true,
                        "isMakeAnOfferEnabled": true,
                        "metadata": {
                            "dispkeywords": "Alawardi Sarai",
                            "dispprice": "7000"
                        },
                        "isAskForPriceEnabled": true,
                        "isSmsEnabled": true,
                        "adStyle": "B",
                        "last_online": "0",
                        "modified": "1517566295",
                        "isInspected": false,
                        "referrer": "app_consumer_android",
                        "email": "anujt2924@gmail.com",
                        "subcategory": {
                            "gid": "149",
                            "name": "Mobile Phones",
                            "id": "13222202018"
                        },
                        "geoPin": [
                            "28.50296974",
                            "77.01967621"
                        ],
                        "images": [
                            "http://teja1.kuikr.com/i5/20171005/USA-HIGH-CLONE-I-PHONE-6S-ak_LWBP93820846-1507218569.jpeg",
                            "http://teja1.kuikr.com/i6/20171005/USA-HIGH-CLONE-I-PHONE-6S-ak_LWBP30078329-1507218569.jpeg",
                            "http://teja1.kuikr.com/i5/20171005/USA-HIGH-CLONE-I-PHONE-6S-ak_LWBP1058552857-1507218570.jpeg",
                            "http://teja1.kuikr.com/i5/20171005/USA-HIGH-CLONE-I-PHONE-6S-ak_LWBP1496842378-1507218570.jpeg",
                            "http://teja1.kuikr.com/i6/20171005/USA-HIGH-CLONE-I-PHONE-6S-ak_LWBP299435489-1507218570.jpeg",
                            "http://teja1.kuikr.com/i5/20171005/USA-HIGH-CLONE-I-PHONE-6S-ak_LWBP1652204314-1507218596.jpeg",
                            "http://teja1.kuikr.com/i6/20171005/USA-HIGH-CLONE-I-PHONE-6S-ak_LWBP1761940772-1507218596.jpeg",
                            "http://teja1.kuikr.com/i5/20171005/USA-HIGH-CLONE-I-PHONE-6S-ak_LWBP453363949-1507218596.jpeg"
                        ],
                        "attributes": {
                            "quikrscanner": "0",
                            "C2C Enabled": "1",
                            "You are": "Dealer",
                            "Purchase Year": "2017",
                            "Brand name": "Others",
                            "c2c pickup": "0",
                            "presence": "1",
                            "Condition": "Used",
                            "Ad Type": "offer",
                            "Buy Now Optin": "1",
                            "No Negotiate Price": "0",
                            "zipcode": "390025",
                            "Reserved Price": "6500",
                            "Also includes": [
                                "Charger",
                                "Data Cable",
                                "Earphones/Headphones"
                            ],
                            "encrypted": "1N+vU8uSK/L1LHh5IbjFL/cga3B8HDoqjlvKvbmGC/MBm1wjIsJSKkSC5ZdRywrJLli2xQk6i1ynWbRd8x9LmU0mDLstO7BaYhcf6HUAHvT2/flGHTstpTvokckHac22",
                            "Price": "7000",
                            "Model": "Others",
                            "weight type": "LIGHT",
                            "callButtonRequired": false
                        },
                        "imgCount": "8",
                        "metacategory": {
                            "gid": "269",
                            "name": "Mobiles & Tablets",
                            "id": "18224349"
                        },
                        "mobile": "9662083898",
                        "userId": "145672349",
                        "daysToExpire": 0,
                        "status": 0,
                        "isNumberVerified": 0,
                        "userPrivacy": 0,
                        "emailAvailable": true,
                        "attributeSold": false,
                        "isAttributeSold": false
                    },
                    {
                        "pinToTop": false,
                        "location": "DLF Phase 2",
                        "txtmobile": "09992848757",
                        "isClick2callEnabled": false,
                        "city": {
                            "name": "Gurgaon",
                            "id": "132222"
                        },
                        "isOnline": true,
                        "isPoster": false,
                        "id": "302538890",
                        "title": "Xiaomi Mi Max 2..(4GB, 64GB)..with bill, box, charger, data cable..quikr doorstep available",
                        "demail": "qafo7by6wyesi@quikr.com",
                        "description": "Mi Max 2..with all accessories..4GB RAM..64GB memory..5300mah battery..6.7 inch secreen.. fingerprint lock..4g volte..7.1 android version..9.1 imui version.. quikr doorstep available",
                        "isC2CEnabled": true,
                        "isMakeAnOfferEnabled": true,
                        "metadata": {
                            "dispkeywords": "DLF Phase 2",
                            "dispprice": "11999"
                        },
                        "isAskForPriceEnabled": true,
                        "isSmsEnabled": true,
                        "adStyle": "B",
                        "last_online": "0",
                        "modified": "1517585814",
                        "isInspected": false,
                        "referrer": "app_consumer_android",
                        "email": "vik1995rao@gmail.com",
                        "subcategory": {
                            "gid": "149",
                            "name": "Mobile Phones",
                            "id": "13222202018"
                        },
                        "geoPin": [
                            "28.48875237",
                            "77.02305603"
                        ],
                        "images": [
                            "http://teja1.kuikr.com/i5/20171231/Xiaomi-Mi-Max-2-4GB--64GB-with-bill--box--charger--data-cablequikr-doorstep-available-VB201705171774173-ak_WBP2007342463-1514687928.png",
                            "http://teja1.kuikr.com/i5/20171231/Xiaomi-Mi-Max-2-4GB--64GB-with-bill--box--charger--data-cablequikr-doorstep-available-VB201705171774173-ak_WBP1220929684-1514687927.png",
                            "http://teja1.kuikr.com/i5/20171231/Xiaomi-Mi-Max-2-4GB--64GB-with-bill--box--charger--data-cablequikr-doorstep-available-VB201705171774173-ak_WBP1213632289-1514687927.png",
                            "http://teja1.kuikr.com/i5/20171231/Xiaomi-Mi-Max-2-4GB--64GB-with-bill--box--charger--data-cablequikr-doorstep-available-VB201705171774173-ak_LWBP958435216-1514687927.png",
                            "http://teja1.kuikr.com/i5/20171231/Xiaomi-Mi-Max-2-4GB--64GB-with-bill--box--charger--data-cablequikr-doorstep-available-VB201705171774173-ak_WBP1526701726-1514687928.png",
                            "http://teja1.kuikr.com/i4/20171231/Xiaomi-Mi-Max-2-4GB--64GB-with-bill--box--charger--data-cablequikr-doorstep-available-VB201705171774173-ak_WBP1749680997-1514687928.png",
                            "http://teja1.kuikr.com/i6/20171231/Xiaomi-Mi-Max-2-4GB--64GB-with-bill--box--charger--data-cablequikr-doorstep-available-VB201705171774173-ak_WBP193123637-1514687927.png",
                            "http://teja1.kuikr.com/i5/20171231/Xiaomi-Mi-Max-2-4GB--64GB-with-bill--box--charger--data-cablequikr-doorstep-available-VB201705171774173-ak_LWBP1590630712-1514687928.png"
                        ],
                        "attributes": {
                            "Invoice": "Available",
                            "QPS Paid": "0",
                            "quikrscanner": "0",
                            "You are": "Individual",
                            "Purchase Year": "2017",
                            "Escrow adScore": "0",
                            "Physical Condition": "Good",
                            "Brand name": "Xiaomi",
                            "c2c pickup": "1",
                            "presence": "1",
                            "Condition": "Used",
                            "Ad Type": "offer",
                            "zipcode": "122001",
                            "Reserved Price": "11998",
                            "Also includes": [
                                "Charger",
                                "Data Cable",
                                "Earphones/Headphones",
                                "Memory Card"
                            ],
                            "encrypted": "1N+vU8uSK/LkZGInjPjyiAG1/IelX0/J9L/rUIimMIKxgDlnqwZXgF3/bpD3dYWClVtRvedCJ/eAXBoYxHaKD11xLQ5abmGrGSfMHw6lRssG/OWrQOo4DI2cPcd2TWCR7/NAyf6fd/g=",
                            "Price": "11999",
                            "Model": "Mi Max 2 (64GB)",
                            "weight type": "LIGHT",
                            "callButtonRequired": false
                        },
                        "imgCount": "8",
                        "metacategory": {
                            "gid": "269",
                            "name": "Mobiles & Tablets",
                            "id": "18224349"
                        },
                        "mobile": "9992848757",
                        "userId": "147660306",
                        "daysToExpire": 0,
                        "status": 0,
                        "isNumberVerified": 0,
                        "userPrivacy": 1,
                        "emailAvailable": true,
                        "attributeSold": false,
                        "isAttributeSold": false
                    },
                    {
                        "pinToTop": false,
                        "location": "Rohini",
                        "txtmobile": "09811263209",
                        "isClick2callEnabled": false,
                        "city": {
                            "name": "Delhi",
                            "id": "27"
                        },
                        "isOnline": false,
                        "isPoster": false,
                        "id": "284894321",
                        "title": "Sony LCD and LED Tv card at very low price",
                        "demail": "qacd423eca463afd6digitechrohini15@gmail.com",
                        "description": "Sony LCD and LED Tv card at very low price",
                        "isC2CEnabled": true,
                        "isMakeAnOfferEnabled": true,
                        "metadata": {
                            "dispkeywords": "Rohini",
                            "dispprice": "500"
                        },
                        "isAskForPriceEnabled": true,
                        "isSmsEnabled": true,
                        "adStyle": "B",
                        "last_online": "0",
                        "modified": "1517560280",
                        "isInspected": false,
                        "referrer": "app_consumer_android",
                        "email": "digitechrohini15@gmail.com",
                        "subcategory": {
                            "gid": "51",
                            "name": "TV - DVD - Multimedia",
                            "id": "625"
                        },
                        "geoPin": [
                            "28.73069000",
                            "77.09529877"
                        ],
                        "images": [
                            "http://teja1.kuikr.com/i4/20171119/Sony-LCD-and-LED-Tv-card-at-very-low-price-VB201705171774173-ak_WBP915693090-1511057039.png",
                            "http://teja1.kuikr.com/i5/20171119/Sony-LCD-and-LED-Tv-card-at-very-low-price-VB201705171774173-ak_WBP1349907148-1511057142.png",
                            "http://teja1.kuikr.com/i6/20171119/Sony-LCD-and-LED-Tv-card-at-very-low-price-VB201705171774173-ak_WBP910693850-1511057137.png",
                            "http://teja1.kuikr.com/i6/20171119/Sony-LCD-and-LED-Tv-card-at-very-low-price-VB201705171774173-ak_WBP1260110606-1511057137.png",
                            "http://teja1.kuikr.com/i4/20171119/Sony-LCD-and-LED-Tv-card-at-very-low-price-VB201705171774173-ak_WBP1557571374-1511057137.png",
                            "http://teja1.kuikr.com/i4/20171119/Sony-LCD-and-LED-Tv-card-at-very-low-price-VB201705171774173-ak_WBP692887038-1511057137.png",
                            "http://teja1.kuikr.com/i6/20171119/Sony-LCD-and-LED-Tv-card-at-very-low-price-VB201705171774173-ak_LWBP1218864701-1511057137.png"
                        ],
                        "attributes": {
                            "Condition": "Almost Like New",
                            "QPS Paid": "0",
                            "Ad Type": "offer",
                            "Buy Now Optin": "1",
                            "Reserved Price": "499",
                            "zipcode": "110089",
                            "Escrow adScore": "16",
                            "encrypted": "1N+vU8uSK/JsQ1Ol9gBJAZFUE4j9IYjOB94bvAByZZbv+Ld2Uqu9NhxzTogGVm/jc7wMdQRL7l+CHeoK/4WJNWfet/2YavPEbeLizHWiGZyXoIvJjL2booFxN7EcDK1TI1oc5lVVQJ8=",
                            "Price": "500",
                            "Brand name": "Sony",
                            "c2c pickup": "1",
                            "Product Type": "TV",
                            "weight type": "MEDIUM",
                            "callButtonRequired": false
                        },
                        "imgCount": "7",
                        "metacategory": {
                            "gid": "247",
                            "name": "Electronics & Appliances",
                            "id": "18222212662"
                        },
                        "mobile": "9811263209",
                        "userId": "11955099",
                        "daysToExpire": 0,
                        "status": 0,
                        "isNumberVerified": 0,
                        "userPrivacy": 0,
                        "emailAvailable": true,
                        "attributeSold": false,
                        "isAttributeSold": false
                    }
                ]
            }
        },
        "MetaData": {
            "requestId": "47c3e96f-30af-4e4a-955b-424ca3576601"
        }
    }
}`)
})
 return new Promise((resolve, reject) => {

   request
     // .get(`${config.qApi()}/mqdp/v1/popularAds`)
     // .set(headerObj)
     .get(`http://mobileqdp-29-149.com:8080/mqdp/v1/popularAds`)
     .set(headerObj)
     .end((err, res) => {
       err ? reject(err) : resolve(res);
     })
   })
}

module.exports.getCityId = function(cityName, headerObj){
  return new Promise((resolve, reject) => {
    request
    .get(`${config.qApi}/realestate/v1/citiesFull?name=${cityName}`)
    .set(headerObj)
    .end((err, res) => {
      err ? reject(err) : resolve(res)
    })
  })
}