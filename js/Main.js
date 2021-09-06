
var sVue = new Vue({
  el: '#app',
  data: {
    object: {
      name: '菜鸟教程',
      url: 'http://www.runoob.com',
      slogan: '学的不仅是技术，更是梦想！'
    },
    list: []
  }
  ,
  methods: {
    GetData: function () {
      $.get('http://xujoe.com:9090/GetSend?SendKey=c786265a55').then(function (res) {
        document.write(res.body);
        this.list = res.Data;

        console.log(this.list);
      }, function () {
        console.log('请求失败处理');
      });
    }




  }

  ,
  created: function () {

    console.log("created加载完毕")

  }
})

