console.log("Hello world2!");

try { eval('"use strict"; class foo {}'); } catch (e) { console.log(e); }