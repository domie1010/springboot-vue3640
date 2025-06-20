const base = {
    get() {
        return {
            url : "http://localhost:8080/kucuenguanlic/",
            name: "kucuenguanlic",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/kucuenguanlic/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "库存管理系统"
        } 
    }
}
export default base
