const cls = require('./cls.js')

module.exports = class colours {
	constructor(type) {
    if(!type) {
			this.type = "font"
		} else if(type === "bg") {
      this.type = "background" 
    } else if(type === "fg") {
			this.type = "font"
		} else {
			this.type = "font"
		}
  }

	reset(text) {
    var resetedText
		if(!text) {
			resetedText = ""
		} else {
			resetedText = text
		}
    
    return `${cls.reset}${resetedText}`
 	}
     
     bright(text) {
    var brightedText
		if(!text) {
			brightedText = ""
		} else {
			brightedText = text
		}
    
    return `${cls.bright}${brightedText}`
 	}
 
     dim(text) {
    var dimText
		if(!text) {
			dimText = ""
		} else {
			dimText = text
		}
    
    return `${cls.dim}${dimText}`
 	}
 
     underscore(text) {
    var underscoreText
		if(!text) {
			underscoreText = ""
		} else {
			underscoreText = text
		}
    
    return `${cls.underscore}${underscoreText}`
 	}
 
     blink(text) {
    var blinkText
		if(!text) {
			blinkText = ""
		} else {
			blinkText = text
		}
    
    return `${cls.blink}${blinkText}`
 	}
 
     reverse(text) {
    var reverseText
		if(!text) {
			reverseText = ""
		} else {
			reverseText = text
		}
    
    return `${cls.reverse}${reverseText}`
 	}
 
     hidden(text) {
    var hiddenText
		if(!text) {
			hiddenText = ""
		} else {
			hiddenText = text
		}
    
    return `${cls.hidden}${hiddenText}`
 	}
 
     black(text) {
       var blackText
       var blackColor
		if(this.type === "font") {
		     blackColor = cls.fg.black
		     if(!text) {
			   blackText = ""
		    } else {
			   blackText = text
		    }
        } else if(this.type === "background") {
            blackColor = cls.bg.black
            if(!text) {
			   blackText = ""
		    } else {
			   blackText = text
		    }
        }
    
    return `${blackColor}${blackText}`
 	}
 
     red(text) {
       var redText
       var redColor
		if(this.type === "font") {
		     redColor = cls.fg.red
		     if(!text) {
			   redText = ""
		    } else {
			   redText = text
		    }
        } else if(this.type === "background") {
            redColor = cls.bg.red
            if(!text) {
			   redText = ""
		    } else {
			   redText = text
		    }
        }
    
    return `${redColor}${redText}`
 	}
 
    green(text) {
       var greenText
       var greenColor
		if(this.type === "font") {
		     greenColor = cls.fg.green
		     if(!text) {
			   greenText = ""
		    } else {
			   greenText = text
		    }
        } else if(this.type === "background") {
            greenColor = cls.bg.green
            if(!text) {
			   greenText = ""
		    } else {
			   greenText = text
		    }
        }
    
    return `${greenColor}${greenText}`
 	}
 
     yellow(text) {
       var yellowText
       var yellowColor
		if(this.type === "font") {
		     yellowColor = cls.fg.yellow
		     if(!text) {
			   yellowText = ""
		    } else {
			   yellowText = text
		    }
        } else if(this.type === "background") {
            yellowColor = cls.bg.yellow
            if(!text) {
			   yellowText = ""
		    } else {
			   yellowText = text
		    }
        }
    
    return `${yellowColor}${yellowText}`
 	}
 
     blue(text) {
       var blueText
       var blueColor
		if(this.type === "font") {
		     blueColor = cls.fg.blue
		     if(!text) {
			   blueText = ""
		    } else {
			   blueText = text
		    }
        } else if(this.type === "background") {
            blueColor = cls.bg.blue
            if(!text) {
			   blueText = ""
		    } else {
			   blueText = text
		    }
        }
    
    return `${blueColor}${blueText}`
 	}

    magenta(text) {
       var mText
       var mColor
		if(this.type === "font") {
		     mColor = cls.fg.magenta
		     if(!text) {
			   mText = ""
		    } else {
			   mText = text
		    }
        } else if(this.type === "background") {
            mColor = cls.bg.magenta
            if(!text) {
			   mText = ""
		    } else {
			   mText = text
		    }
        }
    
    return `${mColor}${mText}`
 	}
 
    cyan(text) {
       var cyanText
       var cyanColor
		if(this.type === "font") {
		     cyanColor = cls.fg.cyan
		     if(!text) {
			   cyanText = ""
		    } else {
			   cyanText = text
		    }
        } else if(this.type === "background") {
            cyanColor = cls.bg.cyan
            if(!text) {
			   cyanText = ""
		    } else {
			   cyanText = text
		    }
        }
    
    return `${cyanColor}${cyanText}`
 	}
 
     white(text) {
       var wText
       var wColor
		if(this.type === "font") {
		     wColor = cls.fg.white
		     if(!text) {
			   wText = ""
		    } else {
			   wText = text
		    }
        } else if(this.type === "background") {
            wColor = cls.bg.white
            if(!text) {
			   wText = ""
		    } else {
			   wText = text
		    }
        }
    
    return `${wColor}${wText}`
 	}
 
     crimson(text) {
       var crText
       var crColor
		if(this.type === "font") {
		     crColor = cls.fg.crimson
		     if(!text) {
			   crText = ""
		    } else {
			   crText = text
		    }
        } else if(this.type === "background") {
            crColor = cls.bg.crimson
            if(!text) {
			   crText = ""
		    } else {
			   crText = text
		    }
        }
    
    return `${crText}${crColor}`
 	}
}