const { Message } = require("discord.js");
const SHIVA = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "resume",
  aliases: ["rsume"],
  description: `resume paused song in queue`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,

  /**
   *
   * @param {SHIVA} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   * @param {Queue} queue
   */
  run: async (client, message, args, prefix, queue) => {
    // Code
    if (queue.paused) {
      queue.resume();
      client.embed(message, `${client.config.emoji.SUCCESS} Queue Resumed !!`);
    } else {
      client.embed(
        message,
        `${client.config.emoji.ERROR} Queue already Resumed !!`
      );
    }
  },
};