/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  'lodash': 'vendor/lodash',
  // 'angular2-infinite-scroll': 'vendor/angular2-infinite-scroll'
};

/** User packages configuration. */
const packages: any = {
  '@angular2-material/toolbar': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'toolbar'
  },
  '@angular2-material/progress-circle': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'progress-circle'
  },
  '@angular2-material/icon': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'icon'
  },
  '@angular2-material/sidenav': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'sidenav'
  },
  '@angular2-material/card': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'card'
  },
  'lodash': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'lodash'
  },
  // 'angular2-infinite-scroll': {
  //   format: 'cjs',
  //   defaultExtension: 'js',
  //   main: 'angular2-infinite-scroll'
  // },
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/app-shell',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/search-bar',
  'app/header',
  'app/header/nav',
  'app/header/banner',
  'app/hero',
  'app/home-page',
  'app/+home-page',
  'app/+browse-page',
  'app/shared/footer',
  'app/+product-page',
  'app/shared/spinner',
  'app/shared/product-cell',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
