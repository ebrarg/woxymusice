const { Client } = require('discord.js');
const YouTube = require('simple-youtube-api');
const yt = require('ytdl-core');
const ayarlar = require('./ayarlar.json');
const ready = require('./handlers/ready');
const message = require('./handlers/message');
const utils = require('./global/utils');
const bot = new discord.Client();
const client = new Client();

const youtube = new YouTube(ayarlar.api);
require('./global/functions')(bot, utils, ytdl, config);
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.youtube = new YouTube(YouTubeAPIKey); // YouTube Client
bot.queue = new Map() // Music Queue
bot.votes = new Map(); // Vote Skip
ready.ready(bot);
message.message(bot, utils, config, discord);
client.login(ayarlar.token);