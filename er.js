const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();

client.on('ready', () => {
  console.log('---------------');
  console.log(' Music Bot Is Online')
  console.log('---------------')
  client.user.setStatus("Online")
    client.user.setActivity(" Type ehelp",{type: 'WATCHING'})
	
});
	
            var prefix = "e" ;
	
	
	/*
البكجآت
npm install discord.js
npm install ytdl-core
npm install get-youtube-id
npm install youtube-info
npm install simple-youtube-api
npm install queue
*/
client.on('message', msg => {

    if (msg.content == 'eplay') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join();
     }
    }
}
})



client.login(process.env.BOT_TOKEN);  //
