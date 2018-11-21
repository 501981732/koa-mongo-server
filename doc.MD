REST api

- REST请求仍然是标准的HTTP请求，但是，除了GET请求外，POST、PUT等请求的body是JSON数据格式，请求的Content-Type为application/json；
- REST响应返回的结果是JSON数据格式，因此，响应的Content-Type也是application/json。

例如，商品Product就是一种资源。获取所有Product的URL如下：

```
GET /api/products
```

而获取某个指定的Product，例如，id为123的Product，其URL如下：

```
GET /api/products/123
```

新建一个Product使用POST请求，JSON数据包含在body中，URL如下：

```
POST /api/products
```
更新一个Product使用PUT请求，例如，更新id为123的Product，其URL如下：

```
PUT /api/products/123
```

删除一个Product使用DELETE请求，例如，删除id为123的Product，其URL如下：

```
DELETE /api/products/123
```

资源还可以按层次组织。例如，获取某个Product的所有评论，使用：

```
GET /api/products/123/reviews
```

当我们只需要获取部分数据时，可通过参数限制返回的结果集，例如，返回第2页评论，每页10项，按时间排序：

```
GET /api/products/123/reviews?page=2&size=10&sort=time
```
