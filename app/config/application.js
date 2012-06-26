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
      raw_url:          'http://y2b.eventradar.com.ve'
    , display_url:      'y2b.eventradar.com.ve'
    , google_analytics: ''
  }

  , event: {
      title:        'VenezuelaY2B'
    , description:  'Debating whether research or intuition is a better approach to design should be a communal discussion.'
    , instructions: '<strong>Submit a question or comment by posting a tweet to <a href="https://twitter.com/intent/user?screen_name=dftg" title="Design from the Gut on Twitter">@dftg</a> via the button below. Review the submissions and favorite the ones you\'d like to see answered</strong>. The moderator will choose from the top picks.'
    , time:         'Friday, 3/9, 3:30p'
    , location:     'Ballroom BC &bull; ACC'
    , details_url:  'http://schedule.sxsw.com/2012/events/event_IAP11592'
  }

  , participants: [
    {
        name:     'Ricardo Rodríguez'
      , title:    'Co-Fundador, Event Radar'
      , twitter:  'rrodrigu3z'
      , img_url:  'http://a0.twimg.com/profile_images/2167235671/Captura_de_pantalla_2012-04-18_a_la_s__08.51.57_normal.png'
      , role:     'Moderador'
    }
    , {
        name:     'Bill Couch'
      , title:    'Software engineer, Twitter'
      , twitter:  'couch'
      , img_url:  'couch.gif'
      , role:     'Panelist'
    }
    , {
        name:     'Naz Hamid'
      , title:    'Principal, Weightshift'
      , twitter:  'weightshift'
      , img_url:  'hamid.gif'
      , role:     'Panelist'
    }
    , {
        name:     'Laurel Hechanova'
      , title:    'Designer, Illustrator, Apocalypse OK'
      , twitter:  'hechanova'
      , img_url:  'hechanova.gif'
      , role:     'Panelist'
    }
    , {
        name:     'Jane Leibrock'
      , title:    'User Experience Researcher, Facebook'
      , twitter:  'fencebreak'
      , img_url:  'leibrock.gif'
      , role:     'Panelist'
    }
  ]
}