const menu = (app) => {
  return [
    {
      label: "File",
      submenu: [
        {
          label: "New",
          accelerator: "CmdOrCtrl+N",
          click: () => {
            // Handle New option
          },
        },
        {
          label: "Open",
          accelerator: "CmdOrCtrl+O",
          click: () => {
            // Handle Open option
          },
        },
        {
          type: "separator",
        },
        {
          label: "Exit",
          accelerator: "CmdOrCtrl+Q",
          click: () => {
            app.quit();
          },
        },
      ],
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'toggledevtools' }
      ]
    },
    {
      label: "Edit",
      submenu: [
        {
          label: "Cut",
          accelerator: "CmdOrCtrl+X",
          role: "cut",
        },
        {
          label: "Copy",
          accelerator: "CmdOrCtrl+C",
          role: "copy",
        },
        {
          label: "Paste",
          accelerator: "CmdOrCtrl+V",
          role: "paste",
        },
      ],
    },
  ];
};
module.exports = { menu };
