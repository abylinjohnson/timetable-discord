require("dotenv").config();
const data = require("./data/data");
const img_link = require("./data/image-data");
const { Client, Intents, MessageEmbed } = require("discord.js");
const cron = require("cron");
const d = new Date();
const { argv } = require("process");
PREFIX = "$";
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const sendMessage = (title, description, img_link) => {
  var clr = title.endsWith("LAB") ? "RED" : "BLUE";
  const exampleEmbed = new MessageEmbed()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(img_link)
    .setColor(clr);
  client.channels.cache
    .get("939998394632523826")
    .send({ embeds: [exampleEmbed] });
};

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(" ");
    if (CMD_NAME == "get") {
      message.reply("Here is the Time table!!!");
    }
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
var day = d.getDate();

let classOne = new cron.CronJob("00 27 3 * * *", () => {
  let title = data.first[day]
  if (day > 0 && day < 6 && title!=="N/A" ) {
    sendMessage(title, "Class Starts at 9:00 AM", img_link[title]);
  }
});

console.log(d.getHours()+":"+d.getMinutes())
classOne.start();

let classTwo = new cron.CronJob("00 27 4 * * *", () => {
  let title = data.secound[day]
  if (day > 0 && day < 6 && title!=="N/A" ) {
    sendMessage(title, "Class Starts at 10:00 AM", img_link[title]);
  }
});
classTwo.start();

let classThree = new cron.CronJob("00 27 5 * * *", () => {
  let title = data.third[day]
  if (day > 0 && day < 6 && title!=="N/A" ) {
    sendMessage(title, "Class Starts at 11:00 AM", img_link[title]);
  }
});
classThree.start()
;
let classFour = new cron.CronJob("00 27 6 * * *", () => {
  let title = data.fourth[day]
  if (day > 0 && day < 6 && title!=="N/A" ) {
    sendMessage(title, "Class Starts at 12:00 PM", img_link[title]);
  }
});
classFour.start();

let classFive = new cron.CronJob("00 27 8 * * *", () => {
  let title = data.fifth[day]
  if (day > 0 && day < 6 && title!=="N/A" ) {
    sendMessage(title, "Class Starts at 2:00 PM", img_link[title]);
  }
});
classFive.start();

let classSix = new cron.CronJob("00 27 9 * * *", () => {
  let title = data.sixth[day]
  if (day > 0 && day < 6 && title!=="N/A" ) {
    sendMessage(title, "Class Starts at 3:00 PM", img_link[title]);
  }
});
classSix.start();

let classSeven = new cron.CronJob("00 27 10 * * *", () => {
  let title = data.seventh[day]
  if (day > 0 && day < 6 && title!=="N/A" ) {
    sendMessage(title, "Class Starts at 4:00 PM", img_link[title]);
  }
});
classSeven.start();

client.login(process.env.BOT_TOKEN);
