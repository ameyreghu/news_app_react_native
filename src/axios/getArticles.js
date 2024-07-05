import axios from "axios";
import { apiKey } from "../constants/constants";

async function getArticles({country,category}) {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`);
      //  const response=mockData;
        console.log('api data');
        return { sucess:true,data:response.data.articles}
    } catch (e) {
        console.log("Error");
        console.log(e.response);
        return{sucess:false,error:e.response.data.message};
    }

}

export default getArticles;


const mockData={
   "data": {
    "status": "ok",
    "totalResults": 38,
    "articles": [
      {
        "source": {
          "id": null,
          "name": "News18"
        },
        "author": "Shahrukh Shah",
        "title": "BMW 5 Series LWB Booking Kickstarted in India, Launch Date Set for June 24 - News18",
        "description": "It has been reported that the upcoming model will not replace the current 5 Series. However, it will be introduced to offer more choices for the target audience.",
        "url": "https://www.news18.com/auto/bmw-5-series-lwb-booking-kickstarted-in-india-launch-date-set-for-june-24-8941112.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/06/new-project-1-2-2024-06-16t184139.039-2024-06-a58953443f55eeeaff02104432a29781-16x9.jpg?impolicy=website&width=1200&height=675",
        "publishedAt": "2024-06-22T12:13:30Z",
        "content": "The BMW Long Wheel Base (LWB) is all set to hit the Indian market on June 25. As the launch is just around the corner, the company has started advance bookings for the model. The fully transformed mo… [+1515 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "HT Sports Desk",
        "title": "India vs Bangladesh Live Score, T20 World Cup 2024: Rohit-Kohli stand in focus - Hindustan Times",
        "description": "India vs Bangladesh Live Score, T20 World Cup 2024: Rohit Sharma and Virat Kohli would be looking to get a good opening partnership.",
        "url": "https://www.hindustantimes.com/cricket/india-vs-bangladesh-live-score-t20-world-cup-2024-match-today-47-ind-vs-ban-t20-world-cup-live-super-8-scorecard-22-june-101719050198073.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/22/550x309/CRICKET-T20-IND-PAK--32_1719058105270_1719058127461.JPG",
        "publishedAt": "2024-06-22T12:10:15Z",
        "content": "India vs Bangladesh Live Score, T20 World Cup 2024: India face Bangladesh at the Sir Vivian Richards Stadium in Antigua in what will be the second Super Eight match of the 2024 T20 World Cup for both… [+10365 chars]"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "TOI Sports Desk",
        "title": "Furious Shoaib Akhtar wants to know 'who was the Einstein' that brought Babar Azam back as captain - The Times of India",
        "description": "Pakistan's disastrous T20 World Cup campaign in the USA has expectedly triggered a backlash against the players, who are being criticised for taking t",
        "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-mens-t20-world-cup/furious-shoaib-akhtar-wants-to-know-who-was-the-einstein-that-brought-babar-azam-back-as-captain/articleshow/111190748.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-111190750,width-1070,height-580,imgsize-34046,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2024-06-22T11:54:00Z",
        "content": null
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "TOI World Desk",
        "title": "At least 42 killed in Israeli attack on Gaza's Al-Shati refugee camp - The Times of India",
        "description": "Middle East News: NEW DELHI: At least 42 people were killed in Israeli attacks on Gaza's Al-Tuffah neighborhood and Al-Shati refugee camp, Reuters reported citing the d.",
        "url": "https://timesofindia.indiatimes.com/world/middle-east/israel-gaza-israel-attack-al-shati-refugee-camp-al-tuffah-neighborhood-israel-gaza-war/articleshow/111190233.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-111190231,width-1070,height-580,imgsize-21196,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2024-06-22T11:26:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Moneycontrol"
        },
        "author": "Sandip Chakraborty",
        "title": "Microsoft’s new AI-powered Copilot+ PCs are now available for purchase: All the details - Moneycontrol",
        "description": "Microsoft’s new Surface laptop and Surface Pro are powered by the Snapdragon X series processors and are loaded with AI-driven capabilities.",
        "url": "https://www.moneycontrol.com/technology/microsofts-new-ai-powered-copilot-pcs-are-now-available-for-purchase-all-the-details-article-12754174.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/06/20240622110040_windows-AigsWJmvoEo-unsplash-2.jpg",
        "publishedAt": "2024-06-22T11:04:40Z",
        "content": "Microsoft has launched its new Copilot+ PCs, the companys first artificial intelligence (AI)-powered devices. The tech giant describes these Copilot+ PCs as a new category of Windows PCs designed for… [+1411 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": null,
        "title": "\"They Return To India, Become Billionaires\": Trump On Green Cards For Grads - NDTV",
        "description": "Softening his stance on immigration, former US President Donald Trump has promised to give automatic green cards to foreign students who graduate from US colleges.",
        "url": "https://www.ndtv.com/world-news/they-return-to-india-china-become-billionaires-donald-trump-dangles-green-cards-to-foreign-graduates-5945587",
        "urlToImage": "https://c.ndtvimg.com/2024-06/trbnmngo_donald-trump_625x300_02_June_24.jpeg",
        "publishedAt": "2024-06-22T10:48:32Z",
        "content": "Trump always supported a merit-based legal immigration system. (File)\r\nWashington: Softening his stance on immigration, former US President Donald Trump has promised to give automatic green cards to … [+5633 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "Mahima Pandey",
        "title": "Maharaj on OTT: Aamir Khan’s son Junaid Khan’s debut leaves Twitterati mighty impressed; fans say ‘an actor is born’ - Hindustan Times",
        "description": "Junaid Khan’s debut film Maharaj, which was delayed due to a stay order, has finally been released on OTT. Here’s what the internet thinks of Aamir Khan’s son",
        "url": "https://www.hindustantimes.com/htcity/cinema/maharaj-on-ott-aamir-khan-s-son-junaid-khan-s-debut-leaves-twitterati-mighty-impressed-fans-say-an-actor-is-born-101719051900845.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/22/1600x900/Maharaj_1719052359918_1719052372439.jpg",
        "publishedAt": "2024-06-22T10:43:41Z",
        "content": "Of the many star kid debuts this year, Aamir Khans son Junaid Khans entry into the Hindi film industry as an actor was among the most anticipated. His first look for the film Maharaj, which also star… [+2204 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Indian Express"
        },
        "author": "The Indian Express",
        "title": "How to mitigate the effects of heat on menstrual health - The Indian Express",
        "description": null,
        "url": "https://indianexpress.com/web-stories/wellness/expert-advice-for-mitigating-the-effects-of-heat-on-menstrual-health/9404615/",
        "urlToImage": null,
        "publishedAt": "2024-06-22T10:30:49Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": null,
        "title": "'Solver Gang' Behind NEET Paper Leak, Cops Arrest Mastermind Ravi Atri - NDTV",
        "description": "Ravi Atri, the alleged mastermind behind the NEET-UG 2024 exam paper leak, has been arrested by the Uttar Pradesh Special Task Force (STF) amid nationwide protests by students seeking a probe into the exam.",
        "url": "https://www.ndtv.com/india-news/neet-exam-leak-live-updates-ravi-atri-the-alleged-fixer-behind-neet-exam-paper-leak-5945332",
        "urlToImage": "https://c.ndtvimg.com/2024-06/7jd8qov_neet-exam-protest_625x300_22_June_24.jpeg?ver-20240615.100",
        "publishedAt": "2024-06-22T10:08:03Z",
        "content": "Amid the NEET exam row, students have been protesting across India.\r\nNew Delhi: Ravi Atri, the alleged mastermind behind the NEET-UG 2024 exam paper leak, has been arrested by the Uttar Pradesh Speci… [+2134 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "HT News Desk",
        "title": "Centre sets up high-level panel to ensure transparent, smooth conduct of exams amid NEET, UGC-NET row - Hindustan Times",
        "description": "The Ministry of Education announced a high-level committee of experts to ensure transparent smooth and fair conduct of examinations | Latest News India",
        "url": "https://www.hindustantimes.com/india-news/centre-sets-up-high-level-panel-to-ensure-transparent-smooth-conduct-of-exams-amid-neet-ugc-net-rows-101719049306865.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/22/1600x900/Education_minister_Dharmendra_Pradhan_1719049416000_1719049416204.jpg",
        "publishedAt": "2024-06-22T09:45:15Z",
        "content": "The Ministry of Education on Saturday announced a high-level committee of experts to ensure transparent smooth and fair conduct of examinations amid the NEET and UGC-NET row. \r\nThe panel of experts w… [+2130 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "YouTube"
        },
        "author": null,
        "title": "Israel-Hezbollah conflict: UN Chief António Guterres condemns Israel-Hezbollah war | WION - WION",
        "description": null,
        "url": "https://www.youtube.com/watch?v=4MZksNy_PjE",
        "urlToImage": null,
        "publishedAt": "2024-06-22T09:42:39Z",
        "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "HT News Desk",
        "title": "PM Narendra Modi after bilateral meeting with Sheikh Hasina: 'Focus on connectivity, commerce, collaboration' - Hindustan Times",
        "description": "PM Modi said the neighbouring country is situated at the confluence of Neighbourhood First Policy, Act East Policy, Vision Sagar and Indo-Pacific Vision. | Latest News India",
        "url": "https://www.hindustantimes.com/india-news/pm-narendra-modi-sheikh-hasina-discuss-defence-blue-economy-terrorism-in-bilateral-meeting-in-delhi-101719046874040.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/22/1600x900/ANI-20240622083-0_1719047094556_1719047132323.jpg",
        "publishedAt": "2024-06-22T09:10:56Z",
        "content": "Prime Minister Narendra Modi and Bangladesh Prime Minister Sheikh Hasinaon Saturday discussed furthering defence ties, defence production, cooperation on counter-terrorism, management of the border a… [+2961 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Indian Express"
        },
        "author": "The Indian Express",
        "title": "Oil bottles vs sprays: Which is the healthier alternative for your kitchen cabinet? - The Indian Express",
        "description": null,
        "url": "https://indianexpress.com/article/lifestyle/health/oil-bottles-sprays-healthier-kitchen-cabinet-9387730/",
        "urlToImage": null,
        "publishedAt": "2024-06-22T09:01:18Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": "Press Trust of India",
        "title": "Afghanistan Players Cook Their Own Food In Barbados. Here Is The Reason - NDTV Sports",
        "description": "The non-availability of halal meat, a must-have in their menu, in their Bridgetown hotel forced Afghanistan cricket team stars to temporarily wear a chef's apron.",
        "url": "https://sports.ndtv.com/cricket/how-lack-of-halal-meat-turned-afghanistan-cricketers-into-chefs-in-bridgetown-5939674",
        "urlToImage": "https://c.ndtvimg.com/2024-06/ggchlsd_v_625x300_21_June_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
        "publishedAt": "2024-06-22T08:29:36Z",
        "content": "For the Afghanistan cricketers, it was a meatball-sized problem to fork through! The non-availability of halal meat, a must-have in their menu, in their Bridgetown hotel forced them to temporarily we… [+2464 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": null,
        "title": "Inside Sonakshi Sinha And Zaheer Iqbal's Pre-Wedding Festivities. See New Pic - NDTV Movies",
        "description": "Sonakshi Sinha's wedding festivities began earlier this week",
        "url": "https://www.ndtv.com/entertainment/inside-sonakshi-sinha-and-zaheer-iqbals-pre-wedding-festivities-see-new-pic-5944657",
        "urlToImage": "https://c.ndtvimg.com/2024-06/fl2rc248_sonakshi_625x300_22_June_24.jpeg",
        "publishedAt": "2024-06-22T08:01:44Z",
        "content": "Sonakshi and Zaheer with friends. (courtesy: mishraprachi)\r\nNew Delhi: The big, fat wedding festivities of actor Sonakshi Sinha and her longtime boyfriend Zaheer Iqbal started with a bang earlier thi… [+1693 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": null,
        "title": "Astronaut Sunita Williams' Return From Space Delayed Due To Spacecraft Glitches - NDTV",
        "description": "The American space agency NASA has confirmed that the return of the Indian origin astronaut Sunita Williams from the International Space Station (ISS) has been further delayed and no new date has been set for her \"happy landing\".",
        "url": "https://www.ndtv.com/world-news/sunita-williams-return-from-space-delayed-due-to-spacecraft-glitches-5944651",
        "urlToImage": "https://c.ndtvimg.com/2024-06/i67p751_sunita-williams_625x300_22_June_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240615.100",
        "publishedAt": "2024-06-22T08:00:45Z",
        "content": "The American space agency NASA has confirmed that the return of Indian origin astronaut Sunita Williams from the International Space Station (ISS) has been further delayed and no new date has been se… [+4724 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Abplive.com"
        },
        "author": "ABP News Bureau",
        "title": "Garena Free Fire Max: Exclusive Redeem Codes Unveiled For June 22. Here's How To Use - ABP Live",
        "description": "Garena Free Fire Max redeem codes can unlock a handful of goodies, including weapons and skins.",
        "url": "https://news.abplive.com/gaming/garena-free-fire-max-redeem-codes-jun-22-june-2024-daily-free-rewards-1697470",
        "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2024/05/04/149723170340519d3701120d3a01ed9a1714816183348925_original.jpg?impolicy=abp_cdn&imwidth=1200",
        "publishedAt": "2024-06-22T08:00:38Z",
        "content": "In the ever-evolving landscape of Garena Free Fire Max, a highly anticipated event unfolded on June 22, 2024. During this noteworthy occasion, redemption codes were unveiled, presenting players with … [+2715 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Free Press Journal"
        },
        "author": "G R Mukesh",
        "title": "Budget Battle: OPPO A3 Pro 5G Launched In India - Free Press Journal",
        "description": "Budget Battle: OPPO A3 Pro 5G Launched In India",
        "url": "https://www.freepressjournal.in/ampstories/photo-gallery/budget-battle-oppo-a3-pro-5g-launched-in-india",
        "urlToImage": "https://media.assettype.com/freepressjournal/2024-06/f477f4c9-e70e-4214-9228-651e4d51dc21/Untitled_design___2024_06_22T131048_208.jpg?rect=0%2C0%2C3900%2C2048&w=1200&auto=format%2Ccompress&ogImage=true",
        "publishedAt": "2024-06-22T07:59:51Z",
        "content": "The phone features a 6.67-inch display with a 120Hz refresh rate, 180Hz touch response, and 1,000 nits peak brightness."
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "TOI City Desk",
        "title": "Police deploy water cannons on protesters amid severe water crisis in Delhi - The Times of India",
        "description": "BJP leader Ramesh Bidhuri led a protest at the Jal Board filling pump in Okhla amidst the severe water crisis in Delhi. The protesters, voicing frustr",
        "url": "https://timesofindia.indiatimes.com/city/delhi/police-deploy-water-cannons-on-protesters-amid-severe-water-crisis-in-delhi/articleshow/111185741.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-111185716,width-1070,height-580,imgsize-3079914,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2024-06-22T07:41:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Koimoi"
        },
        "author": "Joginder Tuteja",
        "title": "Chandu Champion Box Office Collection Day 8: Grows Again On Second Friday - Koimoi",
        "description": "Chandu Champion had been maintaining collections over 3 crores on each of the weekdays.",
        "url": "https://www.koimoi.com/box-office/box-office-chandu-champion-grows-again-on-second-friday/",
        "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2024/06/box-office-chandu-champion-grows-again-on-second-friday-001.jpg",
        "publishedAt": "2024-06-22T07:10:16Z",
        "content": "Box Office – Chandu Champion grows again on second Friday (Photo Credit YouTube)\r\nChandu Champion had been maintaining collections over 3 crores on each of the weekdays. Now on its second Friday, the… [+1631 chars]"
      }
    ]
  }};