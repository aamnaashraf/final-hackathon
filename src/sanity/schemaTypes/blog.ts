import {defineField, defineType, defineArrayMember} from 'sanity';

export const blog = defineType({
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
      defineField({
        name: "blog",
        title: "Blog",
        type: "string",
      
      }),
     
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
    
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "blog", // Corrected to use the "name" field
        maxLength: 96,  // Optional limit
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