/// <reference path="../layer-v1.9.3/layer.js" />
/// <reference path="jquery-1.7.1.js" />
/// <reference path="LayerUtil.js" />

/************************************************************************************
* 作   者：段胜利
* 描   述：上传图片本地预览
* 备   注：
* 更新说明：
        6.2016-7-22 实现了safari的后台上传功能。兼容了所有浏览器。 
        5.2016-6-1 必须使用jquery-1.8.2.min.js版本，IE兼容模式下，图片预览和上传图片不能兼得。 
        4.2016-5-25 图片格式不正确的提示框，更换成layAlert.err格式了。 
        3.jquery-1.7.1.js必须使用这个版本，至少使用1.9版本，不行报错。 
        2.处理了，IE兼容性的问题，FILE必须用隐藏它的上级DIV。否则好像IE8不兼容，IE11兼容。 
        1.隐藏的file先显示出来 否则不能上传,IE下兼容性问题

*/
/*********例子程序***************************************************************************

$(function ()
{
    $("form [name=logoFile]").uploadPreview({ Img: "ImgPr", Width: 200, Height: 200, ImgType: ["gif", "jpeg", "jpg", "bmp", "png"], 
    Callback: function () { 
        $("#mvc_logo_div").hide();
    } });
})

<input  type="button"onclick='$("#mvc_logo_div").show(); $("#mvc_logo").click(); ' value="选择文件"style="padding:5px;"/>&nbsp;建议图片尺寸140*130像素，图片格式jpg/gif/png
<div id="mvc_logo_div" style="display:none">
    <input id="mvc_logo" name="mvc_logo" type="file" class="l_gsan" />
</div>

<img id="ImgPreview" name="ImgPreview" style="width:200px;" src="@(Model.nvc_pic_url)" />

/************************************************************************************
/*
*名称:图片上传本地预览插件 v1.1
*作者:周祥
*时间:2013年11月26日
*介绍:基于JQUERY扩展,图片上传预览插件 目前兼容浏览器(IE 谷歌 火狐) 不支持safari
*插件网站:http://keleyi.com/keleyi/phtml/image/16.htm
*参数说明: Img:图片ID;Width:预览宽度;Height:预览高度;ImgType:支持文件类型;Callback:选择文件显示图片后回调方法;
*使用方法: 
<div>
<img id="ImgPr" width="120" height="120" /></div>
<input type="file" id="up" />
把需要进行预览的IMG标签外 套一个DIV 然后给上传控件ID给予uploadPreview事件
$("#up").uploadPreview({ Img: "ImgPr", Width: 120, Height: 120, ImgType: ["gif", "jpeg", "jpg", "bmp", "png"], Callback: function () { }});
*/
jQuery.fn.extend({
    uploadPreview: function (opts)
    {
        var _self = this, _this = $(this);
        opts = jQuery.extend({
            Img: "ImgPr",
            Width: 100,
            Height: 100,
            ImgType: ["gif", "jpeg", "jpg", "bmp", "png"],
            Callback: function () { },
            Url: "/kindeditor/uploadPreview"  //上传后台服务器图片的处理地址。 
        }
        , opts || {});

        _self.getObjectURL = function (file)
        {
            var url = null;
            if (window.createObjectURL != undefined)
            {
                url = window.createObjectURL(file)
            }
            else if (window.URL != undefined)
            {
                url = window.URL.createObjectURL(file)
            }
            else if (window.webkitURL != undefined)
            {
                url = window.webkitURL.createObjectURL(file)
            }
            return url
        };
        _this.change(function ()
        {
            if (this.value)
            {
                if (!RegExp("\.(" + opts.ImgType.join("|") + ")$", "i").test(this.value.toLowerCase()))
                {
                    layAlert.error("选择文件错误!图片类型必须是<br/>" + opts.ImgType.join("，") + "中的一种");
                    this.value = "";
                    return false
                }
                else
                {
                    try
                    {
                        var reader = new FileReader();
                        reader.onload = function (e)
                        {
                            document.getElementById(opts.Img).setAttribute("src", e.target.result);
                        }
                        reader.readAsDataURL(this.files[0]);
                        //alert("Html5模式");
                        opts.Callback();
                    }
                    catch (e)
                    {
                        //juery.1.9以上版本，不能使用$.browser,用$.support代替了。 这个是折中的方法。 
                        if ($.browser == undefined) {
                            $.browser = {};
                            $.browser.mozilla = /firefox/.test(navigator.userAgent.toLowerCase());
                            $.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
                            $.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
                            $.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
                            $.browser.safari = /safari/.test(navigator.userAgent.toLowerCase());
                        }

                        if ($.browser.msie)//如果是Ie
                        {
                            try //普通预览方法。
                            {
                                $("#" + opts.Img).attr('src', _self.getObjectURL(this.files[0]));
                                //alert("普通方法模式");
                                opts.Callback();
                            }
                            catch (e) //Ie滤镜方法。 
                            {
                                $(this).show();  //隐藏的file先显示出来 否则不能上传,IE下兼容性问题

                                var src = "";
                                var obj = $("#" + opts.Img);
                                var div = obj.parent("div")[0];
                                _self.select();
                                if (top != self)
                                {
                                    window.parent.document.body.focus()
                                }
                                else
                                {
                                    _self.blur()
                                }
                                src = document.selection.createRange().text;
                                document.selection.empty();
                                obj.hide();

                                obj.parent("div").css({
                                    'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)', 'width': (opts.Width - 6) + 'px', 'height': (opts.Height - 6) + 'px'
                                });
                                div.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = src;

                                //alert("Ie预览模式");
                                opts.Callback();
                            }
                        }
                        else if ($.browser.safari==false)  //服务端上传图片方式。 
                        {
                            $("#" + opts.Img).attr('src', _self.getObjectURL(this.files[0]));
                            //alert("普通方法模式");
                            opts.Callback();
                        }
                        else
                        {
                            //查找表单
                            var fm = $(this).parents("form");
                            if (fm.length>0)
                            {
                                //alert("开始上传");
                                new AjaxUtil({
                                    url: opts.Url + "?Width=" + opts.Width + "&Height=" + opts.Height,
                                    beforeSend: function () {},
                                    complete: function () { }
                                }).runForm(fm, function (r)
                                {
                                    $("#" + opts.Img).attr('src', r.data);
                                    opts.Callback();
                                });
                            }
                        }
                    }
                }
            }
        })
    }
});