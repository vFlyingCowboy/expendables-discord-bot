const {SlashCommandBuilder} = require('discord.js');
const {EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Create a Poll!').addStringOption(option =>
            option.setName('question')
                .setDescription('What is your question?')
                .setRequired(true)
        ).addStringOption(option =>
            option.setName('answer_a')
                .setDescription('a possible answer')
                .setRequired(true)
        ).addStringOption(option =>
            option.setName('answer_b')
                .setDescription('another possible answer')
                .setRequired(true)
        ).addStringOption(option =>
            option.setName('answer_c')
                .setDescription('another possible answer')
                .setRequired(false)
        ).addStringOption(option =>
            option.setName('answer_d')
                .setDescription('another possible answer')
                .setRequired(false)
        ).addStringOption(option =>
            option.setName('answer_e')
                .setDescription('another possible answer')
                .setRequired(false)
        ),
    async execute(interaction) {
        const question = interaction.options.getString('question')
        let answer_a = interaction.options.getString('answer_a')
        let answer_b = interaction.options.getString('answer_b')
        let answer_c = interaction.options.getString('answer_c')
        let answer_d = interaction.options.getString('answer_d')
        let answer_e = interaction.options.getString('answer_e')

        const poll = new EmbedBuilder()
            .setDescription(`🇦: ${answer_a} \n 🇧: ${answer_b}`)
            .setColor('#FF0000')

        if (answer_c !== null) {
            poll.setDescription(`🇦: ${answer_a} \n 🇧: ${answer_b} \n 🇨: ${answer_c}`)
        }
        if (answer_d !== null) {
            poll.setDescription(`🇦: ${answer_a} \n 🇧: ${answer_b} \n 🇨: ${answer_c} \n 🇩: ${answer_d}`)
        }
        if (answer_e !== null) {
            poll.setDescription(`🇦: ${answer_a} \n 🇧: ${answer_b} \n 🇨: ${answer_c} \n 🇩: ${answer_d} \n 🇪: ${answer_e}`)
        }

        interaction.reply({content: `:bar_chart: **${question}**`, embeds: [poll]})
        const reply = await interaction.fetchReply()
            reply.react('🇦')
            .then(() => reply.react('🇧'))
            .then(() => {
                if (answer_c !== null) {
                    reply.react('🇨')
                }
            }).then(() => {
            if (answer_d !== null) {
                reply.react('🇩')
            }
        }).then(() => {
            if (answer_e !== null) {
                reply.react('🇪')
            }
        }).catch(error => console.error('One of the emojis failed to react:', error));
    }
}