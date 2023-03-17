const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  automationName: 'heliosautomation',
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: __dirname + 'C:/Users/CALUVEMA/Desktop/heliosautomation/application-helios.apk',
      platformName: 'Android',
      app: 'C:/Users/CALUVEMA/Desktop/heliosautomation/application-helios.apk',
      desiredCapabilities:{
        appPackage: 'com.sigtrans.com',
        appActivity: 'com.sigtrans.com.MainActivity',
        deviceName: 'ATM_Virtual',
        platformVersion: '10'
        
      },
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  plgins: {
    retryFailedStep: {
      enable: true
    },

  }
}