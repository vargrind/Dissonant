# Dissonant

A heavily WIP, in-development modular Discord bot.

## Disclaimer

This is primarily for educational purposes so that I may learn Node.js.

I neither expect this to be 'finished' in a timely manner due to the massive feature-set, nor expect this to be perfect.

## Dev Notes

- Webpanel support is planned by dynamically feeding React modules to clients.
- Database will be the main mode of storage.
- Bot module system inspired by Dalamud & Red Discordbot.
- Rudimentary sandboxing is being developed, though **this is not at all meant to be a secure system.** The interfaces will evolve as the bot's initial development progresses.

## Installation

This section is WIP.

- A Postgres database will be required.
- Installation will likely be Dockerized.

## Limitations

- Voice support will not be added, due to it being impossible to join more than one channel at a time. The bot would require a stable API for Chords to request voice access; at that point, it is likely better to make separate, standalone bots for handling voice systems.
- The bot is effectively single-deployment, and unable to be parallelized across multiple host systems. It is, however, shardable on the system. The reason for this is dynamic chord installation requires putting them somewhere, and it's not realistically feasible at current time to have this properly synchronized without an extreme amount of effort.

## Chords

- We use a **permissive** security module, due to the maintenance overhead required to attempt a proper sandboxing solution.
- You **must** ensure all Chords you install can be trusted. The bot does have rudimentary support for Chord version management, but **you** must review all Chords you install onto a Dissonant instance. The Chords in question will have the same permissions as the bot itself, including arbitrary access to the Discord.js API.
- If you develop a Chord, ensure it obeys cooperative limitations, like which guilds it is enabled on.
