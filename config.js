
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "917530060988";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0lNTEZLNVkxbHhPWEVMNzMyZUpCb3pkUkxOVElzZlpCcEcxNllEQVhrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVVLbjZsMWNBcFh0NmxIN0NCQTVnaGd2TjZaRVlFK1NFRjJhZm5LdzlYWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPS1pUUDU4Rmw4c2cyd25VR1h0ME5MMTcwOEJXTjg5U0FxRElBbGVnQlYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6SDlHRjFnU3VZMGZ0UkQ3blQ3Z1hiNkNqamszZFo5My9hZ3kyeld6MzBRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVMRUxpak0yeUVzWloxTGx4Q2xxWkM2YWxXS2p0OXgwMDR4L2w2eGhwVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5XZWtBcXZiT0NObDI3ZWhZRVJXdmFQVjRBMFR6dFZRZ1E2SExoTVpJaE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUxqSjl5dWFkVS9tRDBneGpXZDRYb2UxdGM5SldSdjF0ZVRXS2NQUlluVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibXYyaGw3S0YxTlh6YmpqZnFSY2pvb0dSelFlaENtZDRrYmdtK2c2N3FGMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InI4R0F0VEprNkdjVnlOTkpEdmowU2lsL0VGYmtaUGNxV0JudDJhSkVpVjEzYVlkZ1Y3SElJeTJIbWxiZ1NYRjlHWDdyYmVmYTJrdldxOXZQWU0rUWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEyLCJhZHZTZWNyZXRLZXkiOiJ6ZUpqbUFkSUNkQTZGU0VXcDYzWkg4SlEzK3h3QnJzUDhqc29xZ3ZQMkYwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNzUzMDA2MDk4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyMENCNkJGMTI5RDM3MTlGMDEzQjFGNTM1NTkwMkQ4MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNTc5ODU2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTc1MzAwNjA5ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTlCNjBCNTZCNTQzNjExNDI4RjUwQTkyMkU1MkIxNjUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjU3OTg1N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiT0xIb05qYXpSdWk4Q1lGbWRyZFM5dyIsInBob25lSWQiOiJjZGJkZjBhNC0wOTU1LTRlYWQtYTczYS1mZmQ4MjhlZjA5NDkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWJzZTF6OWozN2xGZ21UdzRhUEZmU3lEeFBFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJtNHFzUm9jakZzSWhtT2t4RUZKc3ZZWS8zOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3MzJCVlBQQiIsIm1lIjp7ImlkIjoiOTE3NTMwMDYwOTg4OjM2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKGq/CdkajwnZG08J2RrPCdkazwnZG54pun8J2Rv/CdkbnimIcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05haDJFWVFnZmV4dFFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijkvc05vYU5oK1M1QWYycXRGSmVUaTVCbnh4NVlmbWhCL2ZxNFNDOG1nemc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVML3VUZkd3ZjdncTJGUW9PUGNYcjdXT3VaRWlxaFJmUDN6RWt6ZFZhSmI3SVlWQUxpNXpSUUxkTzFLUC9ZWWgrUkoxRXN2M1ppVk5WUnZLQ1Jzc0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQS1dBazYrVE5ITGRhKzFIMUZZRzUvSExBa0RqVDJPajl0TitOa2RXWTNSVU5OS3hESFpXL0paWStxWW1xbllrRFFEU2ZMR0tKa2lxeDdPa1JyQTRqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxNzUzMDA2MDk4ODozNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmZjdEYUdqWWZrdVFIOXFyUlNYazR1UVo4Y2VXSDVvUWYzNnVFZ3ZKb000In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTc5ODU0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVB5ViJ9" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "🇧🇷⃞₊₉₁₇ͣ₅ͫ₃ͤͤ₀ͤ₀ͬ₆₀ᷤ₉ͤ₈ͬ₈ϟ➤⁩",
  botname: process.env.BOT_NAME || "↫𝑨𝑴𝑬𝑬𝑹⛧𝑿𝑹☇",
  ownername: process.env.OWNER_NAME || "🇧🇷⃞₊₉₁₇ͣ₅ͫ₃ͤͤ₀ͤ₀ͬ₆₀ᷤ₉ͤ₈ͬ₈ϟ➤⁩",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
