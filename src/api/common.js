import server from '../utils/request.js'

export function getFours(obj){ 
     return server({  //返回来的是一个 promise   
        method:"GET",
        url:"/api/getfours",
        params:obj
     })
}


export function getLogin(obj){
      
    return server({
           
       method:"POST",
       url:"/api/login",
       data:obj

    })

}

export function getType(obj){

   return server({
      method:"GET",
      url:"/api/manage/category/list",
      params:obj,
   })
}
export function updataType(obj){
   return server({
      method:"POST",
      url:"/api/manage/category/update",
      data:obj
   })
}

export function addtype(obj){
   return server ({
      method:"post",
      url:'/api/manage/category/add',
      data:obj,
   })
}
export function getUser(obj){
   return server({
      method:"GET",
      url:"/api/manage/user/list",
      params:obj,
   })
}
export function addUser(obj){
   return server ({
      method:"post",
      url:'/api/manage/user/add',
      data:obj,
   })
}
export function updataUser(obj){
   return server ({
      method:"post",
      url:'/api/manage/user/update',
      data:obj,
   })
}
export function delUser(obj){
   return server ({
      method:"post",
      url:'/api/manage/user/delete',
      data:obj,
   })
}

export function addRole(obj){
   return server ({
      method:"post",
      url:'/api/manage/role/add',
      data:obj,
   })
}

export function getRole(obj){
   return server({
      method:"GET",
      url:"/api/manage/role/list",
      params:obj,
   })
}

export function reqUpdateRole(obj){
   return server ({
      method:"post",
      url:'/api/manage/role/update',
      data:obj,
   })
}
export function getGoods(obj){
   return server({
      method:"GET",
      url:"/api/manage/product/list",
      params:obj,
   })
}

export function updateStatus(obj){
   return server ({
      method:"post",
      url:'/api/manage/product/updateStatus',
      data:obj,
   })
}
export function searchGoods(obj){
   return server({
      method:"GET",
      url:"/api/manage/product/search",
      params:obj,
   })
}

export function getInfo(obj){
   return server({
      method:"GET",
      url:"/api/manage/category/info",
      params:obj,
   })
}

export function addGoods(obj){
   return server ({
      method:"post",
      url:'/api/manage/product/add',
      data:obj,
   })
}
export function updataGoods(obj){
   return server ({
      method:"post",
      url:'/api/manage/product/update',
      data:obj,
   })
}

export function getOrder(obj){
   return server({
      method:"GET",
      url:"/api/manage/order/list",
      params:obj,
   })
}

export function searchOrder(obj){
   return server({
      method:"GET",
      url:"/api/manage/order/search",
      params:obj,
   })
}

export function getOrderDesc(obj){
   return server({
      method:"GET",
      url:"/api/manage/order/info",
      params:obj,
   })
}
