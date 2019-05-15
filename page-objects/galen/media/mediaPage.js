this.mediaPage = $page("Add media",{
    inputImage: "input#async-upload",
    inputUpload: "input#html-upload"
}, {
    addImage: AddMediaFunction ("Check UI add Image Media", function(image) {
        this.inputImage.require('path').resolve(__dirname + image);
    })
});