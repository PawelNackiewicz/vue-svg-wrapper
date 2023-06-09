# vue-svg-wrapper
**Problem**

When building large applications in which icons are used in different sizes, themes and colors, a good icon management system is missing. There is also a lack of a tool that tells you what icons are in the project. In addition, large applications are missing an automatic tool that will generate all available icons, for example in Storybook.

**Solution**

The idea is to store all available icons in the [map in a key-value structure](https://github.com/PawelNackiewicz/vue-svg-wrapper/blob/main/src/components/Icons.ts). The key is the name of the icon and the value is the path in svg. We use the icon by calling the Icon component and in the props give the name of the icon (key from the map). In addition, the component has the ability to specify props for color, size and class for svg wrappers at different levels.
By using TypeScript, you can get automatic prompting of available icons. In addition, with a map of all icons, you can quickly generate a [storybook file](https://github.com/PawelNackiewicz/vue-svg-wrapper/blob/main/src/components/Icons.stories.ts) that will display an always up-to-date list of icons without any additional work.

**How to use the component?**
```js
<Icon name="home" :size="124" :color="'#ff0021'" />
```

**How to add a new icon?**

I recommend using a tool like Figma. 
Prepare Icon in SVG format preferably in Frame 20 x20

![enter image description here](https://github.com/PawelNackiewicz/vue-svg-wrapper/blob/main/docs/2.png)

![Prepare the icon in SVG format](https://github.com/PawelNackiewicz/vue-svg-wrapper/blob/main/docs/1.png)

Adjust the icon to be in the center of the frame and then copy the icon.

The copied code should look like this:

![enter image description here](https://github.com/PawelNackiewicz/vue-svg-wrapper/blob/main/docs/4.png)

Make sure that the width height and viewBox values have the same value as the height and width of the previously created frame.

Then copy from the path tag the value for the d parameter and paste this as the value for the key at the icon map.
```js
iconName: 'M10 1.04167C8.50821 1.04167 7.07747 1.6343 6.0225...'
```
In case the icon consists of several g tags, you need to copy the d parameter from all of them to a single string and then pass the whole as a key value in the icon map. 

**Done, good luck!**
