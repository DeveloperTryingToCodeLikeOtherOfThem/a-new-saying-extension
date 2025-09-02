namespace blinkTextSayRenderer {
    export class RenderText {
     width: number 
     height: number 

      text: string 
      length: number 
      image: Image 

      font: image.Font
      
      constructor (img: Image) {
          this.width = 80
          this.height = 60
          this.text = ""
          this.length = 0
          this.image = img
      }

  
      /**
       * renders the text and make sure the next letter value 1 so it can blink a period time to next time letter word.
        also set the timing how long it blinks on the 3rd parameter if it is 100 pauses for 100 and stays printed for the ammound of time.
       */
      render (text: string, nextLetter: number, millisForPause: number) {
        scene.createRenderable(-1, (image: Image, camera: scene.Camera) => {
            this.image = image 
    
            /***
             * image.drawTransparentImage(this.image, 80, 60)
             * we are not using this one  anymore because it will just add text and a background 
             * we just need is to render the text
             */
            
            game.currentScene().eventContext.registerFrameHandler(1000, () => {
               pause(millisForPause)
                   if (text.length > nextLetter) {
                       image.print(text, this.width, this.height)
                       sprites.create(image)
                   } else {
                       // wait until the next letter is printed
                   }
              
            })
        })
      }

    }
} 

