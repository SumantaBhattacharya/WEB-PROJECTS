# heading1
## heading2
### heading3
#### heading4
##### heading5
###### heading6
--- 
this is a paragraph-above tag is doing the woprk of hr in html tag.

**Bold**
*italic*
> this is a blockquote

1. This is a list
- this is a un-ordered list

`#include <studio.h>`
```javascript
const buttons = document.querySelectorAll(".button");
//console.log(buttons);
const body = document.querySelector("body");
//nodelist not html collection
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e){
    console.log(e);
    console.log(e.target)
    if (e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id//or 'grey';
    }else if (e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id//or 'blue';
    }else if (e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id//or 'yellow';
    }else if (e.target.id === 'white'){
        body.style.backgroundColor = e.target.id//or 'green';
    }else if (e.target.id === 'pink'){
        body.style.backgroundColor = e.target.id//or 'green';
    }

  })
});

```
[twitter](http://twitter.com/)
![alt text](chainsaw-man-6zhr96v1eo9fidla.jpg)

<!--  -->

- [x] this is a task
- [] this is a task

&#9745; this is a task
:joy:
😊 utf16

H~2~0
| Syntax  | Description | test |
| --- | --- | --- |
| Header  | Title |

![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCXgGY0wkg0zynnHvSEVmE3A)

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)