const { MessageActionRow, MessageButton, MessageEmbed, Message } = require("discord.js");
const { owners } = require("../config.json");

module.exports = {
  calistir: async (client, message, args) => {
    if (!owners.includes(message.author.id)) return;

    const embed = new MessageEmbed()
      .setTitle(
        "<:wumpus_gift:1206660443238830182> Aşağıdaki butona tıklayarak açılan formdan gireceğiniz YouTube müzik linkini mp3 olarak indirebilirsiniz.<a:3551music:1207753717059821629>"
      )
      .setImage("https://cdn.discordapp.com/attachments/1208235608758165544/1217402191413772329/standard.gif?ex=6603e524&is=65f17024&hm=be4a21471934cc7c3e5fe8cdd41fa377efb5a85d6bc77a7a55706f914520dadb&");
    const button = new MessageButton()
      .setCustomId("convert")
      .setLabel("Dönüştür")
      .setStyle("SECONDARY");
    const row = new MessageActionRow().addComponents(button);

    return message.channel.send({ components: [row], embeds: [embed] });
  },

  name: "mp3",
  description: "",
  aliases: [],
  kategori: "",
  usage: "",
};
