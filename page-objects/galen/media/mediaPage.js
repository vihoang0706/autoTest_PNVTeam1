this.MediaPage = $page("Add media",{
    inputImage: "input#async-upload",
    ButtonUpload: "input#html-upload"
}, {
    addMediaFunction: function (imageName) {
        this.inputImage.require('path').resolve(__dirname + imageName);
        this.ButtonUpload.click();
      }
});