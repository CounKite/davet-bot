const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  .setAuthor("Bilgilendirme!")
  .setColor("#DB9721")
  .setTitle(" ")
  .setDescription('')
  .addField('Bilgilendirme', '» **Yeteri kadar kişi davet etmeniz gerekir.**')
  .addField('» Fake hesap açmamanız gerekir açarsanız algılanır ve banlanırsınız.')
  .addField('» **Kesinlikle fake değildir şüpheniz varsa kuruculara sorunuz!**')
  .addField('» **Ödeme yönetemleri İninal, Papara, Paypal, Roblox Robux, LoL RP, Steam Kodudur!**')
  return message.channel.sendEmbed(embed);
};

module.exports.help = {
  name: "ping"
}