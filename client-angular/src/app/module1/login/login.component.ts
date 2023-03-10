import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username: string = 'uuu';
    password: string = 'ppp';

    constructor(private _router: Router, private _commonService: CommonService) { }

    ngOnInit() {
    }

    login(): void {
        if (this.username === 'uuu' && this.password === 'ppp') {
            this._router.navigate(['/home']);
        } else {
          alert('Invalid Credentials')
        }
    }

}
