# mc_draw_craftscript

craftscript (worldedit script) for drawings


## install:
* download draw.js to `your_server/plugins/worldedit/craftscripts/`
* make sure that craftscripts are configured on the server  https://worldedit.enginehub.org/en/latest/usage/other/craftscripts/
* change time limit in worldedit config :)

## using
* move image to `your_server/plugins/worldedit/drawings/`
* in minecraft run `/cs draw <filename> [v]`;
  _filename without exstension_, 
  _v for vertical, else horizontal_
* if something went wrong you can `//undo`
  
## change pallete
* move your block textures to blocks folder
* run parse.py
* paste output in draw.js, instead of old colors variable

block names should be like in `/give` command



![example](https://github.com/SvineruS/mc_draw_craftscirpt/blob/master/example.png)
