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
       */
      render (text: string, nextLetter: number) {
        scene.createRenderable(-1, (image: Image, camera: scene.Camera) => {
            this.image = image 
    
            /***
             * image.drawTransparentImage(this.image, 80, 60)
             * we are not using this one  anymore because it will just add text and a background 
             * we just need is to render the text
             */
            
            game.currentScene().eventContext.registerFrameHandler(1000, () => {
               pause(100)
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

