const {SlashCommandBuilder} = require('discord.js');
const {EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('weekly-poll')
        .setDescription('Posts the weekly poll!'),
    async execute(interaction) {
        const weeklyPoll = new EmbedBuilder()
            .setDescription('🇦 Aetherian Archive\n' +
                '🇧 Hel Ra Citadel\n' +
                '🇨 Sanctum Ophidia\n' +
                '🇩 Maw of Lorkhaj\n' +
                '🇪 The Halls of Fabrication\n' +
                '🇫 Asylum Sanctorium\n' +
                '🇬 Cloudrest\n' +
                '🇭 Kyne\'s Aegis\n' +
                '🇮 Rockgrove\n' +
                '🇯 Dreadsail Reef\n' +
                '🇰 Sunspire')
            .setColor('#FF0000')
        interaction.reply({content: ':bar_chart: **What normal trial would you like to run next week?**', embeds: [weeklyPoll]})
        const reply = await interaction.fetchReply()
        reply.react('🇦')
            .then(() => reply.react('🇧'))
            .then(() => reply.react('🇨'))
            .then(() => reply.react('🇩'))
            .then(() => reply.react('🇪'))
            .then(() => reply.react('🇫'))
            .then(() => reply.react('🇬'))
            .then(() => reply.react('🇭'))
            .then(() => reply.react('🇮'))
            .then(() => reply.react('🇯'))
            .then(() => reply.react('🇰'))
    }
}