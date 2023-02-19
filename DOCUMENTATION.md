# Documentation

&nbsp;

## ‼️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ATTENTION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;‼️

Be aware that you need to create **«Wallpapers»** album manually before using this shortcut. Otherwise, **«Recents»** album will be used.\
Also, don’t forget to set your beloved Wallpapers album in next places:

- Get random photo depends on chances: Photos
- Get random photo depends on connection: Photos

![Album_Selection](/assets/docs/12.Album_Selection.PNG)
![Album_Selection](/assets/docs/13.Album_Selection.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User Authentication&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

To authenticate requests to the Unsplash API, enter **your application's access key** in the provided text field. Otherwise, the outdated Unsplash Sources API will be used.

For more information, visit [***Unsplash Authentication***](https://unsplash.com/documentation#public-authentication).\
**Example**: *4c1628f48a311b249d7b4340e03223de8a5d12916fa837ff2d08b0bf44f6805f*

![Authentication_Token](/assets/docs/1.Authentication_Token.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unsplash Image Chances&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

With the chance parameters, you're in full control of the wallpaper you see.\
Choose a **100%** chance for a fresh Unsplash photo every time, or **set it lower** to mix it up with your own favorite Wallpapers.

![Chances_Selection](/assets/docs/2.Chances_Selection.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Possibility To Save Or Share Wallpaper&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

Whether you want to save new Wallpaper or not, it's up to you! Simply type **«auto»**, **«show»** or **leave it empty** to enable or disable saving options.

![Chances_Selection](/assets/docs/3.Save_or_Share_Dialog.PNG)
![Save_or_Share_Menu](/assets/docs/14.Save_or_Share_Menu.PNG)
![Save_Menu](/assets/docs/15.Save_Menu.PNG)
![Clipboard_Menu](/assets/docs/16.Clipboard_Menu.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unsplash Search Parameters&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

Customize your search results with your preferred parameters. You can use as many words as you like for each parameter, but make sure there's **at least one word** to get the results you want. Otherwise, the Shortcut will choose a random image for you.

To enable the use of these search parameters, set the **[useSearch]** in [***Search Parameters***](#search-parameters-can-be-changed-as-you-wish) to **«true»**. You can also select whether to perform a random search or the first one on the list by setting the **[randomSearch]** in [***Search Parameters***](#search-parameters-can-be-changed-as-you-wish) to **«true»** or **«false»**.

Keep in mind that in order to use search parameters, the use of topics must be disabled, which can be achieved by setting the **[useTopics]** in [***Search Parameters***](#search-parameters-can-be-changed-as-you-wish) to **«false»**.

**Examples**:
+ space
+ cat in hat
+ sea, beach, yacht

![Search_Query](/assets/docs/4.Search_Query.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unsplash Topics&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

The Unsplash API provides a list of predefined topics for you to choose from, so there's no need to add new ones. Custom topics will be ignored, I promise :)

To enable the use of these topics, set the **[useTopics]** in [***Search Parameters***](#search-parameters-can-be-changed-as-you-wish) to **«true»**. You can also select whether to use a random topic or the first one on the list by setting the **[randomTopic]** in [***Search Parameters***](#search-parameters-can-be-changed-as-you-wish) to **«true»** or **«false»**.

Here’s the list of **default topics**:
+ wallpapers
+ renders
+ travel
+ nature
+ street photography
+ experimental
+ textures & patterns
+ animals
+ architecture & interior
+ fashion & beauty
+ film
+ food & drink
+ people
+ spirituality
+ business & work
+ athletics
+ health
+ current events
+ arts & culture

![Topics](/assets/docs/5.Topics.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Configuration Parameters&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

Hey, fellow geek! If you want to customize your Unsplash image selection, check out the parameters sections. But make sure you know what you're doing!

**Parameters**:\
🟢 [***Search Parameters***](#search-parameters-can-be-changed-as-you-wish)\
🟡 [***Image Parameters***](#image-parameters-can-be-changed-depending-on-your-needs)\
🔴 [***API Parameters***](#api-parameters-should-not-be-changed)

### 🟢&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEARCH PARAMETERS CAN BE CHANGED AS YOU WISH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🟢

**[useTopics]**: Toggle to use topics list.
+ Default value: **false**.
  + **true**: topics list will be used, user search parameters will be ignored
  + **false**: topics list will be ignored

**[randomTopic]**: Toggle to use random topic from the list.
+ Default value: **false**.
  + **true**: random topic will be selected from the list
  + **false**: first topic will be selected from the list

**[useSearch]**: Toggle to use search list.
+ Default value: **true**.
  + **true**: search list will be used, **[useTopics]** should be set to **«false»**
  + **false**: search list will be ignored

**[randomSearch]**: Toggle to use random search query.
+ Default value: **true**.
  + **true**: random search will be selected from the list
  + **false**: first search will be selected from the list

![Search_Parameters](/assets/docs/6.Search_Parameters.PNG)

### 🟡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IMAGE PARAMETERS CAN BE CHANGED DEPENDING ON YOUR NEEDS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🟡

**[originalImage]**: Controls the output image parameters.
+ Default value: **false**.
  + **true**: applies below parameters to the image
  + **false**: leaves the image unchanged

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
  + **100**: extremely sharpen image with bunch of details and noise
  + **0**: leaves the image unchanged

**[unsharpMask]**: Sharpens the image details using an unsharp mask.
+ Default value: **5**.
  + **100**: extremely sharpen image with bunch of details and artifacts
  + **0**: leaves the image unchanged

**[maskRadius]**: Determines how many pixels should be included to enhance the contrast.
+ Default value: **1**.
  + **100**: extremely sharpen image with bunch of details and artifacts
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

![Image_Parameters](/assets/docs/7.Image_Parameters.PNG)

### 🔴&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;API PARAMETERS SHOULD NOT BE CHANGED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔴

**[clientId]**: User access key to new Unsplash API\
**[newApi]**: New Unsplash API. Will be used if **[clientId]** is defined\
**[oldApi]**: Outdated Unsplash API. Will be used if **[clientId]** is not defined

![API_Parameters](/assets/docs/8.API_Parameters.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Internet Connection Check&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

Worried about internet connectivity? Relax!\
Whether you're connected or not, I've got you covered. If you're **online**, enjoy stunning Unsplash images. If you're **offline**, your Wallpapers album will come to the rescue.

![Connection_Check](/assets/docs/9.Connection_Check.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GitHub JS Code Link&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

Do unfamiliar links make you uneasy? Don't worry, this is my **GitHub link** that has been **shortened** by a [***TinyURL***](https://tinyurl.com) to make it more convenient to use in shortcuts.

![GitHub_JS_Link](/assets/docs/10.GitHub_JS_Link.PNG)

&nbsp;

## ⬇️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Main JavaScript Magic&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️

In this section I’ll do some magic for you. My magic wand will check all of you wishes, and shoot with an image link and parameters.

**Relies on**:
+ Client ID
+ Topics
+ Query
+ Search Parameters
+ Image Parameters
+ API Parameters

![JS_Magic](/assets/docs/11.JS_Magic.PNG)
