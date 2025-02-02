import {defineField, defineType, defineArrayMember} from 'sanity';

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      defineField({
        name: "name",
        title: "Product Name",
        type: "string",
      
      }),
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: 'product_id',
        title: 'Product ID',
        type: 'string',
      },
      {
        name: "price",
        title: "Price",
        type: "number",
       
      },
      defineField({
        name: "Paragraph",
        title: "Paragraph",
        type: "text",
        
      }),
      defineField({
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot:true
        }
    }),
    {
        name: "thumbnailImages",
        title: "Thumbnail Images",
        type: "array",
        of: [{ type: "image" }],
    },
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name", 
        maxLength: 96,  
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .slice(0, 96),
      },
    }),
defineField({
    name: "block",
    title: "Block",
    type: "array",
    of:[{type:'block'}]
}),
    ]

})