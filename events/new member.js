module.exports = {
    name: 'guildMemberAdd',
    once: false,
    execute(member) {
        member.guild.channels.cache.find(channel => channel.name === "welcome-room").send(`${member.user} Welcome to the Server!`)
    }
}