import path from "path";

export default function aboutNav(request, response) {
    const pathJoin = path.join(__dirname + '/views');
    return response.render(pathJoin + "/about");
}
