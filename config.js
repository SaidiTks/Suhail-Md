const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_06_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgNjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDc0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NixcbiAgICAgICAgODEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQzLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI0LFxuICAgICAgICA2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDYyLFxuICAgICAgICA3MixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTczLFxuICAgICAgICA3NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDUxLFxuICAgICAgICA2NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI2LFxuICAgICAgICA4LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlkyN2MzdHdCV0I0THRhUlVvc1Jwa25uWEZWbWR2YzUyMkEzS2k0aFlCKzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjQzOTgxODY3NTU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0OUU0NDJEOEZENzIxRTc2ODNDOTdDQzJCNkVEQ0M3RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0NDAzNjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibVZGSl81UjVRUnFQakVGUU0zWW1FZ1wiLFxuICBcInBob25lSWRcIjogXCIzMmUwODZmYi0yYzkzLTQ1YWItOGI2Ni1iNDUwNzA4YzAyNTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICAyMjcsXG4gICAgICA4NCxcbiAgICAgIDE5LFxuICAgICAgMjIyLFxuICAgICAgMTAyLFxuICAgICAgMjAyLFxuICAgICAgMTQ2LFxuICAgICAgMTc4LFxuICAgICAgMTQ5LFxuICAgICAgMjUyLFxuICAgICAgMTIxLFxuICAgICAgMjQ4LFxuICAgICAgMjMzLFxuICAgICAgMTUzLFxuICAgICAgMTY0LFxuICAgICAgMTM3LFxuICAgICAgMTYzLFxuICAgICAgNDUsXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzIsXG4gICAgICAyMzgsXG4gICAgICAyNDQsXG4gICAgICAyMzEsXG4gICAgICAxMTYsXG4gICAgICAyMDksXG4gICAgICAyMTEsXG4gICAgICAxOTQsXG4gICAgICAyNSxcbiAgICAgIDE0LFxuICAgICAgMTUyLFxuICAgICAgMTI5LFxuICAgICAgMTUwLFxuICAgICAgMTMwLFxuICAgICAgNDIsXG4gICAgICAyMTgsXG4gICAgICA0OSxcbiAgICAgIDIwNCxcbiAgICAgIDI0MixcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNVDVRN0JZVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQzOTgxODY3NTU3OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSmV1bmUgTGVhZGVyIFRrcydiN1wiLFxuICAgIFwibGlkXCI6IFwiODE5NDQyMDExMzgyMzE6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHp2NCswREVLQ3NyN1FHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwb2VidlRJSVplZll0R21UOENFN1RHVzNoTzloaHU3a2ErVnRyNFI2T2k4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdCRTNFUkhPcWxrb1A3SHFGN3IwTVVxSGkwWEtBYkYxb1ZXZkt0cU1UQ0x6UlNRM3JOeXRKMnQxRE40b0ZlRWgxQVkvUjA2TDJ5MlRqek5UVUtCVUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInUzc2FGTzJ3QkZhcFkvSm5QSzF2MXRZNGdSZ2tvMld6b0ovcEtmV3o5Wk5lWDRDNTNRRU9Pc093bk0xRk9LbXd1aU96bU9JNmxIeEw2TzdZUEZyZkR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0Mzk4MTg2NzU1NzoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ0MDM1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtXdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1d0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWmJrY1BUMUFqcUtuZUcwZFV5YVU4YngxN1krcE9BVVlGS2NhRm9yMDdDcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDM1NTMyMjE4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE4NjU4MDAxNjEwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
