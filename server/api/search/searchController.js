var logger = require('../../util/logger')
var request = require('superagent');
//import someObject from ('./somefile.json')

exports.post = function(req, res, next){
  search(req)
    .then((wres) => {
      res.json(wres.text)
    })
    .catch((err) => {
      logger.error(err)
    })
}

exports.get = function(req, res){
  return res.json({"me": "sf"})
}

var search = function(query){
  return new Promise((resolve, reject) => {
  resolve(`{
    "success": true,
    "total": 2678,
    "timeTaken": 24,
    "responseCode": 200,
    "facet_count": {
        "category_gid": {
            "149": "2579",
            "280": "99"
        },
        "attribute_Ad_Type": {
            "offer": "2678"
        },
        "attribute_Style": {},
        "status": {
            "0": "2678"
        }
    },
    "aggs": [
        {
            "geo_pin": [
                {
                    "attrValue": "tdr1w6",
                    "count": 184,
                    "bounds": {
                        "top_left": {
                            "lat": 12.93410967104137,
                            "long": 77.62269588187337
                        },
                        "bottom_right": {
                            "lat": 12.931655868887901,
                            "long": 77.62328336946666
                        }
                    }
                },
                {
                    "attrValue": "tdr221",
                    "count": 33,
                    "bounds": {
                        "top_left": {
                            "lat": 12.71051976364106,
                            "long": 77.69918820820749
                        },
                        "bottom_right": {
                            "lat": 12.71051976364106,
                            "long": 77.69918820820749
                        }
                    }
                },
                {
                    "attrValue": "tdr4np",
                    "count": 9,
                    "bounds": {
                        "top_left": {
                            "lat": 13.048649760894477,
                            "long": 77.61126707307994
                        },
                        "bottom_right": {
                            "lat": 13.048649760894477,
                            "long": 77.61126707307994
                        }
                    }
                },
                {
                    "attrValue": "tdr1v9",
                    "count": 8,
                    "bounds": {
                        "top_left": {
                            "lat": 12.971598990261555,
                            "long": 77.59456596337259
                        },
                        "bottom_right": {
                            "lat": 12.971598990261555,
                            "long": 77.59456596337259
                        }
                    }
                },
                {
                    "attrValue": "tdr4ns",
                    "count": 5,
                    "bounds": {
                        "top_left": {
                            "lat": 13.03250118624419,
                            "long": 77.63169854879379
                        },
                        "bottom_right": {
                            "lat": 13.03250118624419,
                            "long": 77.63169854879379
                        }
                    }
                },
                {
                    "attrValue": "tf31ch",
                    "count": 2,
                    "bounds": {
                        "top_left": {
                            "lat": 12.991263354197145,
                            "long": 80.2014541067183
                        },
                        "bottom_right": {
                            "lat": 12.991263354197145,
                            "long": 80.2014541067183
                        }
                    }
                },
                {
                    "attrValue": "tdr4hq",
                    "count": 2,
                    "bounds": {
                        "top_left": {
                            "lat": 13.043914781883359,
                            "long": 77.53658289089799
                        },
                        "bottom_right": {
                            "lat": 13.043914781883359,
                            "long": 77.53658289089799
                        }
                    }
                },
                {
                    "attrValue": "tdr1wm",
                    "count": 2,
                    "bounds": {
                        "top_left": {
                            "lat": 12.952879895456135,
                            "long": 77.62740324251354
                        },
                        "bottom_right": {
                            "lat": 12.952879895456135,
                            "long": 77.62740324251354
                        }
                    }
                },
                {
                    "attrValue": "tdr1wh",
                    "count": 2,
                    "bounds": {
                        "top_left": {
                            "lat": 12.94219016097486,
                            "long": 77.61557000689209
                        },
                        "bottom_right": {
                            "lat": 12.94219016097486,
                            "long": 77.61557000689209
                        }
                    }
                },
                {
                    "attrValue": "tdr0rc",
                    "count": 2,
                    "bounds": {
                        "top_left": {
                            "lat": 12.710277526639402,
                            "long": 77.69086455926299
                        },
                        "bottom_right": {
                            "lat": 12.710277526639402,
                            "long": 77.69086455926299
                        }
                    }
                },
                {
                    "attrValue": "s631z6",
                    "count": 2,
                    "bounds": {
                        "top_left": {
                            "lat": 12.9780836077407,
                            "long": 12.978083565831184
                        },
                        "bottom_right": {
                            "lat": 12.9780836077407,
                            "long": 12.978083565831184
                        }
                    }
                },
                {
                    "attrValue": "ttnft0",
                    "count": 1,
                    "bounds": {
                        "top_left": {
                            "lat": 28.568609207868576,
                            "long": 77.21253960393369
                        },
                        "bottom_right": {
                            "lat": 28.568609207868576,
                            "long": 77.21253960393369
                        }
                    }
                },
                {
                    "attrValue": "tf2gjx",
                    "count": 1,
                    "bounds": {
                        "top_left": {
                            "lat": 13.226889590732753,
                            "long": 80.04949950613081
                        },
                        "bottom_right": {
                            "lat": 13.226889590732753,
                            "long": 80.04949950613081
                        }
                    }
                },
                {
                    "attrValue": "tepg3h",
                    "count": 1,
                    "bounds": {
                        "top_left": {
                            "lat": 17.471229541115463,
                            "long": 78.45140836201608
                        },
                        "bottom_right": {
                            "lat": 17.471229541115463,
                            "long": 78.45140836201608
                        }
                    }
                },
                {
                    "attrValue": "tdr4w8",
                    "count": 1,
                    "bounds": {
                        "top_left": {
                            "lat": 13.096645334735513,
                            "long": 77.63591757975519
                        },
                        "bottom_right": {
                            "lat": 13.096645334735513,
                            "long": 77.63591757975519
                        }
                    }
                },
                {
                    "attrValue": "tdr4q3",
                    "count": 1,
                    "bounds": {
                        "top_left": {
                            "lat": 13.059209785424173,
                            "long": 77.62686152011156
                        },
                        "bottom_right": {
                            "lat": 13.059209785424173,
                            "long": 77.62686152011156
                        }
                    }
                },
                {
                    "attrValue": "tdr1xy",
                    "count": 1,
                    "bounds": {
                        "top_left": {
                            "lat": 12.954821563325822,
                            "long": 77.68533317372203
                        },
                        "bottom_right": {
                            "lat": 12.954821563325822,
                            "long": 77.68533317372203
                        }
                    }
                }
            ]
        },
        {
            "category_pid": [
                {
                    "attrValue": "18224097",
                    "count": 2567,
                    "attribute_You_are": {
                        "attribute_You_are": [
                            {
                                "attrValue": "Dealer",
                                "count": 1475
                            },
                            {
                                "attrValue": "Individual",
                                "count": 1092
                            }
                        ]
                    }
                },
                {
                    "attrValue": "18224598",
                    "count": 92,
                    "attribute_You_are": {
                        "attribute_You_are": [
                            {
                                "attrValue": "Dealer",
                                "count": 90
                            },
                            {
                                "attrValue": "Individual",
                                "count": 2
                            }
                        ]
                    }
                },
                {
                    "attrValue": "18224209",
                    "count": 8,
                    "attribute_You_are": {
                        "attribute_You_are": [
                            {
                                "attrValue": "Dealer",
                                "count": 7
                            },
                            {
                                "attrValue": "Individual",
                                "count": 1
                            }
                        ]
                    }
                },
                {
                    "attrValue": "18224257",
                    "count": 4,
                    "attribute_You_are": {
                        "attribute_You_are": [
                            {
                                "attrValue": "Dealer",
                                "count": 2
                            },
                            {
                                "attrValue": "Individual",
                                "count": 2
                            }
                        ]
                    }
                },
                {
                    "attrValue": "18224704",
                    "count": 4,
                    "attribute_You_are": {
                        "attribute_You_are": [
                            {
                                "attrValue": "Dealer",
                                "count": 4
                            }
                        ]
                    }
                },
                {
                    "attrValue": "18224384",
                    "count": 3,
                    "attribute_You_are": {
                        "attribute_You_are": [
                            {
                                "attrValue": "Individual",
                                "count": 3
                            }
                        ]
                    }
                }
            ]
        }
    ],
    "docs": [
        {
            "id": "1998569321",
            "title": "5 month old Apple mobile for sale at a price of 6000",
            "content": "5 month old Apple mobile for sale at a price of 6000 The device is inUsed and sold by Individual",
            "cityName": "Bangalore",
            "category_id": "227",
            "category_gid": "149",
            "category_pid": "18224097",
            "category_pgid": "269",
            "city_id": "23",
            "state_id": "1146899",
            "stateName": "Karnataka",
            "status": "0",
            "adStyle": "B",
            "adExpireTime": "1525332078",
            "expireTime": "0",
            "adActionTime": "1517556078",
            "adActionType": "NEW",
            "adEditedTime": "0",
            "adSentCount": "0",
            "ad_locality": "",
            "ad_quality_score": "5.3",
            "admDeleteReviewStatus": "0",
            "admSoldOutModifiedTime": "0",
            "cas": "2",
            "cas_updateTime": "1517577008",
            "category": "cid=227|pcid=18224097|ppcid=23|gid=149|pgid=269|",
            "categoryName": "Mobile Phones",
            "createdTime": "1517556078",
            "deal": "0",
            "deleteReason": "",
            "entityType": "BasicAd",
            "firstCreatedTime": "1517556078",
            "flagReason": "8",
            "imageDetails": "image1:i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg image2: image3: image4: image5: image6: image7: image8:",
            "image_count": "1",
            "images": "i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg",
            "isFBAppAd": "0",
            "locality_count": "1",
            "masterCheckDate": "1517577007",
            "masterNickname": "null",
            "metaCategoryName": "Mobiles & Tablets",
            "metadata": "id:1998569321 areaNames:23 status:0 imageFlag:1 ATTRSTRING[Ad_Type:offer\nYou_are:Dealer\nCondition:Used\nPrice:6000\nBrand_name:Apple\nNo_of_Sims:Dual\nWareHouse_Enabled:1\nc2c_pickup:1\nzipcode:560045\nPhysical_Condition:Good -  Minor dents, No scratches on screen, Minor scratches on body\nEscrow_adScore:15\n] userAgent:http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227 [ADSTYLE:B] ",
            "modifiedTime": "1517577007",
            "recentlyViewedTime": "0",
            "referrer": "http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227",
            "repostFrom": "",
            "repostTime": "0",
            "sortable_price": "6000",
            "sourceDevice": "3",
            "userId": "136844940",
            "userIp": "192.168.2.127",
            "verifiedAd": "0",
            "verifiedLeadStatus": "30",
            "verified_mobile": "1",
            "wrongAdType": "0",
            "adQuikrSource": "1",
            "NCACreationValidation": "0",
            "attribute_No_of_Sims": "Dual",
            "attribute_sold": "0",
            "attribute_Brand_name": "Apple",
            "user_email": "stagequikr000@gmail.com",
            "attribute_You_are": "Dealer",
            "attribute_Price": "6000",
            "user_privacy": "0",
            "attribute_Physical_Condition": [
                "Good -  Minor dents",
                " No scratches on screen",
                " Minor scratches on body"
            ],
            "user_name": "stagequikr",
            "attribute_encrypted": "1N+vU8uSK/LmKlO3tScokwP/s43AlwoDKfbe53nEo9VBufZpOzzWVsi0IsDsH9NQOPPA5dkSMjrQ0aD1JgDmIpz1xiyTiMzTi5bA5ysmbxsvr01mo2yzOHsNwNzr0HoRZcvY4G62HjE=",
            "attribute_Condition": "Used",
            "attribute_c2c_pickup": "1",
            "attribute_Ad_Type": "offer",
            "attribute_original_language": "en",
            "user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_zipcode": "560045",
            "user_mobile": "8971404670",
            "user_nickname": "stagequikr000@gmail.com",
            "attribute_user_email": "stagequikr000@gmail.com",
            "attribute_WareHouse_Enabled": "1",
            "attribute_Escrow_adScore": "15",
            "user_fbid": "null",
            "_score": 310100,
            "doc_language": "en"
        },
        {
            "id": "1998569311",
            "title": "5 month old Apple mobile for sale at a price of 6000",
            "content": "5 month old Apple mobile for sale at a price of 6000 The device is inUsed and sold by Individual",
            "cityName": "Bangalore",
            "category_id": "227",
            "category_gid": "149",
            "category_pid": "18224097",
            "category_pgid": "269",
            "city_id": "23",
            "state_id": "1146899",
            "stateName": "Karnataka",
            "status": "0",
            "adStyle": "B",
            "adExpireTime": "1525332062",
            "expireTime": "0",
            "adActionTime": "1517556062",
            "adActionType": "NEW",
            "adEditedTime": "0",
            "adSentCount": "0",
            "ad_locality": "",
            "ad_quality_score": "5.3",
            "admDeleteReviewStatus": "0",
            "admSoldOutModifiedTime": "0",
            "cas": "2",
            "cas_updateTime": "1517574762",
            "category": "cid=227|pcid=18224097|ppcid=23|gid=149|pgid=269|",
            "categoryName": "Mobile Phones",
            "createdTime": "1517556062",
            "deal": "0",
            "deleteReason": "",
            "entityType": "BasicAd",
            "firstCreatedTime": "1517556062",
            "flagReason": "8",
            "imageDetails": "image1:i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg image2: image3: image4: image5: image6: image7: image8:",
            "image_count": "1",
            "images": "i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg",
            "isFBAppAd": "0",
            "locality_count": "1",
            "masterCheckDate": "1517574762",
            "masterNickname": "null",
            "metaCategoryName": "Mobiles & Tablets",
            "metadata": "id:1998569311 areaNames:23 status:0 imageFlag:1 ATTRSTRING[Ad_Type:offer\nYou_are:Dealer\nCondition:Used\nPrice:6000\nBrand_name:Apple\nNo_of_Sims:Dual\nWareHouse_Enabled:1\nc2c_pickup:1\nweight_type:LIGHT\nzipcode:560045\nPhysical_Condition:Good -  Minor dents, No scratches on screen, Minor scratches on body\nEscrow_adScore:15\n] userAgent:http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227 [ADSTYLE:B] ",
            "modifiedTime": "1517574762",
            "recentlyViewedTime": "0",
            "referrer": "http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227",
            "repostFrom": "",
            "repostTime": "0",
            "sortable_price": "6000",
            "sourceDevice": "3",
            "userId": "136844940",
            "userIp": "192.168.2.127",
            "verifiedAd": "0",
            "verifiedLeadStatus": "30",
            "verified_mobile": "1",
            "wrongAdType": "0",
            "adQuikrSource": "1",
            "NCACreationValidation": "0",
            "attribute_No_of_Sims": "Dual",
            "attribute_sold": "0",
            "attribute_Brand_name": "Apple",
            "user_email": "stagequikr000@gmail.com",
            "attribute_You_are": "Dealer",
            "attribute_Price": "6000",
            "user_privacy": "0",
            "attribute_weight_type": "LIGHT",
            "attribute_Physical_Condition": [
                "Good -  Minor dents",
                " No scratches on screen",
                " Minor scratches on body"
            ],
            "user_name": "stagequikr",
            "attribute_encrypted": "1N+vU8uSK/LmKlO3tScokwP/s43AlwoDKfbe53nEo9U7mliPHecDvEZO0ChxAr3bZBYCAt/2ysysTnUftZGmOP5VY+qyGMDioccMSTIVCI59/sHe2AsBskwn2LiSj4JxvBX9Nzv0Wm0=",
            "attribute_Condition": "Used",
            "attribute_c2c_pickup": "1",
            "attribute_Ad_Type": "offer",
            "attribute_original_language": "en",
            "user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_zipcode": "560045",
            "user_mobile": "8971404670",
            "user_nickname": "stagequikr000@gmail.com",
            "attribute_user_email": "stagequikr000@gmail.com",
            "attribute_WareHouse_Enabled": "1",
            "attribute_Escrow_adScore": "15",
            "user_fbid": "null",
            "_score": 310100,
            "doc_language": "en"
        },
        {
            "id": "1998569290",
            "title": "5 month old Apple mobile for sale at a price of 6000",
            "content": "5 month old Apple mobile for sale at a price of 6000 The device is inUsed and sold by Individual",
            "cityName": "Bangalore",
            "category_id": "227",
            "category_gid": "149",
            "category_pid": "18224097",
            "category_pgid": "269",
            "city_id": "23",
            "state_id": "1146899",
            "stateName": "Karnataka",
            "status": "0",
            "adStyle": "B",
            "adExpireTime": "1525331991",
            "expireTime": "0",
            "adActionTime": "1517555991",
            "adActionType": "NEW",
            "adEditedTime": "1517556002",
            "adSentCount": "0",
            "ad_locality": "",
            "ad_quality_score": "5.2",
            "admDeleteReviewStatus": "0",
            "admSoldOutModifiedTime": "0",
            "cas": "2",
            "cas_updateTime": "1517573542",
            "category": "cid=227|pcid=18224097|ppcid=23|gid=149|pgid=269|",
            "categoryName": "Mobile Phones",
            "createdTime": "1517555991",
            "deal": "0",
            "deleteReason": "",
            "entityType": "BasicAd",
            "firstCreatedTime": "1517555991",
            "flagReason": "8",
            "imageDetails": "image1:i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg image2: image3: image4: image5: image6: image7: image8:",
            "image_count": "1",
            "images": "i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg",
            "isFBAppAd": "0",
            "locality_count": "1",
            "masterCheckDate": "1517573542",
            "masterNickname": "null",
            "metaCategoryName": "Mobiles & Tablets",
            "metadata": "id:1998569290 areaNames:23 status:0 imageFlag:1 ATTRSTRING[Ad_Type:offer\nYou_are:Dealer\nCondition:Used\nPrice:6000\nBrand_name:Apple\nNo_of_Sims:Dual\nc2c_pickup:1\nweight_type:LIGHT\nzipcode:560048\nPhysical_Condition:Good -  Minor dents, No scratches on screen, Minor scratches on body\nEscrow_adScore:15\n] userAgent:http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227 [ADSTYLE:B] ",
            "modifiedTime": "1517573542",
            "recentlyViewedTime": "0",
            "referrer": "http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227",
            "repostFrom": "",
            "repostTime": "0",
            "sortable_price": "6000",
            "sourceDevice": "3",
            "userId": "136844940",
            "userIp": "192.168.76.11",
            "verifiedAd": "0",
            "verifiedLeadStatus": "30",
            "verified_mobile": "1",
            "wrongAdType": "0",
            "adQuikrSource": "1",
            "NCACreationValidation": "0",
            "attribute_No_of_Sims": "Dual",
            "attribute_sold": "0",
            "attribute_Brand_name": "Apple",
            "user_email": "stagequikr000@gmail.com",
            "attribute_You_are": "Dealer",
            "attribute_Price": "6000",
            "user_privacy": "0",
            "attribute_weight_type": "LIGHT",
            "attribute_Physical_Condition": [
                "Good -  Minor dents",
                " No scratches on screen",
                " Minor scratches on body"
            ],
            "user_name": "stagequikr",
            "attribute_encrypted": "1N+vU8uSK/LmKlO3tScokwP/s43AlwoDKfbe53nEo9VdCtLESsL0O1eJ0HbqPWMlt1XF2994N6b+t2yS6C9c90lpROTurCc5CSKpOFIuM585t8F1O7RoI7DZJfEwhHCsKzATrbymV1E=",
            "attribute_Condition": "Used",
            "attribute_c2c_pickup": "1",
            "attribute_Ad_Type": "offer",
            "attribute_original_language": "en",
            "user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_zipcode": "560048",
            "user_mobile": "8971404670",
            "user_nickname": "stagequikr000@gmail.com",
            "attribute_user_email": "stagequikr000@gmail.com",
            "attribute_Escrow_adScore": "15",
            "user_fbid": "null",
            "_score": 310100,
            "doc_language": "en"
        },
        {
            "id": "1998569300",
            "title": "5 month old Apple mobile for sale at a price of 6000",
            "content": "5 month old Apple mobile for sale at a price of 6000 The device is inUsed and sold by Individual",
            "cityName": "Bangalore",
            "category_id": "227",
            "category_gid": "149",
            "category_pid": "18224097",
            "category_pgid": "269",
            "city_id": "23",
            "state_id": "1146899",
            "stateName": "Karnataka",
            "status": "0",
            "adStyle": "B",
            "adExpireTime": "1525332049",
            "expireTime": "0",
            "adActionTime": "1517556049",
            "adActionType": "NEW",
            "adEditedTime": "1517556055",
            "adSentCount": "0",
            "ad_locality": "",
            "ad_quality_score": "5.2",
            "admDeleteReviewStatus": "0",
            "admSoldOutModifiedTime": "0",
            "cas": "2",
            "cas_updateTime": "1517573426",
            "category": "cid=227|pcid=18224097|ppcid=23|gid=149|pgid=269|",
            "categoryName": "Mobile Phones",
            "createdTime": "1517556049",
            "deal": "0",
            "deleteReason": "",
            "entityType": "BasicAd",
            "firstCreatedTime": "1517556049",
            "flagReason": "8",
            "imageDetails": "image1:i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg image2: image3: image4: image5: image6: image7: image8:",
            "image_count": "1",
            "images": "i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg",
            "isFBAppAd": "0",
            "locality_count": "1",
            "masterCheckDate": "1517573426",
            "masterNickname": "null",
            "metaCategoryName": "Mobiles & Tablets",
            "metadata": "id:1998569300 areaNames:23 status:0 imageFlag:1 ATTRSTRING[Ad_Type:offer\nYou_are:Dealer\nCondition:Used\nPrice:6000\nBrand_name:Apple\nNo_of_Sims:Dual\nc2c_pickup:1\nzipcode:560048\nPhysical_Condition:Good -  Minor dents, No scratches on screen, Minor scratches on body\nEscrow_adScore:15\n] userAgent:http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227 [ADSTYLE:B] ",
            "modifiedTime": "1517573426",
            "recentlyViewedTime": "0",
            "referrer": "http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227",
            "repostFrom": "",
            "repostTime": "0",
            "sortable_price": "6000",
            "sourceDevice": "3",
            "userId": "136844940",
            "userIp": "192.168.76.11",
            "verifiedAd": "0",
            "verifiedLeadStatus": "30",
            "verified_mobile": "1",
            "wrongAdType": "0",
            "adQuikrSource": "1",
            "NCACreationValidation": "0",
            "attribute_No_of_Sims": "Dual",
            "attribute_sold": "1",
            "attribute_Brand_name": "Apple",
            "user_email": "stagequikr000@gmail.com",
            "attribute_You_are": "Dealer",
            "attribute_Price": "6000",
            "user_privacy": "0",
            "attribute_Physical_Condition": [
                "Good -  Minor dents",
                " No scratches on screen",
                " Minor scratches on body"
            ],
            "user_name": "stagequikr",
            "attribute_encrypted": "1N+vU8uSK/LmKlO3tScokwP/s43AlwoDKfbe53nEo9XZnZshifSoRROl+bV3UPUQsSk0lNf0W7zUDAGjZe8LyUrFRU4bqv4d4fhTlI5ZK/lTNMhC+B9Rv/qIqWiSQG/jrKuXSbeaPqE=",
            "attribute_Condition": "Used",
            "attribute_c2c_pickup": "1",
            "attribute_Ad_Type": "offer",
            "attribute_original_language": "en",
            "user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_zipcode": "560048",
            "user_mobile": "8971404670",
            "user_nickname": "stagequikr000@gmail.com",
            "attribute_user_email": "stagequikr000@gmail.com",
            "attribute_Escrow_adScore": "15",
            "user_fbid": "null",
            "_score": 310100,
            "doc_language": "en"
        },
        {
            "id": "1998569293",
            "title": "5 month old Apple mobile for sale at a price of 6000",
            "content": "5 month old Apple mobile for sale at a price of 6000 The device is inUsed and sold by Individual",
            "cityName": "Bangalore",
            "category_id": "227",
            "category_gid": "149",
            "category_pid": "18224097",
            "category_pgid": "269",
            "city_id": "23",
            "state_id": "1146899",
            "stateName": "Karnataka",
            "status": "0",
            "adStyle": "B",
            "adExpireTime": "1525332012",
            "expireTime": "0",
            "adActionTime": "1517556012",
            "adActionType": "NEW",
            "adEditedTime": "1517556017",
            "adSentCount": "0",
            "ad_locality": "",
            "ad_quality_score": "5.3",
            "admDeleteReviewStatus": "0",
            "admSoldOutModifiedTime": "0",
            "cas": "2",
            "cas_updateTime": "1517573407",
            "category": "cid=227|pcid=18224097|ppcid=23|gid=149|pgid=269|",
            "categoryName": "Mobile Phones",
            "createdTime": "1517556012",
            "deal": "0",
            "deleteReason": "",
            "entityType": "BasicAd",
            "firstCreatedTime": "1517556012",
            "flagReason": "8",
            "imageDetails": "image1:i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg image2: image3: image4: image5: image6: image7: image8:",
            "image_count": "1",
            "images": "i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg",
            "isFBAppAd": "0",
            "locality_count": "1",
            "masterCheckDate": "1517573406",
            "masterNickname": "null",
            "metaCategoryName": "Mobiles & Tablets",
            "metadata": "id:1998569293 areaNames:23 status:0 imageFlag:1 ATTRSTRING[Ad_Type:offer\nYou_are:Dealer\nCondition:Used\nPrice:6000\nBrand_name:Apple\nNo_of_Sims:Dual\nWareHouse_Enabled:1\nquikrscanner:0\nc2c_pickup:1\nzipcode:560045\nPhysical_Condition:Good -  Minor dents, No scratches on screen, Minor scratches on body\nQPS_Paid:1\n] userAgent:http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227 [ADSTYLE:B] ",
            "modifiedTime": "1517573406",
            "recentlyViewedTime": "0",
            "referrer": "http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227",
            "repostFrom": "",
            "repostTime": "0",
            "sortable_price": "6000",
            "sourceDevice": "3",
            "userId": "136844940",
            "userIp": "192.168.2.127",
            "verifiedAd": "0",
            "verifiedLeadStatus": "30",
            "verified_mobile": "1",
            "wrongAdType": "0",
            "adQuikrSource": "1",
            "NCACreationValidation": "0",
            "attribute_No_of_Sims": "Dual",
            "attribute_sold": "1",
            "attribute_Brand_name": "Apple",
            "user_email": "stagequikr000@gmail.com",
            "attribute_You_are": "Dealer",
            "attribute_Price": "6000",
            "user_privacy": "0",
            "attribute_Physical_Condition": [
                "Good -  Minor dents",
                " No scratches on screen",
                " Minor scratches on body"
            ],
            "user_name": "stagequikr",
            "attribute_QPS_Paid": "1",
            "attribute_encrypted": "1N+vU8uSK/LmKlO3tScokwP/s43AlwoDKfbe53nEo9W9mVpVTRb61zpEUBUH0KoMgAND/c5lINPNygTFqNp4j/kfzHVgQ98vqXd5RIwybbdbMHVR2jdcJf0oWqRJNJUSvVKNIbcqqFo=",
            "attribute_Condition": "Used",
            "attribute_quikrscanner": "0",
            "attribute_c2c_pickup": "1",
            "attribute_Ad_Type": "offer",
            "attribute_original_language": "en",
            "user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_zipcode": "560045",
            "user_mobile": "8971404670",
            "user_nickname": "stagequikr000@gmail.com",
            "attribute_user_email": "stagequikr000@gmail.com",
            "attribute_WareHouse_Enabled": "1",
            "user_fbid": "null",
            "_score": 310100,
            "doc_language": "en"
        },
        {
            "id": "1998569292",
            "title": "5 month old Apple mobile for sale at a price of 6000",
            "content": "5 month old Apple mobile for sale at a price of 6000 The device is inUsed and sold by Individual",
            "cityName": "Bangalore",
            "category_id": "227",
            "category_gid": "149",
            "category_pid": "18224097",
            "category_pgid": "269",
            "city_id": "23",
            "state_id": "1146899",
            "stateName": "Karnataka",
            "status": "0",
            "adStyle": "B",
            "adExpireTime": "1525332011",
            "expireTime": "0",
            "adActionTime": "1517556011",
            "adActionType": "NEW",
            "adEditedTime": "0",
            "adSentCount": "0",
            "ad_locality": "",
            "ad_quality_score": "5.2",
            "admDeleteReviewStatus": "0",
            "admSoldOutModifiedTime": "0",
            "cas": "2",
            "cas_updateTime": "1517573389",
            "category": "cid=227|pcid=18224097|ppcid=23|gid=149|pgid=269|",
            "categoryName": "Mobile Phones",
            "createdTime": "1517556011",
            "deal": "0",
            "deleteReason": "",
            "entityType": "BasicAd",
            "firstCreatedTime": "1517556011",
            "flagReason": "8",
            "imageDetails": "image1:i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg image2: image3: image4: image5: image6: image7: image8:",
            "image_count": "1",
            "images": "i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg",
            "isFBAppAd": "0",
            "locality_count": "1",
            "masterCheckDate": "1517573389",
            "masterNickname": "null",
            "metaCategoryName": "Mobiles & Tablets",
            "metadata": "id:1998569292 areaNames:23 status:0 imageFlag:1 ATTRSTRING[Ad_Type:offer\nYou_are:Dealer\nCondition:Used\nPrice:6000\nBrand_name:Apple\nNo_of_Sims:Dual\nzipcode:560048\nPhysical_Condition:Good -  Minor dents, No scratches on screen, Minor scratches on body\nEscrow_adScore:15\n] userAgent:http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227 [ADSTYLE:B] ",
            "modifiedTime": "1517573389",
            "recentlyViewedTime": "0",
            "referrer": "http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227",
            "repostFrom": "",
            "repostTime": "0",
            "sortable_price": "6000",
            "sourceDevice": "3",
            "userId": "136844940",
            "userIp": "192.168.76.11",
            "verifiedAd": "0",
            "verifiedLeadStatus": "30",
            "verified_mobile": "1",
            "wrongAdType": "0",
            "adQuikrSource": "1",
            "NCACreationValidation": "0",
            "attribute_No_of_Sims": "Dual",
            "attribute_sold": "0",
            "attribute_Brand_name": "Apple",
            "user_email": "stagequikr000@gmail.com",
            "attribute_You_are": "Dealer",
            "attribute_Price": "6000",
            "user_privacy": "0",
            "attribute_Physical_Condition": [
                "Good -  Minor dents",
                " No scratches on screen",
                " Minor scratches on body"
            ],
            "user_name": "stagequikr",
            "attribute_encrypted": "1N+vU8uSK/LmKlO3tScokwP/s43AlwoDKfbe53nEo9URjHD6YGmNh19cfVs7rEtVXrjPask4u8KozFw7qbI3zm53CmUpaZRThM1jpiZ4QqLWWq/N7JsLb5H/90jQL0FYxdcCw1kPrcU=",
            "attribute_Condition": "Used",
            "attribute_Ad_Type": "offer",
            "attribute_original_language": "en",
            "user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_zipcode": "560048",
            "user_mobile": "8971404670",
            "user_nickname": "stagequikr000@gmail.com",
            "attribute_user_email": "stagequikr000@gmail.com",
            "attribute_Escrow_adScore": "15",
            "user_fbid": "null",
            "_score": 310100,
            "doc_language": "en"
        },
        {
            "id": "1998569306",
            "title": "5 month old Apple mobile for sale at a price of 6000",
            "content": "5 month old Apple mobile for sale at a price of 6000 The device is inUsed and sold by Individual",
            "cityName": "Bangalore",
            "category_id": "227",
            "category_gid": "149",
            "category_pid": "18224097",
            "category_pgid": "269",
            "city_id": "23",
            "state_id": "1146899",
            "stateName": "Karnataka",
            "status": "0",
            "adStyle": "B",
            "adExpireTime": "1525332056",
            "expireTime": "0",
            "adActionTime": "1517556056",
            "adActionType": "NEW",
            "adEditedTime": "0",
            "adSentCount": "0",
            "ad_locality": "",
            "ad_quality_score": "5.2",
            "admDeleteReviewStatus": "0",
            "admSoldOutModifiedTime": "0",
            "cas": "2",
            "cas_updateTime": "1517573175",
            "category": "cid=227|pcid=18224097|ppcid=23|gid=149|pgid=269|",
            "categoryName": "Mobile Phones",
            "createdTime": "1517556056",
            "deal": "0",
            "deleteReason": "",
            "entityType": "BasicAd",
            "firstCreatedTime": "1517556056",
            "flagReason": "8",
            "imageDetails": "image1:i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg image2: image3: image4: image5: image6: image7: image8:",
            "image_count": "1",
            "images": "i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg",
            "isFBAppAd": "0",
            "locality_count": "1",
            "masterCheckDate": "1517573175",
            "masterNickname": "null",
            "metaCategoryName": "Mobiles & Tablets",
            "metadata": "id:1998569306 areaNames:23 status:0 imageFlag:1 ATTRSTRING[Ad_Type:offer\nYou_are:Dealer\nCondition:Used\nPrice:6000\nBrand_name:Apple\nNo_of_Sims:Dual\nc2c_pickup:1\nzipcode:560048\nPhysical_Condition:Good -  Minor dents, No scratches on screen, Minor scratches on body\nEscrow_adScore:15\n] userAgent:http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227 [ADSTYLE:B] ",
            "modifiedTime": "1517573175",
            "recentlyViewedTime": "0",
            "referrer": "http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227",
            "repostFrom": "",
            "repostTime": "0",
            "sortable_price": "6000",
            "sourceDevice": "3",
            "userId": "136844940",
            "userIp": "192.168.76.11",
            "verifiedAd": "0",
            "verifiedLeadStatus": "30",
            "verified_mobile": "1",
            "wrongAdType": "0",
            "adQuikrSource": "1",
            "NCACreationValidation": "0",
            "attribute_No_of_Sims": "Dual",
            "attribute_sold": "0",
            "attribute_Brand_name": "Apple",
            "user_email": "stagequikr000@gmail.com",
            "attribute_You_are": "Dealer",
            "attribute_Price": "6000",
            "user_privacy": "0",
            "attribute_Physical_Condition": [
                "Good -  Minor dents",
                " No scratches on screen",
                " Minor scratches on body"
            ],
            "user_name": "stagequikr",
            "attribute_encrypted": "1N+vU8uSK/LmKlO3tScokwP/s43AlwoDKfbe53nEo9VoPBGXBAo45CJRRPd7uy0MC2Ppy45NV+0u7DNBrjn6bWYy9z6IdoCbBLW+N4uTQAt4zaglAC05dAQzOCPwicl+VMANcldZQXI=",
            "attribute_Condition": "Used",
            "attribute_c2c_pickup": "1",
            "attribute_Ad_Type": "offer",
            "attribute_original_language": "en",
            "user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_zipcode": "560048",
            "user_mobile": "8971404670",
            "user_nickname": "stagequikr000@gmail.com",
            "attribute_user_email": "stagequikr000@gmail.com",
            "attribute_Escrow_adScore": "15",
            "user_fbid": "null",
            "_score": 310100,
            "doc_language": "en"
        },
        {
            "id": "1998569287",
            "title": "5 month old Apple mobile for sale at a price of 6000",
            "content": "5 month old Apple mobile for sale at a price of 6000 The device is inUsed and sold by Individual",
            "cityName": "Bangalore",
            "category_id": "227",
            "category_gid": "149",
            "category_pid": "18224097",
            "category_pgid": "269",
            "city_id": "23",
            "state_id": "1146899",
            "stateName": "Karnataka",
            "status": "0",
            "adStyle": "B",
            "adExpireTime": "1525331948",
            "expireTime": "0",
            "adActionTime": "1517555948",
            "adActionType": "NEW",
            "adEditedTime": "1517555954",
            "adSentCount": "0",
            "ad_locality": "",
            "ad_quality_score": "5.3",
            "admDeleteReviewStatus": "0",
            "admSoldOutModifiedTime": "0",
            "cas": "2",
            "cas_updateTime": "1517572755",
            "category": "cid=227|pcid=18224097|ppcid=23|gid=149|pgid=269|",
            "categoryName": "Mobile Phones",
            "createdTime": "1517555948",
            "deal": "0",
            "deleteReason": "",
            "entityType": "BasicAd",
            "firstCreatedTime": "1517555948",
            "flagReason": "8",
            "imageDetails": "image1:i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg image2: image3: image4: image5: image6: image7: image8:",
            "image_count": "1",
            "images": "i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg",
            "isFBAppAd": "0",
            "locality_count": "1",
            "masterCheckDate": "1517572755",
            "masterNickname": "null",
            "metaCategoryName": "Mobiles & Tablets",
            "metadata": "id:1998569287 areaNames:23 status:0 imageFlag:1 ATTRSTRING[Ad_Type:offer\nYou_are:Dealer\nCondition:Used\nPrice:6000\nBrand_name:Apple\nNo_of_Sims:Dual\nWareHouse_Enabled:1\nc2c_pickup:1\nzipcode:560045\nPhysical_Condition:Good -  Minor dents, No scratches on screen, Minor scratches on body\nEscrow_adScore:15\n] userAgent:http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227 [ADSTYLE:B] ",
            "modifiedTime": "1517572755",
            "recentlyViewedTime": "0",
            "referrer": "http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227",
            "repostFrom": "",
            "repostTime": "0",
            "sortable_price": "6000",
            "sourceDevice": "3",
            "userId": "136844940",
            "userIp": "192.168.2.127",
            "verifiedAd": "0",
            "verifiedLeadStatus": "30",
            "verified_mobile": "1",
            "wrongAdType": "0",
            "adQuikrSource": "1",
            "NCACreationValidation": "0",
            "attribute_No_of_Sims": "Dual",
            "attribute_sold": "1",
            "attribute_Brand_name": "Apple",
            "user_email": "stagequikr000@gmail.com",
            "attribute_You_are": "Dealer",
            "attribute_Price": "6000",
            "user_privacy": "0",
            "attribute_Physical_Condition": [
                "Good -  Minor dents",
                " No scratches on screen",
                " Minor scratches on body"
            ],
            "user_name": "stagequikr",
            "attribute_encrypted": "1N+vU8uSK/LmKlO3tScokwP/s43AlwoDKfbe53nEo9Wim5mTaE2FN74i57i97v/TGtSapK69kQ/iI9GzlgmQioC7gOdMC04njZUjV5rvbrB75n/b3Z+hRxqUi3q052WVfEXBzXEAqkY=",
            "attribute_Condition": "Used",
            "attribute_c2c_pickup": "1",
            "attribute_Ad_Type": "offer",
            "attribute_original_language": "en",
            "user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_zipcode": "560045",
            "user_mobile": "8971404670",
            "user_nickname": "stagequikr000@gmail.com",
            "attribute_user_email": "stagequikr000@gmail.com",
            "attribute_WareHouse_Enabled": "1",
            "attribute_Escrow_adScore": "15",
            "user_fbid": "null",
            "_score": 310100,
            "doc_language": "en"
        },
        {
            "id": "1998569285",
            "title": "5 month old Apple mobile for sale at a price of 6000",
            "content": "5 month old Apple mobile for sale at a price of 6000 The device is inUsed and sold by Individual",
            "cityName": "Bangalore",
            "category_id": "227",
            "category_gid": "149",
            "category_pid": "18224097",
            "category_pgid": "269",
            "city_id": "23",
            "state_id": "1146899",
            "stateName": "Karnataka",
            "status": "0",
            "adStyle": "B",
            "adExpireTime": "1525331911",
            "expireTime": "0",
            "adActionTime": "1517555911",
            "adActionType": "NEW",
            "adEditedTime": "1517555916",
            "adSentCount": "0",
            "ad_locality": "",
            "ad_quality_score": "5.3",
            "admDeleteReviewStatus": "0",
            "admSoldOutModifiedTime": "0",
            "cas": "2",
            "cas_updateTime": "1517572596",
            "category": "cid=227|pcid=18224097|ppcid=23|gid=149|pgid=269|",
            "categoryName": "Mobile Phones",
            "createdTime": "1517555911",
            "deal": "0",
            "deleteReason": "",
            "entityType": "BasicAd",
            "firstCreatedTime": "1517555911",
            "flagReason": "8",
            "imageDetails": "image1:i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg image2: image3: image4: image5: image6: image7: image8:",
            "image_count": "1",
            "images": "i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg",
            "isFBAppAd": "0",
            "locality_count": "1",
            "masterCheckDate": "1517572596",
            "masterNickname": "null",
            "metaCategoryName": "Mobiles & Tablets",
            "metadata": "id:1998569285 areaNames:23 status:0 imageFlag:1 ATTRSTRING[Ad_Type:offer\nYou_are:Dealer\nCondition:Used\nPrice:6000\nBrand_name:Apple\nNo_of_Sims:Dual\nWareHouse_Enabled:1\nquikrscanner:0\nc2c_pickup:1\nweight_type:LIGHT\nzipcode:560045\nPhysical_Condition:Good -  Minor dents, No scratches on screen, Minor scratches on body\nEscrow_adScore:15\nQPS_Paid:1\n] userAgent:http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227 [ADSTYLE:B] ",
            "modifiedTime": "1517572596",
            "recentlyViewedTime": "0",
            "referrer": "http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227",
            "repostFrom": "",
            "repostTime": "0",
            "sortable_price": "6000",
            "sourceDevice": "3",
            "userId": "136844940",
            "userIp": "192.168.2.127",
            "verifiedAd": "0",
            "verifiedLeadStatus": "30",
            "verified_mobile": "1",
            "wrongAdType": "0",
            "adQuikrSource": "1",
            "NCACreationValidation": "0",
            "attribute_No_of_Sims": "Dual",
            "attribute_sold": "1",
            "attribute_weight_type": "LIGHT",
            "attribute_Physical_Condition": [
                "Good -  Minor dents",
                " No scratches on screen",
                " Minor scratches on body"
            ],
            "user_name": "stagequikr",
            "attribute_quikrscanner": "0",
            "attribute_Ad_Type": "offer",
            "attribute_original_language": "en",
            "user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_zipcode": "560045",
            "user_mobile": "8971404670",
            "user_nickname": "stagequikr000@gmail.com",
            "attribute_WareHouse_Enabled": "1",
            "attribute_Escrow_adScore": "15",
            "attribute_Brand_name": "Apple",
            "user_email": "stagequikr000@gmail.com",
            "attribute_You_are": "Dealer",
            "attribute_Price": "6000",
            "user_privacy": "0",
            "attribute_QPS_Paid": "1",
            "attribute_encrypted": "1N+vU8uSK/LmKlO3tScokwP/s43AlwoDKfbe53nEo9VAnyGiNDdVQb5vVk+0x5ydmUm15IZd5yZTwdCOQPpxWFJ3v9klkuDiPjx6T8/3MfepQoGJ1TxJUkYbQzoXRTVc64k87pze/J4=",
            "attribute_Condition": "Used",
            "attribute_c2c_pickup": "1",
            "attribute_user_email": "stagequikr000@gmail.com",
            "user_fbid": "null",
            "_score": 310100,
            "doc_language": "en"
        },
        {
            "id": "1998569284",
            "title": "5 month old Apple mobile for sale at a price of 6000",
            "content": "5 month old Apple mobile for sale at a price of 6000 The device is inUsed and sold by Individual",
            "cityName": "Mumbai",
            "category_id": "1043",
            "category_gid": "149",
            "category_pid": "18224598",
            "category_pgid": "269",
            "city_id": "31",
            "state_id": "1146903",
            "stateName": "Maharashtra",
            "status": "0",
            "adStyle": "B",
            "adExpireTime": "1525331867",
            "expireTime": "0",
            "adActionTime": "1517555867",
            "adActionType": "NEW",
            "adEditedTime": "1517555877",
            "adSentCount": "0",
            "ad_locality": "",
            "ad_quality_score": "5.3",
            "admDeleteReviewStatus": "0",
            "admSoldOutModifiedTime": "0",
            "cas": "2",
            "cas_updateTime": "1517572327",
            "category": "cid=1043|pcid=18224598|ppcid=31|gid=149|pgid=269|",
            "categoryName": "Mobile Phones",
            "createdTime": "1517555867",
            "deal": "0",
            "deleteReason": "",
            "entityType": "BasicAd",
            "firstCreatedTime": "1517555867",
            "flagReason": "8",
            "imageDetails": "image1:i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg image2: image3: image4: image5: image6: image7: image8:",
            "image_count": "1",
            "images": "i4/20150310/5-month-old-Apple-mobile-for-sale-at-a-price-of-6000-ak_753832050-1425986360nr424x318sm124x93sq88x66gv262x175.jpeg",
            "isFBAppAd": "0",
            "locality_count": "1",
            "masterCheckDate": "1517572327",
            "masterNickname": "null",
            "metaCategoryName": "Mobiles & Tablets",
            "metadata": "id:1998569284 areaNames:31 status:0 imageFlag:1 ATTRSTRING[Ad_Type:offer\nYou_are:Dealer\nCondition:Used\nPrice:6000\nBrand_name:Apple\nNo_of_Sims:Dual\nWareHouse_Enabled:1\nquikrscanner:0\nc2c_pickup:1\nweight_type:LIGHT\nzipcode:560045\nPhysical_Condition:Good -  Minor dents, No scratches on screen, Minor scratches on body\nEscrow_adScore:15\nQPS_Paid:1\n] userAgent:http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227 [ADSTYLE:B] ",
            "modifiedTime": "1517572327",
            "recentlyViewedTime": "0",
            "referrer": "http:\\//bangalore.quikr.com\\/post-classifieds-ads\\/?postadcategoryid=227",
            "repostFrom": "",
            "repostTime": "0",
            "sortable_price": "6000",
            "sourceDevice": "3",
            "userId": "136844940",
            "userIp": "192.168.2.127",
            "verifiedAd": "0",
            "verifiedLeadStatus": "30",
            "verified_mobile": "1",
            "wrongAdType": "0",
            "adQuikrSource": "1",
            "NCACreationValidation": "0",
            "attribute_No_of_Sims": "Dual",
            "attribute_sold": "1",
            "attribute_weight_type": "LIGHT",
            "attribute_Physical_Condition": [
                "Good -  Minor dents",
                " No scratches on screen",
                " Minor scratches on body"
            ],
            "user_name": "stagequikr",
            "attribute_quikrscanner": "0",
            "attribute_Ad_Type": "offer",
            "attribute_original_language": "en",
            "user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_user_dEmail": "sfxgajiwtsmohit1gosqyikr@quikr.com",
            "attribute_zipcode": "560045",
            "user_mobile": "8971404670",
            "user_nickname": "stagequikr000@gmail.com",
            "attribute_WareHouse_Enabled": "1",
            "attribute_Escrow_adScore": "15",
            "attribute_Brand_name": "Apple",
            "user_email": "stagequikr000@gmail.com",
            "attribute_You_are": "Dealer",
            "attribute_Price": "6000",
            "user_privacy": "0",
            "attribute_QPS_Paid": "1",
            "attribute_encrypted": "1N+vU8uSK/LmKlO3tScokwP/s43AlwoDKfbe53nEo9XHVR7JfDbDxuMJrCsPUgolk/SqP5gKcwXB03f2kL3dr1cpqXWJPRJcwvzJhJ8fsh3pG34uifJ+CeQ5ZhIoQJennn7Sg3c4FVQ=",
            "attribute_Condition": "Used",
            "attribute_c2c_pickup": "1",
            "attribute_user_email": "stagequikr000@gmail.com",
            "user_fbid": "null",
            "_score": 310100,
            "doc_language": "en"
        }
    ],
    "quikrx_docs": [],
    "inferred": {
        "city": {
            "id": 23,
            "name": "Bangalore"
        },
        "locality": null,
        "cityList": null,
        "state": null
    }
}`)


  return new Promise((resolve, reject) => {
    request
      .post('http://192.168.124.124:8999/search-ads')
      .send({
       "keywords": "cars in bangalore",
       "filters": {
         "city_id": 23,
         "status": 0,
         "category_pgid": 269
       },
       "not_filters": {
         "NCACreationValidation": 1
       },
       "normalized": true,
       "source": "Desktop",
       "caller": "browse",
       "city": "Bangalore",
       "from": 0,
       "size": 10,
       "userSearch": false,
       "facets":["status","category_gid","attribute_Ad_Type","attribute_Style"],
       "abTestEnable":["nationwide-city"],
       "aggs": [
        {
        "type": "geohash_grid",
        "field":     "geo_pin",
       "precision": 6,
       "size": 32,
       "aggs": {
        "type": "geo_bounds",
        "field":     "geo_pin"
       }
        },
        {
        "type": "term",
        "field":  "category_pid",
        "aggs": {
        "type": "term",
        "field":  "attribute_You_are"
        }
        }
       ]
     })
      .set('content-type', 'application/json')
      .set('x-quikr-client', 'msite')
      .end((err, res) => {
        err ? reject(err) : resolve(res);
      })
  })
})

}

module.exports.search = search