function badge(license) {
    var badge;
    switch(license) {
      case "Apache": 
        return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      case "GNU": 
        return "![License](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      case "MIT":  
        return "![License](https://img.shields.io/badge/License-MIT-yellow.svg)";
      case "Mozilla": 
        return "![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
    }
    return badge;
  }

module.exports = badge;