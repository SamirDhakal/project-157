AFRAME.registerComponent("comics", {
    init: function () {
      this.comicsContainer = this.el;   
      this.createCards();
    },
    createCards: function() {
      const comicsRef = [
        {
          id:"spider-man",
          title:"Spider-Man",
          url:"assets/SpiderMan.jpeg"
        },
        {
          id:"star-wars",
          title:"Star-Wars",
          url:"assets/StarWars.jpeg"
        },
        {
          id:"donald-duck",
          title:"Donald-Duck",
          url:"assets/Donald_Duck.jpeg"
        },
        {
          id:"manga",
          title:"Manga",
          url:"assets/Manga.jpeg"
        }
      ] 

      let prevoiusXPosition = -60;

    for (var item of comicsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      const borderEl = this.createBorders(position, item.id);

      const thumbNail = this.createThumbnails(item);
      borderEl.appendChild(thumbNail);

      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.comicsContainer.appendChild(borderEl);
    }
    },
    createThumbnails: function(item) {
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 20,
        height: 28
      })
      entityEl.setAttribute("position", {x: 0, y: 5, z: 0.1})
      entityEl.setAttribute("material", {src: item.url})
    },
    createBorders: function(position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
          width: 22,
          height: 30
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color: "#0077CC",
        opacity: 1,
      });

    return entityEl;
    },
    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#e65100",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -20;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      return entityEl;
    },
})