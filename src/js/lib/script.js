// 获取商品分类的内容
$.get('http://h6.duchengjiu.top/shop/api_cat.php', function(response) {

    var obj = response.data;

    // console.log(obj);


    for (var i = 0; i < obj.length; i++) {
        $('#catList').append('<li><a href="catlist.html?catId=' + obj[i].cat_id + '">' + obj[i].cat_name + '</a></li>');
    }

})

var data = null;

// 获取热门商品的内容  调用一个真实的接口 做过处理没有跨域问题
$.get('http://h6.duchengjiu.top/shop/api_goods.php', function(response) {

    var obj = response.data;

    console.log(obj);

    // 把数据给data变量
    data = obj;

    var html = '';

    for (var i = 0; i < obj.length; i++) {
        html += `<div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="thumbnail">
                        <img src=${obj[i].goods_thumb} alt="...">
                        <div class="caption">
                            <h3>${obj[i].goods_name}</h3>
                            <p>${obj[i].goods_desc}</p>
                            <p>价格：￥ ${obj[i].price} </p>
                            <p><a href="cart.html?goodsId=${obj[i].goods_id}" class="btn btn-warning" role="button">加入购物车</a></p>
                        </div>
                    </div>
                </div>`;
    }
    $('#goodList').html(html);


    // 通过data这个存储数据的变量，给购物车添加内容
    for (var i = 0; i < data.length; i++) {

        $('#cartList').append('<li><img class="cartImg" src="' + data[i].goods_thumb + '" /><p>' + data[i].goods_name + '</p></li>')
    }
    var num = data.length;
    $('#cartNum').html('购物车(' + num + ')');
})