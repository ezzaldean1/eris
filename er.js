const Eris = require("eris");
var codes = new Eris(process.env.BOT_TOKEN);
var codes_id = "476167313960206367";
                    var i = "0";
                    var x = "0";
codes.on("voiceChannelJoin", (msg) => {
    x++;
    codes.editChannel(codes_id, { name : "United " + x + ""});
});
codes.on("voiceChannelLeave", (msg) => {
    x--;
    codes.editChannel(codes_id, { name : "United " + x + ""});
});

codes.on("messageCreate", (msg) => {
    if(msg.author.id !== "470500980342128650") return codes.createMessage('__**This Command is only for the bot Owner**__');
    if(msg.content === "uv") {
        let users = msg.channel.guild.members.map(m => m.user.id);
        let messages = [];
        messages.push(users);
        setTimeout(function(){
        while (i <= messages[0].length - 1) {
            check = msg.channel.guild.members.get(messages[0][i]);
        if(!check.voiceState.channelID){
                i++;
        }else{
                x++;
                i++;
        }
}
    console.log(x);
    codes.createMessage(msg.channel.id, "Voice Online Members Now Are: **"+x+"** Members!");
    codes.editChannel(codes_id, { name : "United "+x+""});
    messages = [];
}, 1);
    }
});


  


codes.connect(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا
