Appwrite CMS is using Svelte and Svelte kit 🌈 If you understand Svelte, you are more than ready to start building components. If you don't, eh, you will figure it out! 😅

Don't be scared, components are tiny HTML, CSS and TS snippets that only uses Svelte to bind data between HTML an JavaScript. To see quick example, you can take a look at our [ViewBoolean](https://github.com/Meldiron/appwrite-cms/blob/master/src/lib/components/blocks/view/boolean.svelte) component.

Notice there are different component types based on their use:

- **edit** - Used in forms for creating and editing record
- **view** - Used in detailed page of a record
- **list** - used in a table of multiple records

They each get exactly the same parameters, so as we all love to do, just copy what is nearby as your starting point 🙈

For design Appwrite CMS uses TailwindCSS. Everything should be in `slate` colors. Components are exception, they can be colorful. This rule was set to make sure CMS itself does not drag too much attention - content should be colorful.

All code external contributions must go through a pull request and be approved by a core developer team before being merged. This flow ensures a proper review of all the code and increases the quality of the product.

Appwrite CMS truly ❤️ pull requests. Really! I can't wait to virtually shake our hands in a pull request 🤝
