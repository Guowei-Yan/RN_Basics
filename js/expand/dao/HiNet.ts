import Constants from "./Constants"
/**
 * Send get request
 * @param api
 */
export function get(api:string){
    return async (params?:{})=>{
        const {headers,url}=Constants;
        return handleData(fetch(buildParams(api,params),{
            headers:{
                ...headers,
            }
        }))
    }
}
/**
 * process return data
 * @param doSomething 
 */
function handleData(doSomething:Promise<any>){
    return new Promise((resolve,reject)=>{
        doSomething.then((res)=>{
            const type = res.headers.get('Content-Type');
            console.log( typeof type );
            if((type || '').indexOf('json')!=-1){
                return res.json();
            }
            return res.text();
        }).then((results)=>{
            console.log(JSON.stringify(results));
            resolve(results)
        }).catch((error)=>{
            reject(error);
        })
    })
}
export function post(api:string){
    /**
     * first parameter is body. The second one is URL path or searching 
     */
    return (params:{})=>{
        return async(queryParams?:{} | string)=>{
            const { headers , url } = Constants;
            var data = params instanceof FormData ? params : JSON.stringify(params);
            return handleData(fetch(buildParams(url+api,queryParams),{
                method: 'POST',
                body: data,
                headers: {
                    'content-type': 'multipart/form-data',
                    ...headers,
                }
            }))
        }
    }
}
export function login(api:string){
    return (params:{})=>{
        return async(queryParams?:{} | string)=>{
            const { headers , url } = Constants;
            var data = params instanceof FormData ? params : JSON.stringify(params);
            return handleData(fetch(buildParams(url+api,queryParams),{
                method: 'POST',
                body: data,
                headers: {
                    'content-type': 'multipart/form-data',
                    ...headers,
                }
            }))
        }
    }
}
/**
 * Build url params
 * @param url 
 * @param params 
 * @returns 
 */
function buildParams(url:string,params?:{}|string):string{
    let newUrl=new URL(url),finalUrl;
    if(typeof params ==='object'){
        for(const [key,value] of Object.entries(params)){
            newUrl.searchParams.append(key,value as string);
        }
        finalUrl = newUrl.toString();
    }else if(typeof params ==='string'){
        finalUrl=url.endsWith("/")?url+params:url+"/"+params
    }else{
        finalUrl=newUrl.toString();
    }
    console.log('---buildParams----:', finalUrl);
    return finalUrl;
}