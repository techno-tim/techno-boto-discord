const Discord = require('discord.js');
const client = new Discord.Client();
import { DISCORD_TOKEN, TWITCH_CHANNEL_ID } from './constants'
import { containsUrl, isTwitchUrl } from './helpers'


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
    if (msg.channel.id === TWITCH_CHANNEL_ID) {
      console.log('is twitch channel')
      // is in twitch channel
      if (containsUrl(msg.content)) {
        console.log('contains url')
          // is a url
          // we need to check to see if it's a twitch url
          if (isTwitchUrl(msg.content)) {
            console.log('is twitch url')
            // is a twitch url
            // do nothing
          } else {
            // is twitch url
            // we need to tell them
            msg.channel.send(`<@${msg.author.id}>
            Sorry, this channel only allows Twitch URLS`)
                      // then delete it
            msg.delete()
            console.log('is a twitch url')
          }
      } else {
        // it's not a url
        // do nothing
        console.log('not url')
      }
    } else {
      console.log('not the twitch channel')
    }
});






client.login(DISCORD_TOKEN);
