var _view = {
    hasFile: 0 //表示是否上传了文件。 
};

$(function ()
{
    $("#infoForm [name=mvc_logo]").uploadPreview({
        Img: "ImgPreview", Width: 136, Height: 136, ImgType: ["gif", "jpeg", "jpg", "bmp", "png"], Callback: function ()
        {
            _view.hasFile = 1;
        }
    });
})