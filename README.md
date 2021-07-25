# blog-easy-client
blog-easy-client is a javascript client library for [blog-easy](https://github.com/allkods/blog-easy) which enables us to integrates a full automated blog system to a website without having to write any code. 
It consists of :

>A javascript client library for the browser (this repository)
### Features
---
- It adds a simple yet powerful Blog content management system (cms) to your client side page
- We can easily add and alter `Header`, `Sub-headers`, `Paragraphs`, `Notes`, `List`, `images`, `code-snippets` and many more elements
- It provides a default styling for all the blog elements
- It enables us to customize the styling of all the elements

>A [Node.js package](https://github.com/allkods/blog-easy) (for server)
### Features
---
- It can automatically upload, update the post sent by its javascript cms client library
- It provides middlewares for automatic upload, update, search, view all post, view single post, and deletion
- It enables to choose a databse either mongoDB or mysql to store blog data
- It creates search engine friendly content

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
<script src="https://cdn.allkods.in/blog-easy-client.js"></script>
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



## How to use variables which are automatically passed to the views by [blog-easy](https://github.com/allkods/blog-easy)
---

### Inside the view of getting all Blog Post

- How to create search bar
```html
<form action="/blog" method="GET">
    <input name= "search" type="search" value="<%= search %>" placeholder="your search query here....">
    <button>Search</button>
</form>
```
`The route for the action will be same as getting all blog post route`
- How to create next button
```html
<% if(next) {%>
    <a href="/blog?page=<%= page+1 %>&search=<%= search %>">Next</a>
<% } %>
```
- How to create back button
```html
<% if(back) {%>
    <a href="/blog?page=<%= page-1 %>&search=<%= search %>">Back</a>
<% } %>
```

- How to render all posts
```html
<% posts.forEach(post =>{ %>
                                
    <a href="/blog/<%= post.slug %>">
        <div>
            <p><%= post.title %></p>

            <div style="
            background:url('<%= post.coverImage %>');
            background-size: cover;">
            </div>

            <p><%- readableDate %></p>

        </div>
    </a>

<% }) %>
```

### Inside the view of getting Single blog post
- How to render post
```html
<div><%- blogHtml %></div>
```

> You can use `<%= blogTitle %> `and `<%= blogImageSrc %>` in their meta tags for creating search engine friendly content

- How to create edit button
```html
<a href="/blog/<%= slug %>/edit">
    <button>Edit</button>
</a>
```
> You can implement your own logic for showing button only if user is logged in or is admin

- How to create delete button
```html
<form action="/post-delete" method="POST">
    <input type="hidden" name="slug" value="<%= slug %>">
    <button>Delete</button>
</form>
```
> You can implement your own logic for showing button only if user is logged in or is admin

## TO-DO
---

- Automatic compression of images
- Converting the cover image into 2 qualities ( preview and original, to decrease the load time of view while viewing multiple post at a time )
- Tag adding feature