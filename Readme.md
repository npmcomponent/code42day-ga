*This repository is a mirror of the [component](http://component.io) module [code42day/ga](http://github.com/code42day/ga). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/code42day-ga`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# ga

  Google Analytics tracking snippet
  You might want to use [code42day/ua] instead - it supports new Google Universal Analytics snipper.

## Installation

    $ component install code42day/ga

## API

  Activate Google Analytics on the page and track page

    require('ga')("UA-XXXX-X");

  Alternatively you can define GA property ID as a data attribute of document body

  	<body data-ga-property-id="UA-XXXX-X">

  Check [test/index.html](https://github.com/code42day/ga/blob/master/test/index.html) for example.

## License

  MIT

[code42day/ua]: https://github.com/code42day/ua
