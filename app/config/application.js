/*
 *  Copyright 2012 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

module.exports = {

  /*
  TODO: Change all of the values here with your app's own credentials
        Refer to https://github.com/twitter/ospriet/wiki/Customizing-Ospriet for help
  */

  /* Application configuration */
  twitter_app: {
      consumer_key:         process.env.CONSUMER_KEY
    , consumer_secret:      process.env.CONSUMER_SECRET
    , access_token_key:     process.env.ACCESS_TOKEN_KEY
    , access_token_secret:  process.env.ACCESS_TOKEN_SECRET
  }
/*
  , twitter_account: {
      id:           '464190087'
    , screen_name:  'eventradar'
  }
*/
  , twitter_account: {
      id:           '620288157'
    , screen_name:  'askY2B'
  }

  , moderators: [
    {
      id_str: '37946833'
    , screen_name: 'rrodrigu3z'
    }
  ]

  , blacklist: [
    {
      id_str: ''
    , screen_name: ''
    }
  ]

  /* Site/UI configuration */
  , site: {
      raw_url:          'http://asky2b.eventradar.com.ve'
    , display_url:      'asky2b.eventradar.com.ve'
    , google_analytics: 'UA-30200296-1'
  }

  , event: {
      title:        'VenezuelaY2B'
    , description:  'Debatiendo sobre los jóvenes y el emprendimiento en Venezuela.'
    , instructions: '<strong>Postula tu pregunta escribiendo un tweet a <a href="https://twitter.com/intent/user?screen_name=askY2B" title="Preguntas Y2B">@askY2B</a> con el botón de abajo. Revisa las propuestas y marca como favoritas las que quieras que respondan</strong>. El moderador seleccionará de las mas votadas.'
    , time:         'Viernes, 29/6, 11:00am'
    , location:     'Universidad Metropolitana, Caracas.'
    , details_url:  'http://www.eventradar.com.ve/events/venezuelaY2B'
  }

  , participants: [
    {
        name:     'Ricardo Rodríguez'
      , title:    'Co-Fundador, Event Radar'
      , twitter:  'rrodrigu3z'
      , img_url:  'ricardo.png'
      , role:     'Moderador'
    }
    , {
        name:     'Natasha Montero'
      , title:    'Co-Fundador, Event Radar'
      , twitter:  'monsha'
      , img_url:  'natasha.jpg'
      , role:     'Panelista'
    }
  ]
}