const { ActivityType } = require('discord.js');
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Logged in as ${client.user.tag}`);
        client.user.setActivity('Elder Scrolls Online', {type: ActivityType.Playing})
    },
};