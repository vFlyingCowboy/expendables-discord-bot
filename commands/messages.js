const {SlashCommandBuilder} = require('discord.js');
const {EmbedBuilder} = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('send-messages')
        .setDescription('Send messages to the correct channels'),
    async execute(interaction) {
        const Rules = new EmbedBuilder()
            .setAuthor({name: 'The Expendables Rules'})
            .setColor('#FF0000')
            .addFields({name :"\u200b", value:'1. Be respectful to all members in the guild. If you are in a trials group be respectful to the Trials Lead. Listen to the trials lead and be quiet when asked. Trials lead will have full authority to remove you from group if he/she feels you are being disrespectful. Any member that has an issue with one another keep it out of guild chat. If the issues progresses reach out to an officer and it will be handled accordingly.'},
                {name :"\u200b", value:'2. Leave the toxicity out of the guild. Everyone moves at their own pace. Treat one another to the best of your ability and have patience. Have an open mind.'},
                {name :"\u200b", value:'3. If you are seeking a crafter do not take advantage of their kindness.'},
                {name :"\u200b", value:'4. The guild is going to be growing slowly but surely so be mindful of that. We want to build a family that wants to help each other out.'},
        {name :"\u200b", value:'5. Have fun, enjoy the game. Don\'t take it too seriously. Enjoy the game, enjoy the friendship, just have a great time.'},
        {name :"\u200b", value:'6. If you are new be sure to check <#1038054797431013376> on how to gain access to the bank and what rules apply.'})

        const bank = new EmbedBuilder()
            .setAuthor({name: 'The Expendables Bank Access'})
            .setColor('#FF0000')
            .addFields({name :"\u200b", value:'1- **DO NOT RAID THE GUILD BANK!** Limited to 5 items.'},
                {name :"\u200b", value:'2- Only read style pages, motifs and crafting recipes on your crafter. Do not take them for multiple toons.'},
                {name :"\u200b", value:'3- If there are duplicates that your crafter needs to read, you have to take the  entire stack out. Once you have read your recipe, please redeposit the rest of the duplicates in the bank.'},
                {name :"\u200b", value:'4- Do not take anything out of the guild bank just to sell it. '},
                {name :"\u200b", value:'5- Do you best to give as you receive. Try to refill something as you take.'},
                {name :"\u200b", value:"6- Bank will be monitored by <@718537245757538345> who is our bank manager. If he see's that you are doing something wrong he will stop you immediately."},
                {name :"\u200b", value:"7- Bank will open every Friday at 5pm-7pm pst, that is 8pm-10pm est. For those of you in the UK it will open at 12pm-2pm gmt."},
                {name :"\u200b", value:"**If we feel you are ignoring any of these guidelines you WILL be demoted and possibly removed from guild.**"})

        const requirements = new EmbedBuilder()
            .setAuthor({name: 'PARSING'})
            .setDescription('All parses need to include the dummy starting at 100% and completed to 0%, the gear worn, and character sheet from top to bottom showing all buffs (do not include titles or advanced stats sheet). This needs to be one continuous video in order for us to verify the parse. The only buffs allowed are from the dummy, gear, food, CP, and mundus.')
            .setColor('#FF0000')
            .addFields({name :"You may not do any of the following:", value:'-Using multiple nearby dummies\n' +
                        '-Vampire toggle\n' +
                        '-Being in a group\n' +
                        '-Obtaining quest or random world buffs that temporarily affect stats'},
                {name :"The only mythic allowed is:", value:'Harpooner’s wading kilt.'},
                {name :"Setting up to record:", value:'Go to settings > preferences > capture and share then down to game clip resolution. Make sure it is set to 720p. This will allow you to capture up to 10 minutes via manual recording.'},
                {name :"Capturing a parse:", value:'Once you are ready to parse, go to the Xbox menu and tab over to capture and share, hit start recording and begin parsing. Parses must be from 100% to 0%. Show gear and character sheet with all buffs (no advanced stats necessary). Return to xbox menu, go to capture and share and hit stop recording. \n' +
                        '\n' +
                        'Once it is uploaded to Xbox, you will be able to see it (or should be able to) on gamerDVR.com or another third party website by typing in your GT and looking at your clips. Copy the link for the video you are submitting then post to dps-parse-verification. '},
                {name :"Capturing support requirements:", value:'Capture by going to the Xbox menu and tabbing over to capture and record. Hit start. Show full character sheet. Show skill sheet from the top down to alchemy. Those submitting for raid ready ranks will also need to show available gear sets. Return to Xbox menu then capture and share and stop recording.\n' +
                        '\n' +
                        'Once it is uploaded to Xbox, you will be able to see it (or should be able to) on gamerDVR.com or another third party website by typing in your GT and looking at your clips. Copy the link for the video you are submitting then post to tank-verification or healer-verification based on your role.'},
                {name :"Accepted methods of submission for tag updates:", value:"A “record what happened” clip: use record last 3 minutes function from the capture and share Xbox menu. This must capture the conclusion of the boss fight through score pop up."},
                {name :"Accepted methods of submission for parses and class verification:", value:"A video link directly from Xbox or gamerDVR."},
                {name :"We accept screen shots of tags from the following servers:", value:"Ruthless Requiem\n" +
                        "Raid Runners"},
                {name :"Who Needs to Submit a Parse", value:"All members wanting to DD will have to submit a parse on that specific toon. That includes Generals down to Private rank."})

        const tank = new EmbedBuilder()
            .setAuthor({name: 'The Expendables Tank and Healer vTrials Requirments'})
            .setColor('#FF0000')
            .addFields({name :"Tank Verification", value:'Tanks will be required to complete 1 of 5 veteran dungeons at the discretion of the Verifier. The team will consist of  a tank, a verified healer, and 2 verified DDs. One of which being a captain rank or above as the verifier. You will be required to show your character sheet, CP, skills, and sets.\n' +
                        '\n' +
                        '**The dungeons are as follows:**\n' +
                        '> Vet Bloodroot Forge\n' +
                        '> Vet Shipwright Regret \n' +
                        '> Vet Dreadcellar\n' +
                        '> Vet Cauldron\n' +
                        '> Vet Depth of Malatar\n' +
                        '\n' +
                        'To schedule a time to run the verification PM one of the <@&1037196166066085968>.'},
                {name :"Healer Verification", value:'Healer will be required to complete 1 of 5 veteran dungeons at the discretion of the Verifier. The team will consist of  a Verified tank, a healer, and 2 verified DDs. One of which being a captain rank or above as the verifier. You will be required to show your character sheet, CP, skills, and sets.\n' +
                        '\n' +
                        '**The dungeons are as follows:**\n' +
                        '> Vet Coral Aerie\n' +
                        '> Vet Red Petal Bastion\n' +
                        '> Vet Graven Deep\n' +
                        '> Vet Moon Hunters Keep\n' +
                        '> Vet Shipwright Regret\n' +
                        '\n' +
                        'To schedule a time to run the verification PM one of the <@&1037196166066085968>.'},
                )

        interaction.guild.channels.cache.find(c => c.name === "rules").send({embeds: [Rules]})
        interaction.guild.channels.cache.find(c => c.name === "🏧-bank-rules").send({embeds: [bank]})
        interaction.guild.channels.cache.find(c => c.name === "dps-parse-requirements").send({embeds: [requirements]})
        interaction.guild.channels.cache.find(c => c.name === "tank-heal-vtrials-requirements").send({embeds: [tank]})
        await interaction.reply({content:"I did it!", ephemeral:true});
    },
};