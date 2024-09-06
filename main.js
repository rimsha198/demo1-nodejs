
const http= require("http");

const server=http.createServer(
(req, res)=> {
    switch(req.url) {
        case "/": res.end(
            "Hello i'm your server" )
            break;
            case"/about": res.end(
                "You are RIMSHA" )
                break;
                default:res.end(
                    "page is not found 404" )


    }
}
)
server.listen(4545 ,() => console.log(
    "Server is listning....."))
