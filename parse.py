# color generator for draw script
# by svinerus 2019
#
# 1. put block textures in blocks folder
# 2. run
# 3. paste output in draw.js
# 4. ???
# 5. profit


from pathlib import Path
import numpy as np
from PIL import Image

result = {}

blocks_dir = Path(__file__).parent / 'blocks'

for path in blocks_dir.iterdir():
    name = path.stem

    img = Image.open(path).convert('RGB')
    img = np.array(img)

    color = np.average(img, axis=(0, 1))
    # color = np.median(arr, axis=(0, 1))  # doesnt test, maybe better

    color = list(color.astype(int))

    result[name] = color

print("colors = {")

for name, color in result.items():
    print(f"'{name}': {color}, ")

print("};")
