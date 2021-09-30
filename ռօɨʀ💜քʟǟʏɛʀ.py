try:
    import disnake
    import asyncio
    from os import getenv
    from disnake.ext import commands
    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    # ============================================================================================================================
    ռօɨʀʄɨӼ = "!"
    ռօɨʀքʟǟʏɛʀ = commands.Bot(command_prefix=">",
                              test_guilds=[889786523426373632])
    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    # ============================================================================================================================
    @ռօɨʀքʟǟʏɛʀ.slash_command(name="ping", description="𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️")
    async def ping(inter):
        await inter.response.send_message(
            f"Pong! {round(ռօɨʀքʟǟʏɛʀ.latency * 1000)}ms")

    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    # ============================================================================================================================
    @ռօɨʀքʟǟʏɛʀ.slash_command(name="help", description="𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️")
    async def help(inter):
        embed = disnake.Embed(
            title="𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️",
            description=f"""
*📌•♪•♪𝐌𝐚𝐧𝐮𝐚𝐥-𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬♪•♪•*
• **{ռօɨʀʄɨӼ}filter** = Music filters when playing audio.
• **{ռօɨʀʄɨӼ}help** = Display this commands and descriptions.
• **{ռօɨʀʄɨӼ}noir** = Display the  license and a few more info.
• **{ռօɨʀʄɨӼ}np** = Show now playing song.
• **{ռօɨʀʄɨӼ}ping** = Check server ping of ռօɨʀքʟǟʏɛʀ.
• **{ռօɨʀʄɨӼ}play** = Plays audio from YouTube.
• **{ռօɨʀʄɨӼ}list** = Play a playlist from YouTube.
• **{ռօɨʀʄɨӼ}queue** = Show the music queue and now playing.
• **{ռօɨʀʄɨӼ}remove** = Remove song from the queue.
• **{ռօɨʀʄɨӼ}resume** = Resume currently playing music.
• **{ռօɨʀʄɨӼ}shuffle** = Shuffle music queue.
• **{ռօɨʀʄɨӼ}skipto** =Skip to the selected queue number.

*📌•♪•♪𝐏𝐥𝐚𝐲𝐞𝐫-𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬♪•♪•*
• **⏭** = Skip the currently playing song.
• **⏸** = Pause/Resume the currently playing music.
• **🔇** = Mute/Unmute the currently playing music.
• **🔁** = Toggle music loop.
• **⏺** = Stops the currently playing music queue.
• **🔊|🔉 {ռօɨʀʄɨӼ}vol** = Change volume of currently playing music.

**⚜️Coded Using:**
• Discord.js_Node=v16+
• Disnake.py_Python=3.9""",
            color=disnake.Color.blurple(),
        )
        embed.set_thumbnail(
            url="https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
        embed.set_image(url="https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
        embed.set_footer(text="🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
        if inter.channel.name == "ռօɨʀ💜քʟǟʏɛʀ":
            await inter.response.send_message(embed=embed)
        else:
            await inter.author.send(embed=embed)

    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    # ============================================================================================================================
    @ռօɨʀքʟǟʏɛʀ.slash_command(name="noir", description="𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️")
    async def noir(inter):
        embed = disnake.Embed(
            title="𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️",
            description=f"""=========⚜️=========

•> **Noir** is a Discord Music player Bot with YouTube Support and is available on both Discord and Telegram.

•> **Noir** has been licensed under GNU General Public License 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁

•> use **{ռօɨʀʄɨӼ}help** to learn how to use **Noir**

**⚜️Coded Using:**
• Discord.js_Node=v16+
• Disnake.py_Python=3.9""",
            color=disnake.Color.blurple(),
        )
        embed.set_thumbnail(
            url="https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
        embed.set_image(url="https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
        embed.set_footer(text="🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
        if inter.channel.name == "ռօɨʀ💜քʟǟʏɛʀ":
            await inter.response.send_message(embed=embed)
        else:
            await inter.author.send(embed=embed)

    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    # ============================================================================================================================
    ռօɨʀքʟǟʏɛʀ.run()
    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    # ============================================================================================================================
except Exception as e:
    print(e)