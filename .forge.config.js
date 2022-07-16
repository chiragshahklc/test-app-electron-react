const appName = "test-app-electron-react"

module.exports = {
  packagerConfig: {},
  makers: [
    {
      name: "@electron-forge/make-squirrel",
      config: {
        name: appName,
      },
    },
    {
      name: "@electron-forge/make-deb",
      config: {
        name: appName,
      },
    },
    {
      name: "@electron-forge/make-rpm",
      config: {
        name: appName,
      },
    },
    {
      name: "@electron-forge/make-dmg",
      config: {
        name: appName,
        format: "ULFO",
      },
    },
    {
      name: "@electron-forge/make-zip",
      platforms: ["darwin", "linux", "win32"],
    },
  ],
}
