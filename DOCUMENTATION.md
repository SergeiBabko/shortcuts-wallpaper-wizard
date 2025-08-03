# Documentation

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Main Enchanter Copyright&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

**By the power of the mystical Merlin’s beard, I have crafted this shortcut to bring forth an unparalleled experience of beauty and creativity.\
Its copyright object serves as a mark of its unique origins and the great effort that went into its creation.\
Embrace its magic and let your imagination soar!**

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wallpapers Album&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

As a wallpaper wizard, I offer you the power to keep your favorite wallpapers close at hand. Create a local album by entering a name in the field below, and you'll be able to access them offline. Already have an album? Just enter its name in the field instead.

![Album_Selection](/assets/docs/1.Album_Selection.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User Authentication&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

To unlock the mystical powers of Unsplash's vast collection of images, simply enter **your application's access key** in the enchanted text field provided. Otherwise, you will be limited to the outdated Unsplash Sources API, which lacks the wizardry of the latest version.

For further knowledge, visit the [***Unsplash Authentication realm***](https://unsplash.com/documentation#public-authentication).\
**Example**: *4c1628f48a311b249d7b4340e03223de8a5d12916fa837ff2d08b0bf44f6805f*

![Authentication_Token](/assets/docs/2.Authentication_Token.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unsplash Image Chances&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

Who needs a crystal ball when you have chance parameters?\
Unleash the full potential of your wallpaper with the enchanting chances.\
Set the chance to **100%** to conjure new Unsplash photos every time, or **let the magic take hold** and mix in your favorite personal wallpapers.

![Chances_Selection](/assets/docs/3.Chances_Selection.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Save Or Share Wallpaper&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

By the power of magic, you have the ability to choose whether to save your newly discovered wallpapers!\
Simply type **«wizard»** to show the magic menu, **«muggle»** to auto save the wallpaper, or **leave the invocation empty** to disable saving options.

![Chances_Selection](/assets/docs/4.Save_or_Share_Dialog.PNG)
![Save_or_Share_Menu](/assets/docs/13.Save_or_Share_Menu.PNG)
![Save_Menu](/assets/docs/14.Save_Menu.PNG)
![Clipboard_Menu](/assets/docs/15.Copy_Menu.PNG)
![Clipboard_Menu](/assets/docs/16.Share_Menu.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unsplash Search Parameters&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

Behold, adventurer! With the power of this shortcut, you hold the key to your dream wallpaper. By customizing your search parameters, you can command the wand to conjure up the perfect image that matches your heart's desire. Whether you desire a mystical forest or a shimmering galaxy, let my magic guide you to the perfect wallpaper. Just **be sure to speak the right incantations**, lest you be granted a random image instead.

To enable the use of these search parameters, set the **[useSearch]** in [***Search Parameters***](#search-parameters-can-be-changed-as-you-wish) to **«true»**. You can also select whether to perform a random search or the first one on the list by setting the **[randomSearch]** in [***Search Parameters***](#search-parameters-can-be-changed-as-you-wish) to **«true»** or **«false»**.

Keep in mind that in order to use search parameters, the use of topics must be disabled, which can be achieved by setting the **[useTopics]** in [***Search Parameters***](#search-parameters-can-be-changed-as-you-wish) to **«false»**.

**Examples**:
+ wizard
+ Merlin's beard
+ fairy, magic, broomstick

![Search_Query](/assets/docs/5.Search_Query.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unsplash Topics&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

The mystical Unsplash API has a curated selection of topics for you to choose from. Do not venture beyond their enchanted list, or your custom topics will be banished to the dark realm of irrelevance. Fear not, I will ensure that the magic of the Unsplash API blesses your search with the most wondrous wallpapers.

To enable the use of these topics, set the **[useTopics]** in [***Search Parameters***](#search-parameters-can-be-changed-as-you-wish) to **«true»**. You can also select whether to use a random topic or the first one on the list by setting the **[randomTopic]** in [***Search Parameters***](#search-parameters-can-be-changed-as-you-wish) to **«true»** or **«false»**.

Here’s the list of **default topics**:
+ wallpapers
+ nature
+ renders
+ textures & patterns
+ travel
+ film
+ people
+ architecture & interior
+ street-photography
+ experimental
+ illustration
+ 3d
+ flat
+ hand drawn
+ icons
+ line art
+ patterns
+ fashion & beauty
+ business & work
+ food & drink
+ sports
+ archival

![Topics](/assets/docs/6.Topics.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Configuration Parameters&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

Greetings, wizard! If you seek to tailor your Unsplash image experience, delve into the parameters section. However, tread with caution and be mindful of the spells you cast!

**Parameters**:\
🟢 [***Search Parameters***](#search-parameters-can-be-changed-as-you-wish)\
🟡 [***Image Parameters***](#image-parameters-can-be-changed-depending-on-your-needs)\
🔴 [***API Parameters***](#api-parameters-should-not-be-changed)

### 🟢&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEARCH PARAMETERS CAN BE CHANGED AS YOU WISH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🟢

**[useTopics]**: Toggle to use topics list.
+ Default value: **true**.
  + **true**: topics list will be used, user search parameters will be ignored
  + **false**: topics list will be ignored

**[randomTopic]**: Toggle to use random topic from the list.
+ Default value: **false**.
  + **true**: random topic will be selected from the list
  + **false**: first topic will be selected from the list

**[useSearch]**: Toggle to use search list.
+ Default value: **false**.
  + **true**: search list will be used, **[useTopics]** should be set to **«false»**
  + **false**: search list will be ignored

**[randomSearch]**: Toggle to use random search query.
+ Default value: **false**.
  + **true**: random search will be selected from the list
  + **false**: first search will be selected from the list

![Search_Parameters](/assets/docs/7.Search_Parameters.PNG)

### 🟡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IMAGE PARAMETERS CAN BE CHANGED DEPENDING ON YOUR NEEDS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🟡

**[originalImage]**: Controls the output image parameters.
+ Default value: **true**.
  + **true**: leaves the image unchanged
  + **false**: applies below parameters to the image

**[format]**: The output format to convert the image to.
+ Default value: **jpg**.
  + **jpg**: lossy image format
  + **png**: lossless image format

**[quality]**: Controls the output quality of lossy file formats when **[format]** is set to **«jpg»**.
+ Default value: **100**.
  + **100**: high image quality with low compression
  + **0**: low image quality with high compression

**[sharp]**: Sharpens the image using luminance, providing crisp detail with minimal color artifacts.
+ Default value: **15**.
  + **100**: extremely sharpen image with a bunch of details and noise
  + **0**: leaves the image unchanged

**[unsharpMask]**: Sharpens the image details using an unsharp mask.
+ Default value: **5**.
  + **100**: extremely sharpen image with a bunch of details and artifacts
  + **0**: leaves the image unchanged

**[maskRadius]**: Determines how many pixels should be included to enhance the contrast.
+ Default value: **1**.
  + **100**: extremely sharpen image with a bunch of details and artifacts
  + **0**: leaves the image unchanged

**[fit]**: Controls how the image is fit to its target dimensions after resizing.
+ Default value: **crop**.
  + **crop**: resizes the image to fill the dimensions and crops any excess image data
  + **clip**: resizes the image to fit within the dimensions without cropping or distorting the image

**[crop]**: Controls how the image is aligned when **[fit]** is set to **«crop»**.
+ Default value: **center**.
  + **center**: attempts to center the crop
  + **faces**: attempts to center the crop to detected faces
  + **edges**: automatically finds and crops to an area of interest by performing edge detection
  + **entropy**: automatically finds and crops to an area of interest by looking for busy sections of the image

**[defaultSize]**: Emergency image size.
+ Default value: **2560**.
  + **number**: spare size will be used if the screen resolution can’t be calculated

**[offset]**: Additional offset for the image.
+ Default value: **500**.
  + **number**: the image will be increased by the number of pixels specified

![Image_Parameters](/assets/docs/8.Image_Parameters.PNG)

### 🔴&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;API PARAMETERS SHOULD NOT BE CHANGED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔴

**[clientId]**: User access key to new Unsplash API\
**[unsplashApi]**: Unsplash API. Will be used if **[clientId]** is defined\
**[picsumApi]**: Lorem Picsum API. Will be used if **[clientId]** is not defined

![API_Parameters](/assets/docs/9.API_Parameters.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Internet Connection Check&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

Behold, fellow traveler of the digital realm! Worry not about the fickleness of internet connectivity, for my powers can bridge the gap between online and offline worlds. When the **winds of cyberspace are in your favor**, marvel at the breathtaking beauty of Unsplash images. But should the tides turn against you and the **internet waves crash down**, fear not! Your trusty Wallpapers album shall come to your aid, a beacon of familiarity and comfort in a sea of digital chaos.

![Connection_Check](/assets/docs/10.Connection_Check.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GitHub JS Code Link&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

Do unfamiliar links make you uneasy? Don't worry, my magical wand has transformed my **GitHub link** into a more **convenient** one with the help of [***TinyURL***](https://tinyurl.com).

![GitHub_JS_Link](/assets/docs/11.GitHub_JS_Link.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Main JavaScript Magic&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

Get ready for some magic! In this section, my wand will fulfill all your wishes and conjure up an image link with your preferred parameters. Whether you want a stunning Unsplash image or a personal wallpaper from your album, my magic wand will make it happen. Just tell me what you want, and I'll make it appear before your very eyes!

**Relies on**:
+ Creator
+ Client ID
+ Topics
+ Query
+ Search Parameters
+ Image Parameters
+ API Parameters

![JS_Magic](/assets/docs/12.JS_Magic.PNG)

&nbsp;

## Enjoy Your Magical Journey! 🧙‍♂️🌟✨

May the stars light up your path as you embark on a journey to the enchanted realm of magic wallpapers! May you encounter mystical creatures and behold wondrous sights that will leave you in awe. And if my magic has brought you joy and wonder, don't forget to leave a spark of support by following me and sharing your experiences with other fellow adventurers.

### P.S. 🪄
As a magical creature, I thrive on your curiosity! So ask me anything you'd like to know, and if you're feeling extra generous, you can support my magic by sharing this shortcut with fellow wizards and witches, and checking out those little coffee ☕ buttons on my profile 🧙‍♂️
