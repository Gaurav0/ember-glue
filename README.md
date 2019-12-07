# Monorepo for the Ember Glue library of ui components.

The Ember Glue Library's design goals:

1. Themeable &ndash; Users can create their own themes and create a consistent look for their website using plain CSS variables
1. Accessible &ndash; Components can be used by anyone.
1. Responsive &ndash; Components should work regardless of size of the viewport and in both mobile and desktop.

The Ember Glue Library's technical requirements:

1. Tests &ndash; All components are fully tested
1. Glimmer Componentes &ndash; All components are modern glimmer components
1. Tree Shakeable &ndash; Components are in separate packages for depending on only what you need today and easy tree shaking by embroider tomorrow
1. TypeScript &ndash; All component files are in TypeScript
1. No Sass, Less, PostCSS, CSS preprocessors, CSS frameworks &ndash; Users should be able to chose their own preprocessor or framework of choice. Everything implemented using plain CSS.
1. Works on modern browsers, mobile, and desktop. IE is not supported, but Edge is.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).