# Grid Calculator
This website helps Minecraft logo makers that use Illustrator to calculate the correct grid width for their logo.
Input your text (uppercase/lowercase may matter) and select the font you use in your logo, the grid's width should be shown in the green box.

## How to Contribute
### Add font letter widths
In order to calculate the grid's width, we need to know the width of each letter. We store all the letter widths inside assets/widths.json.
If you want to help us gather more letter widths, all you need to do is edit the JSON file.

An example of adding letter widths in widths.json:
```json
{
  "fontcategoryid (e.g minecraft)": {
    "fontid (e.g ten)": {
      "a (first number is for lowercase a and the second number is for uppercase a)": [5, 7],
      "b": [4, 7],
    }
  }
}
```
You can get font categories from assets/fonts.json, which is structured like this
```json
[
  {
    "id": "minecraft (this is the id of the font category)"
    "name": "Minecraft"
    "fonts": [
      [
        "ten (this is the font's id)"
        "Minecraft Ten (this is the font's name)",
        "3.75 (this is the font size on the website, you can ignore this)"
      ]
    ]
  }
]
```

### How to run locally (for adding new features)
In order to run this site locally you first need to clone the repo using: `git clone https://github.com/TheAnnoying/grid-calculator.git`. Enter the directory: `cd grid-calculator` and install dependencies with: `npm install`.
Now to start the dev server run: `npm run dev`, the site should be live on `localhost:5173`.
