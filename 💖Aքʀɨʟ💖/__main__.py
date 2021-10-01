try:
    import disnake
    import asyncio
    import logging
    from loguru import *
    from os import getenv
    from dotenv import load_dotenv
    from disnake.ext import commands
    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    # ============================================================================================================================
    load_dotenv("./.env")
    AprilES = getenv("AprilES")
    AքʀɨʟʄɨӼ = getenv("BOTFIX")
    Aքʀɨʟքʟǟʏɛʀ = commands.Bot(command_prefix=AքʀɨʟʄɨӼ,
                              test_guilds=[889786523426373632])
    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    # ============================================================================================================================
    @Aքʀɨʟքʟǟʏɛʀ.slash_command(name="ping", description="𝐍𝐨𝐢𝐫❣️by🔱KrakinzLab™️")
    async def ping(speaker):
        await speaker.response.send_message(
            f"Pong! {round(Aքʀɨʟքʟǟʏɛʀ.latency * 1000)}ms")

    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    # ============================================================================================================================
    @Aքʀɨʟքʟǟʏɛʀ.slash_command(name="help", description="𝐍𝐨𝐢𝐫❣️by🔱KrakinzLab™️")
    async def help(speaker):
        embed = disnake.Embed(
            title="𝐍𝐨𝐢𝐫❣️by🔱KrakinzLab™️",
            description=f"""
*📌•♪•♪𝐌𝐚𝐧𝐮𝐚𝐥-𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬♪•♪•*
• **{AքʀɨʟʄɨӼ}filter** = Music filters when playing audio.
• **{AքʀɨʟʄɨӼ}help** = Display this commands and descriptions.
• **{AքʀɨʟʄɨӼ}April** = Display the  license and a few more info.
• **{AքʀɨʟʄɨӼ}np** = Show now playing song.
• **{AքʀɨʟʄɨӼ}ping** = Check server ping of Aքʀɨʟքʟǟʏɛʀ.
• **{AքʀɨʟʄɨӼ}play** = Plays audio from YouTube.
• **{AքʀɨʟʄɨӼ}list** = Play a playlist from YouTube.
• **{AքʀɨʟʄɨӼ}queue** = Show the music queue and now playing.
• **{AքʀɨʟʄɨӼ}remove** = Remove song from the queue.
• **{AքʀɨʟʄɨӼ}resume** = Resume currently playing music.
• **{AքʀɨʟʄɨӼ}shuffle** = Shuffle music queue.
• **{AքʀɨʟʄɨӼ}skipto** =Skip to the selected queue number.

*📌•♪•♪𝐏𝐥𝐚𝐲𝐞𝐫-𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬♪•♪•*
• **⏭** = Skip the currently playing song.
• **⏸** = Pause/Resume the currently playing music.
• **🔇** = Mute/Unmute the currently playing music.
• **🔁** = Toggle music loop.
• **⏺** = Stops the currently playing music queue.
• **🔊|🔉 {AքʀɨʟʄɨӼ}vol** = Change volume of currently playing music.

**⚜️Coded Using:**
• Discord.js_Node=v16+
• Disnake.py_Python=3.9""",
            color=disnake.Color.blurple(),
        )
        embed.set_thumbnail(
            url="https://i.postimg.cc/5tgjvj1y/A.png")
        embed.set_image(url="https://i.postimg.cc/5tgjvj1y/A.png")
        embed.set_footer(text="🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
        if speaker.channel.name == "Aքʀɨʟ❣️քʟǟʏɛʀ":
            await speaker.response.send_message(embed=embed)
        else:
            await speaker.author.send(embed=embed)

    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    # ============================================================================================================================
    @Aքʀɨʟքʟǟʏɛʀ.slash_command(name="April", description="𝐍𝐨𝐢𝐫❣️by🔱KrakinzLab™️")
    async def April(speaker):
        embed = disnake.Embed(
            title="𝐍𝐨𝐢𝐫❣️by🔱KrakinzLab™️",
            description=f"""=========⚜️=========

•> **April** is a Discord Music player Bot with YouTube Support and is available on both Discord and Telegram.

•> **April** has been licensed under GNU General Public License 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁

•> use **{AքʀɨʟʄɨӼ}help** to learn how to use **April**

**⚜️Coded Using:**
• Discord.js_Node=v16+
• Disnake.py_Python=3.9""",
            color=disnake.Color.blurple(),
        )
        embed.set_thumbnail(
            url="https://i.postimg.cc/5tgjvj1y/A.png")
        embed.set_image(url="https://i.postimg.cc/5tgjvj1y/A.png")
        embed.set_footer(text="🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
        if speaker.channel.name == "Aքʀɨʟ❣️քʟǟʏɛʀ":
            await speaker.response.send_message(embed=embed)
        else:
            await speaker.author.send(embed=embed)

    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    # ============================================================================================================================
    class InterceptHandler(logging.Handler):
        LEVELS_MAP = {
            logging.CRITICAL: "CRITICAL",
            logging.ERROR: "ERROR",
            logging.WARNING: "WARNING",
            logging.INFO: "INFO",
            logging.DEBUG: "DEBUG"
        }

        def _get_level(self, record):
            return self.LEVELS_MAP.get(record.levelno, record.levelno)

        def emit(self, record):
            logger_opt = logger.opt(depth=6,
                                    exception=record.exc_info,
                                    ansi=True,
                                    lazy=True)
            logger_opt.log(self._get_level(record), record.getMessage())

    logging.basicConfig(handlers=[InterceptHandler()], level=logging.INFO)
    AprilLog = logging.getLogger(__name__)
    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    # ============================================================================================================================
    AprilLog.info(
        "~~~~~~~~~~~~~~~~~~~~~~~>  𝐍𝐨𝐢𝐫❣️by🔱KrakinzLab™️ <~~~~~~~~~~~~~~~~~~~~~~~"
    )
    AprilLog.info("❣️April Discord Handler Started")
    AprilLog.info(
        "~~~~~~~~~~~~~~~~~~~~~~~>  𝐍𝐨𝐢𝐫❣️by🔱KrakinzLab™️ <~~~~~~~~~~~~~~~~~~~~~~~"
    )
    Aքʀɨʟքʟǟʏɛʀ.run(AprilES)
except Exception as e:
    print(e)