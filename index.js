const mineflayer = require('mineflayer');

// --- Configuration ---
const BOT_CONFIG = {
    host: 'mc.madjikware.com',
    port: 25577,
    username: 'playstation451', // Use any desired name for the offline account
    version: '1.19.2',
    auth: 'offline' // Explicitly set auth to 'offline' for cracked/offline mode servers
};

// Create the bot instance
const bot = mineflayer.createBot(BOT_CONFIG);

// --- Event Handlers ---

// This event fires when the bot successfully logs in and is ready to interact
bot.on('spawn', () => {
    console.log(`[${BOT_CONFIG.username}] Successfully spawned!`);
    console.log('Starting movement: Walking forward...');

    // The setControlState method simulates pressing a key.
    // Setting 'forward' to true makes the bot start walking in the direction it's facing.
    bot.setControlState('forward', true);
});

// Log any chat messages the bot receives
bot.on('chat', (username, message) => {
    if (username === bot.username) return; // Ignore own messages
    console.log(`[CHAT] <${username}>: ${message}`);
});

// Log server disconnections
bot.on('end', (reason) => {
    console.log(`[INFO] Bot disconnected. Reason: ${reason}`);
    // You might want to implement a reconnect loop here, but for this example, we just exit.
});

// Log any unexpected errors
bot.on('error', (err) => {
    console.error(`[ERROR] Bot error: ${err.stack}`);
});

// Provide initial status message
console.log(`Attempting to connect to ${BOT_CONFIG.host}:${BOT_CONFIG.port} (v${BOT_CONFIG.version}) as ${BOT_CONFIG.username}...`);
