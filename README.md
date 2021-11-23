# blog-easy-client
blog-easy-client is a javascript client library for [blog-easy](https://github.com/allkods/blog-easy#readme) which enables us to integrates a full automated blog system to a website without having to write any code. 
It consists of :

>A javascript client library for the browser (this repository)
### Features
---
- It adds a simple yet powerful Blog content management system (cms) to your client side page
- We can easily add and alter `Header`, `Sub-headers`, `Paragraphs`, `Notes`, `List`, `images`, `code-snippets` and many more elements
- It provides a default styling for all the blog elements
- It enables us to customize the styling of all the elements

>A [Node.js package](https://github.com/allkods/blog-easy#readme) (for server)
### Features
---
- It can automatically upload, update the post sent by its javascript cms client library
- It provides middlewares for automatic upload, update, search, view all post, view single post, and deletion
- It enables to choose a databse either mongoDB or mysql to store blog data
- It creates search engine friendly content

## Screen Shots
---
![Preview 1](https://allkods.in/img/prevvv1.jpg)![Preview 1](https://allkods.in/img/prev2.jpg)![Preview 1](https://allkods.in/img/prev3.jpg)![Preview 1](https://allkods.in/img/prev4.jpg)
---
## Installation
---
```javascript
npm i blog-easy-client
```

## Initialization
---
Once you have installed the blog-easy-client library, you can now init the client.
>Using CDN

```javascript
<script src="https://cdn.jsdelivr.net/npm/cdn-allkods@1.2.0/blog-easy-client-1.2.0.min.js"></script>
```

>using NPM

```javascript
import { blogEasy } from 'blog-easy-client'
```

## How to use
---
```javascript
blogEasy({
      wrapper: /* The selected div container where all the elements will added */,
      post: /* URL or route where the data will be posted */,
      type: /* can be upload or edit */
    })
```

### Example for uploading
```javascript
blogEasy({
      wrapper: document.getElementById('container'),
      post: '/blogPost',
      type: 'upload'
    })
```

### Example for editing
```javascript
blogEasy({
      wrapper: document.getElementById('container'),
      post: '/blogPost',
      type: 'edit'
    })
```

## How to style elements
---
> To style elements you need to link your custom CSS and pass the class name to the elements as follow:
```javascript
blogEasy({
      wrapper: document.getElementById('container'),
      post: '/blogPost',
      type: 'upload',
      class:{
          header : 'custom_class_name',
          subHeader : 'custom_class_name',
          para : 'custom_class_name',
          h3 : 'custom_class_name',
          h4 : 'custom_class_name',
          h5 : 'custom_class_name',
          h6 : 'custom_class_name',
          list : 'custom_class_name',
          listElem : 'custom_class_name',
          paraSpace : 'custom_class_name',
          note : 'custom_class_name',
          code : 'custom_class_name',
          imageBox : 'custom_class_name',
          coverImage : 'custom_class_name',
          date : 'custom_class_name'
      }
    })
```
> For styling all the text of code, Select all the child element with a `*`, Example : `your_class *{}`



## How to set up its Automated backends
Read full documentation here -> [blog-easy](https://github.com/allkods/blog-easy#readme)


## Missing feature
---
- For adding links we have to use dafault html `<a>` tag ( we will be providing link adding feature soon. )
## TO-DO
---
- Link adding feature
- Automatic compression of images
- Converting the cover image into 2 qualities ( preview and original, to decrease the load time of view while viewing multiple post at a time )
- Social sites share button