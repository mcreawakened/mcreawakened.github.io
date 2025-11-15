/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

        // World Spawn
        {x: 0,z: 0,image: "dynmap/world.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Spawn",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},
		
		// Latarnia
		{x: 186,z: -123,image: "dynmap/lighthouse.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Latarnia",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},
		
		// Portal
		{x: 463,z: -118,image: "dynmap/portal.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Portal",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},
		
		// Pociągi do latarnii: Wieśniakownia -> Laboratorium -> Rynek Bandycki -> Parlament -> Sawanna -> Domek na Równinie
		{x: 181,z: -49,image: "dynmap/minecart.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Laboratorium",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},
		{x: 72,z: 92,image: "dynmap/minecart.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Rynek Bandycki",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},
		{x: 165,z: 215,image: "dynmap/minecart.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Parlament",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},
		{x: 170,z: 1240,image: "dynmap/minecart.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Sawanna",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},
		{x: -40,z: 1275,image: "dynmap/minecart.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Domek na Równinie",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},
		{x: -417,z: 1275,image: "dynmap/minecart.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Dworzec Zachodni",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},

		// Metro Zachodnie: Duży Most -> Pustynniogród -> Pustynna Świątynia -> Lush Caves
		{x: -393,z: 554,image: "dynmap/minecart.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Bez Nazwy...",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},
//		{x: -323,z: -176,image: "dynmap/minecart.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Pustynniogród",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},
		// Pustynniogród
		{x: -323,z: -295,image: "dynmap/minecart.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Pustynna Świątynia",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},
		{x: -334,z: -615,image: "dynmap/minecart.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Lush Caves",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},
		
		// Kanał: Chata Pirata -> Latarnia (Więzienie) -> Latarnia (Magazyn) -> Latarnia (Muzeum) -> Latarnia (Kórnik) -> Kanał (Przystanek Podziemny) -> Wieża Dzwonowa -> Pustynniogród
		{x: 270,z: -185,image: "dynmap/anchor.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Chata Pirata",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},
		// Stacje w latarnii nie są zaznaczone
		{x: -82,z: -157,image: "dynmap/anchor.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Kanał (Przystanek Podziemny)",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},
		{x: -190,z: -155,image: "dynmap/anchor.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Wieża Dzwonowa",textColor: "black", offsetX: 0,offsetY: 15,font: "bold 1em Calibri,sans serif",},
		{x: -275,z: -157,image: "dynmap/interchange.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Pustynniogród",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},
		
		// Porty:
		// Krym
		{x: 220,z: -6,image: "dynmap/anchor.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Krym",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},
		// Wenecja
		{x: 332.5,z: 139.5,image: "dynmap/anchor.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Wenecja",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},	
		// Port pod mostem
		{x: -237,z: 454,image: "dynmap/anchor.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Port pod mostem",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",},
		// Nowy plac
		{x: -133,z: 1563,image: "dynmap/anchor.png",imageAnchor: [0.5, 1],imageScale: 1.0,text: "Nowy Plac",textColor: "black", offsetX: 0,offsetY: 5,font: "bold 1em Calibri,sans serif",}
		

        // add your markers here




        // do not delete the following two closing brackets
    ]
}
