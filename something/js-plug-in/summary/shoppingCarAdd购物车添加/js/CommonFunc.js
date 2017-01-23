function AutoResizeImage(width, height, obj)
{
	//定义要限制的图片宽高,这个宽高要同style里面定义的相同，小于限定高宽的图片不操作
	var image = $(obj);
	if(image.width() > width)
	{
		image.height(width / image.width() * image.height());
		image.width(width);
	}
	if(image.height() > height)
	{
		image.width(height / image.height() * image.width());
		image.height(height);
	}
	if(image.height() > 0 && image.height() < height)
	{
		image.css("paddingTop", (height - image.height()) / 2 + "px");
		image.css("paddingBottom", (height - image.height()) / 2 + "px");
	}
};
