import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { SharedService } from "../../services/shared.service";

export class AuthInterceptor implements HttpInterceptor{

    shared: SharedService;

    constructor(){
        this.shared = SharedService.getInstance();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any>>{
        throw new Error("Method not implement");
    }
}