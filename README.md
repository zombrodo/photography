# Photography Template

This repository contains boilerplate for a simple Photography site using 11ty
to statically generate the site, and Tailwind for styling

The goal was to make something as small as possible, but satisfy what I was
looking for in a portfolio site. As such, it's lacking in some quality of life
features, but I feel is still easy to use.

## Install

```sh
git clone repo-url
yarn # or npm install
yarn dev # or npm run dev
```

## Usage

Pages and Content for this template is controlled by a JSON file `photos.json`,
and a `config.js` file in `src/_data`.

`config.js` will configure things such as your portfolio title, and subtitle.

`photos.json` is where you will define your content.

### photos.json schema

The JSON is split into two parts: a `categories` array, and an `entries` array.

`categories` control the different pages on your site. Each object in this array
will result in a new page being added to the outputted site. The schema for a
category is as follows:

```json
{
  "categories": [
    {
      "id": "forests", // unique id. This will be used to generate the permalink to this section
      "group": "Nature", // A group. This might be a super-category, like "travel" or "nature"
      "title": "Forests" // the actual category.
    }
  ]
}
```

Next, we need some images, which is what we define under entries

```json
"entries": [
      {
      "category": "forest", // The unique id defined for the category above
      "style": "wide", // optional: this will modify the output depending on landscape or portrait pictures
      "image": "/assets/images/sarah-sheedy-unsplash.jpg", // path to the image
      "title": "Autumn Trees", // the title
      "location": "Made Up National Park", // a location or subtitle
      "camera": "Fujifilm X-T5", // the camera you used
      "lens": "55-200mm", // lens
      "info": ["Photo by Sarah Sheedy on Unsplash"] // An array of optional fields. Every entry will be split by a vertical bar - I use it to describe the settings used for the photo.
    }
]
```

Running `yarn build` will generate your site.

![](/docs/example.png)

By design, the first category will be hosted as `index.html`, and all subsequent ones will be hosted under `/category-id/index.html`. You might utilise this to put your newest category first, or just keep a showcase as your homepage.

## Credits

Stock images used in the example:

- Mountain Photo by [Michelle McEwen](https://unsplash.com/@michellem18?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/a-snow-covered-mountain-with-a-sky-background-pljPEMFQD34?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Tree Photo by [Sarah Sheedy](https://unsplash.com/@cestmoisheedy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/a-group-of-trees-with-yellow-and-orange-leaves-yXLkcFF8LpY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

## TODO / Recommendations

By default, images that come out of your camera are gonna be chonky. If you have
time, it might be a good idea to take a look at [Eleventy's Image plugin](https://www.11ty.dev/docs/plugins/image/)
which will definitely help load times. There's a super detailed tutorial
on how you'd set it up [here](https://www.aleksandrhovhannisyan.com/blog/eleventy-image-plugin/).

Otherwise, I hopefully intend to add it myself down the line :)
