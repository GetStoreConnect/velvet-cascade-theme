# Velvet Cascade Theme

![FA535796-6AAF-4DD5-A581-5F179BA0C45C_1_201_a](https://github.com/user-attachments/assets/1dea9586-a77c-4236-8925-f154954f0c3d)

Velvet Cascade theme - Multi-concept theme ideal for child and babies retail stores, boutiques, and clothing industries.

Preview theme: [Beauty Store](https://d-themedeve-00dqe000000r6kt2as-7bdccde07574.herokuapp.com/beauty)

**Key features:** Innovative layouts and elements, expandable search bar, slide-out cart sidebar, color swatches for product with variants and sliders. 

## Setting up your theme

The Velvet Cascade contains custom templates, theme variables and translation keys that will help you set up your theme. The theme contain a set custom templates, theme variables and translation keys that will help you to set up your theme.

### Adding the Custom Templates

The following templates will need to be added to your content block template picklist manually. Full instructions are provided on the following link: [Adding templates to Content Template Picklist](https://help.getstoreconnect.com/documentation/adding-templates-to-content-template-picklist.html)

- featured_videos
- icon_pill
- single_review
- reviews_section
- tab_section_product
- tab_section
- top_slide
- upsell_products
- video_player

### Standard templates

The following templates will override the out-of-the-box theme templates.

- container
- featured_categories
- featured products
- image_text_overlay

### Setting up the Header

**Top header**

This is the white section at the top of your header and it features a small slideshow on the left for short content, with two customizable links on the right.

If this component is not needed, you can easily deactivate it by setting the `active.top.header` theme variable to `inactive`, `off`, or any other string.

**Top header slider**

Follow these steps:

1. Create a content block and use the [“No added styling"](https://help.getstoreconnect.com/documentation/content-block-templates.html#no-added-styling-block) - it will work as the slider container.
2. Copy the content block identifier
3. Go to the theme variables and find the `top.slides.cb.identifier` variable
4. Paste the content block identifier in the value field
5. To create each slide, create a new content block and use the “Top slide” template - it supports the title and image field, we highly recommend using an icon or a small image.
6. Relate each slide to the parent content block created on step #1

**Login**

When customers are logged in, it automatically switches to display the Account option along with a dropdown menu.

**Help Centre**

By default, the theme sets the help centre label and placeholder link. You can relate this link to anything you want, an article, customer support, product category, you name it.

To get familiar with this feature follow these steps:

1. Create a page
2. Copy the path
3. Go to the theme variables and find the `top.slides.cb.identifier` variable
4. Use the path as the variable value

**Second header tier**

"The second tier includes two automated components: a search icon that triggers a search modal and a cart icon that opens the cart sidebar.

To populate the header menu, you need to create a new menu using the [menu builder](https://help.getstoreconnect.com/documentation/menu-builder.html) and link it to the store."