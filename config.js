const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ESHU-MD=your_paircode",
MODE: process.env.MODE || "private",  // Add Your Bot Mode (groups/privet/public)
PREFIX: process.env.PREFIX || ".",   // Add Your Custom Prefix 
OWNER_REACT: process.env.OWNER_REACT || "true", // true or false
BOT_NAME: process.env.BOT_NAME || "ESHU 𝙼𝙳 V1",
AUTO_VOICE: process.env.AUTO_VOICE || "false", // true or false
AUTO_STICKER: process.env.AUTO_STICKER || "false", // true or false
AUTO_REPLY: process.env.AUTO_REPLY || "false", // true or false
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // true or false
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false", // true or false
ANTI_LINK: process.env.ANTI_LINK || "true", // true or false
ANTI_BAD: process.env.ANTI_BAD || "true",// true or false
FAKE_RECORDING: process.env.FAKE_RECORDING || "true", // true or false
AUTO_REACT: process.env.AUTO_REACT || "false", // true or false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", // true or false
FILENAME: process.env.FILENAME || "QUEEN-ESHU-MD-V1",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/31l2pf.jpg", 
CHANNEL_NAME: process.env.CHANNEL_NAME || "💗 QUEEN-ESHU-MD-V1 💗",
NEWSLETTER_ID: process.env.NEWSLETTER_ID || "120363303242803015@newsletter",
TITLE: process.env.TITLE || "QUEEN-ESHU-MD-V1",
BODY: process.env.BODY || "CREATED BY ESHAN TECH SL🛡️",
WEBURL: process.env.WEBURL|| "https://github.com/CYBER-ESHU/ESHU-MD",
BOT_IMG: process.env.BOT_IMG || "https://files.catbox.moe/6x6tfc.jpg"     
};
