const explorer = {
    name: "Root",
    isFolder: true,
    lvl: "0",
    items: [
      {
        name: "Public",
        isFolder: true,
        lvl: "1",
        items: [
          {
            name: "Data",
            isFolder: true,
            lvl: "2",
            items: [
              {
                name: "folderData.js",
                isFolder: false,
                lvl: "3",
                items: []
              }
            ]
          },
          {
            name: "index.html",
            isFolder: false,
            lvl: "2",
            items: []
          }
        ]
      },
      {
        name: "src",
        isFolder: true,
        lvl: "1",
        items: [
          {
            name: "components",
            isFolder: true,
            lvl: "2",
            items: [
              {
                name: "Folder.js",
                isFolder: false,
                lvl: "3",
                items: []
              }
            ]
          },
          {
            name: "App.js",
            isFolder: false,
            lvl: "2",
            items: []
          },
          {
            name: "index.js",
            isFolder: false,
            lvl: "2",
            items: []
          },
          {
            name: "styles.css",
            isFolder: false,
            lvl: "2",
            items: []
          }
        ]
      },
      {
        name: "package.json",
        lvl: "1",
        isFolder: false,
        items: []
      }
    ]
  };
  
  export default explorer;
  