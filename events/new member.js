module.exports = {
    name: 'guildMemberAdd',
    once: false,
    execute(member) {
        member.guild.channels.cache.find(channel => channel.name === "welcome-room").send(`${member.user} Welcome to The Expendables. Please change your nickname for the server to match your gamertag if it does not match already! Head over to our <#1038054797431013376> channel for the rules to the bank that you now have access to. Thank you for joining the server!`)
    }
}