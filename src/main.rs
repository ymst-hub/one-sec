use actix_files::Files;
use actix_web::{
    web, App, HttpServer, HttpRequest, HttpResponse, Error
};

#[actix_web::main]
async fn main() -> std::io::Result<()> {

    HttpServer::new(|| {
        App::new()
            //Index.htmlの画面を静的に表示
            .service(Files::new("/", "./asserts/").index_file("index.html"))

    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
