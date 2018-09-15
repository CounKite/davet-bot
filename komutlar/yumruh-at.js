const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('**Bir çok zeki arkadaşımız 30 tane fake hesap açmış hepsinin discordda yeni olduğunu göremiyoruz sanki o arkadaş ve fake hesapları yakında banlanacak!**')
    .setColor(3447003)
    .setFooter('Davet Ödülleri', bot.user.avatarURL)
    .setTimestamp()
    .setDescription('')
    return message.channel.sendEmbed(sunucubilgi);
    }
};

module.exports.help = {
  name: "yumruh-at"
}