const { CommandInteraction } = require("discord.js");
const SHIVA = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "ping",
  description: `get ping of bot`,
  userPermissions: ["SEND_MESSAGES"],
  botPermissions: ["EMBED_LINKS"],
  category: "Information",
  cooldown: 5,
  type: "CHAT_INPUT",
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,

  /**
   *
   * @param {SHIVA
   * } client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   * @param {Queue} queue
   */
  run: async (client, interaction, args, queue) => {
    // Code
    client.embed(interaction, `Ping :: \`${client.ws.ping}\``);
  },
};
