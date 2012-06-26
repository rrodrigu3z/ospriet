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
      consumer_key:         'yCkPLfZNiKUVokoVrsvA'
    , consumer_secret:      'NuGmrHQwYji7KPKAhk1XCsUgmkgXcdTs0YfXThCP8'
    , access_token_key:     '606708565-hJJ2494BW7UeZacCqpLwThndIYVrZWN6M7MgpIUA'
    , access_token_secret:  '4oF24TlK2TuaEjUdwvPho3CyESGhIbW6CdLKE'
  }
/*
  , twitter_account: {
      id:           '464190087'
    , screen_name:  'eventradar'
  }
*/
  , twitter_account: {
      id:           '606708565'
    , screen_name:  'EventRadarDev'
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
      raw_url:          'http://y2bve.eventradar.com.ve'
    , display_url:      'y2bve.eventradar.com.ve'
    , google_analytics: ''
  }

  , event: {
      title:        'VenezuelaY2B'
    , description:  'Debatiendo sobre los jóvenes y el emprendimiento en Venezuela.'
    , instructions: '<strong>Postula tu pregunta escribiendo un tweet a <a href="https://twitter.com/intent/user?screen_name=eventradardev" title="Event Radar Dev Team">@eventradardev</a> con el botón de abajo. Revisa las propuestas y marca como favoritas las que quieras que respondan</strong>. El moderador seleccionará de las mas votadas.'
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