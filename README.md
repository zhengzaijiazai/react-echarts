第一步,通过create-react-app创建ts项目,create-react-app 项目名称 --template typescript

创建好项目后,将@设置为src根路径这样方便后续使用,下载craco库后修改package.json文件,将"start": "react-scripts start"修改为"start": "craco start",将"build": "react-scripts build"修改为"build": "craco build"然后  去tsconfig.json文件修改"baseUrl": "./", "paths": {"@/*": ["./src/*"]}  然后就可以使用了

第三步创建路由下载react-router-dom库,然后创建src/router/index.tsx文件,在里面统一创建路由规则,通过提供的createBrowserRouter方法创建路由规则,然后导出,然后在index.tsx里面通过import {BrowserRouter,RouterProvider} from 'react-router-dom'引入,然后通过RouterProvider组件来渲染路由规则,使用BrowserRouter包裹RouterProvider组件在将创建好的路由规则引入到RouterProvider组件的router属性中,然后就可以使用了

在使用路由懒加载的时候需要引入react提供lazy和Suspense组件配合使用,因为懒加载的时候可能页面会显示不出来,所以我们需要Suspense配合lazy使用(主要是使用里面fallback这个属性里面给到一个等待时间的组件就OK),

在定义ts类型是如果通过props传值的话,如果类型定义的时候写了?的话后续可能不会再次更新值,导致一直拿不到这个值


使用redux在react项目里面配合react-redux使用,再加上@reduxjs/toolkit,,首先下载这三个库,然后创建store文件夹,在里面创建index.ts,reducer.ts,action.ts,type.ts,首先在reducer.ts文件里面创建reducer,reducer是一个函数,第一个参数是state,第二个参数是action(就是一个对象{type:string,[key:string]:unknown}),然后返回的类型是state类型的数据,在里面一般使用switch通过判断action里面的type的分别执行逻辑,然后再index.ts里面通过@reduxjs/toolkit里面的configureStore来创建store,接受一个参数reducer(是一个对象,里面的key是state的名称,value是reducer函数,如果是ts可能会报错需要使用类型断言as Reducer),然后暴露store,然后需要去入口文件index.tsx或者index.ts里面通过引入react-redux里面的Provider组件,包裹全部组件,然后将store传递给Provider组件的store属性,然后在需要使用的时候引入react-redux里面的useSelector(里面是一个函数,函数里面参数为state),useDispatch,然后使用reducer.
