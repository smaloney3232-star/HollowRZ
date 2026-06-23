import {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  PermissionFlagsBits
} from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('rules')
    .setDescription('Post the server rules embed')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),

  category: 'Community',

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor('#000000')
      .setTitle('📜 Hollow RZ Rules')
      .setDescription(
        'Before heading into the city, please take a moment to review the rules. Following them helps keep Hollow RZ fair, fun, and enjoyable for everyone. By joining, you agree to follow all server guidelines.\n💜'
      )
      .setImage('https://cdn.discordapp.com/attachments/1516502831178191051/1516502891471573112/69EDB92B-1F92-4192-A4CE-5373D78DED2F.png?ex=6a3ac9e0&is=6a397860&hm=72e734ac5408063984e677ec359127125325a7765dfc84f7995ee6ffc47837fa&');

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel('Press Here To See Rules')
        .setStyle(ButtonStyle.Link)
        .setURL('https://docs.google.com/document/d/14RKfbrihFN0jVC__yqfGixmwj2OkMp8_cRnBTqBRZes/edit?tab=t.0#heading=h.on00jq7uhxuw/1515842437350690908/1515842438454050938')
    );

    await interaction.reply({
      embeds: [embed],
      components: [row]
    });
  }
};
