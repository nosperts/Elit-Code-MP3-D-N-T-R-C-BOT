module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`${client.user.tag}, kullanıma hazır.`);
    client.user.setPresence({
      activities: [{ name: `ELİT CODE - BİM.EXE`, type: `WATCHING` }],
      status: `offline`,
    });
  },
};
