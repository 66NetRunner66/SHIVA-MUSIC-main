const { CommandInteraction } = require("discord.js");
const SHIVA = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "filter",
  description: `set filters in current queue`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  type: "CHAT_INPUT",
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,
  options: [
    {
      name: "name",
      description: `type filter name to set in queue`,
      type: "STRING",
      required: true,
    },
  ],
  /**
   *
   * @param {SHIVA} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   * @param {Queue} queue
   */
  run: async (client, interaction, args, queue) => {
    // Code

    let filterName = interaction.options.getString("name");
    if (filterName === "off") {
      queue.filters.clear();
      client.embed(
        interaction,
        `${client.config.emoji.SUCCESS} Queue Filter Off !!`
      );
    } else if (
      Object.keys(client.distube.filters).includes(filterName) == false
    ) {
      client.embed(
        interaction,
        `${
          client.config.emoji.ERROR
        } Not a Valid Filter !! \n\n \`\`\`nim\n ${Object.keys(
          client.distube.filters
        )
          .map((f) => `\`${f}\``)
          .join(" , ")
          .substring(0, 2000)} \`\`\``
      );
    } else if (Object.keys(client.distube.filters).includes(filterName)) {
      queue.filters.add(filterName);
      client.embed(
        interaction,
        `${client.config.emoji.SUCCESS} Current Queue Filter: \`${
          queue.filters.names.join(", ") || "Off"
        }\` !!`
      );
    }
  },
};